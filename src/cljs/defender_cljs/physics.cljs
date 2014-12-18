(ns defender-cljs.physics
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.system :as system]))

(defn update-actor-physics [actor delta]
  (let [delta-sec (/ delta 1000)
        delta-func (partial * delta-sec)

        ;;apply our force generator to our acceleration
        force-accum (a/get-force-accumulator actor)
        inverse-mass (a/get-inverse-mass actor)
        delta-acceleration (map (partial * inverse-mass) force-accum)
        
        ;;get our acceleration
        acceleration (a/get-acceleration actor)

        ;;apply our force accumulator to the acceleration
        acceleration
        (a/set-acceleration! actor (map + delta-acceleration acceleration))

        ;;change in velocity due to acceleration
        delta-velocity (map delta-func acceleration)

        velocity (a/get-velocity actor)
        ;;apply this change in velocity
        velocity (a/set-velocity! actor (map + delta-velocity velocity))

        ;;from our updated velocity, we can get the change in position
        delta-position (map delta-func velocity)

        ;;apply the change in position
        current-position (a/get-position actor)
        new-position (map + delta-position current-position)
        position (a/set-position! actor new-position)

        ;;apply damping
        damping (a/get-damping actor)
        velocity (a/set-velocity!
                  actor
                  (map (fn [x]
                         (* x (.pow js/Math damping delta-sec))) velocity))
        
        ]
    ;;clear our force accumulator for the next iteration
    (a/set-force-accumulator! actor [0 0 0])))


;;Drag Generator
(def dragged-actors (atom []))

(defn add-drag!
  "Based on the drag coefficient V(normal) ( k1 |V| + k2 |V|^2 )"
  [actor &
   {:keys [k1 k2]
    :or {k1 1.0 k2 1.0}}]
  (swap! dragged-actors conj {:actor actor :k1 k1 :k2 k2}))

(defn apply-drag-generator [drag-reg]
  (let [actor (:actor drag-reg)
        k1 (:k1 drag-reg)
        k2 (:k2 drag-reg)

        velocity (a/get-velocity actor)

        velocity-magnitude
        (->> velocity
             (map #(* % %))
             (reduce +)
             (Math/sqrt))
        
        drag-speed
        (+
         (* k1 velocity-magnitude)
         (* k2 k2 velocity-magnitude))
        
        velocity-normal
        (if (not= velocity-magnitude 0)
          (map #(/ % velocity-magnitude) velocity)
          [0 0 0])
        
        force (map #(* (- drag-speed) %) velocity-normal)
        ]
    (a/add-force! actor force)))

(system/add-system!
 :drag-force-generator
 (reify system/System
   (run [_ props]
     (doseq [dragged @dragged-actors]
       (apply-drag-generator dragged)))))

;;Spring Force Generator
(def springed-actors (atom []))

(defn add-spring!
  "Registers an actor to be affected by springy behaviour
  
  Optional Arguments:

  spring-constant -- defines the spring constant, k [default: 0.1]

  spring-length -- defines the length of the spring [default: 1]

  lock-x-axis -- if true, prevents the spring from 
                 affecting the x axis [default: false]

  lock-y-axis -- if true, prevents the spring from 
                 affecting the y axis [default: false]

  type -- defines more specialized spring behaviour. types are discussed below
          [default: :basic]

  anchor-position -- position of the anchor, that the spring follows

  Spring types: 
  
  :basic -- provides basic spring behaviour, for pushing and pulling
            from a fixed point based on the spring-length
  "
  [actor & {:keys [
                   type
                   spring-constant
                   spring-length
                   lock-x-axis
                   lock-y-axis
                   anchor-position
                   ]
            :or {type :basic
                 spring-constant 0.1
                 spring-length 1
                 lock-x-axis false
                 lock-y-axis false
                 anchor-position
                 (a/get-position actor)}}]
  (let [spring-reg
        {:actor actor
         :type type
         :spring-constant spring-constant
         :spring-length spring-length
         :lock-x-axis lock-x-axis
         :lock-y-axis lock-y-axis
         :anchor-position (atom anchor-position)}]
    (swap! springed-actors conj spring-reg)
    spring-reg))

(defn update-spring-anchor! [spring-reg & [x y z]]
  (reset! (-> spring-reg :anchor-position) [x y (or z 0)]))

(defn get-spring-force [spring-reg]
  (let [actor (:actor spring-reg)

        position (a/get-position actor)
        anchor-position @(:anchor-position spring-reg)
        spring-length (:spring-length spring-reg)
        spring-constant (:spring-constant spring-reg)
        
        force-vector (map - position anchor-position)
        
        force-magnitude
        (->> force-vector
             (map #(Math/pow % 2))
             (reduce +)
             (Math/sqrt))
        
        force-spring
        (->> force-magnitude
             (+ (- spring-length))
             (* spring-constant))
        
        force-normal
        (if (not= force-magnitude 0)
          (map #(/ % force-magnitude) force-vector)
          [0.001 0.001 0])
        
        final-force
        (map (partial * (- force-spring)) force-normal)
        
        ]
    final-force))

(defmulti apply-spring-generator
  (fn [spring-reg props]
    (-> spring-reg :type)))

(defmethod apply-spring-generator :basic
  [spring-reg props]
  (let [actor (:actor spring-reg)
        spring-force (get-spring-force spring-reg)]
    (a/add-force! actor spring-force)))

(defrecord SpringForceGenerator []
  system/System
  (run [_ props]
    (doseq [spring-reg @springed-actors]
      (apply-spring-generator spring-reg props))))

(system/add-system! :spring-force-generator (SpringForceGenerator.))


