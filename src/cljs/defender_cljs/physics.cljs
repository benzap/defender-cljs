(ns defender-cljs.physics
  (:use [defender-cljs.utils :only [log]]
        [defender-cljs.vector :only [mag norm clamp]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.system :as system]))

(defn update-actor-physics [actor delta]
  (let [delta-func (partial * delta)

        velocity (a/get-velocity actor)
        delta-velocity (map delta-func velocity)

        position (a/get-position actor)
        position (a/set-position! actor (map + delta-velocity position))
        
        acceleration (a/get-acceleration actor)
        force-accum (a/get-force-accumulator actor)
        inverse-mass (a/get-inverse-mass actor)
        delta-force (map #(* inverse-mass %) force-accum)
        
        res-acceleration (map + delta-force acceleration)
        delta-acceleration (map delta-func res-acceleration)
        
        velocity (a/set-velocity! actor (map + delta-acceleration velocity))

        damping (a/get-damping actor)
        delta-damping (Math/pow damping delta)
        
        velocity (a/set-velocity! actor (map #(* delta-damping %) velocity))
        velocity (a/set-velocity! actor (clamp velocity 1e10))
        ]
    ;;clear our force accumulator for the next iteration
    (a/set-force-accumulator! actor [0 0 0])))


;;Drag Generator
(def dragged-actors (atom []))

(defn add-drag!
  "Based on the drag coefficient V(normal) ( k1 |V| + k2 |V|^2 )"
  [actor &
   {:keys [k1 k2]
    :or {k1 0.0 k2 0.0}}]
  (swap! dragged-actors conj {:actor actor :k1 k1 :k2 k2}))

(defn apply-drag-generator [drag-reg]
  (let [actor (:actor drag-reg)
        k1 (:k1 drag-reg)
        k2 (:k2 drag-reg)

        velocity (a/get-velocity actor)

        velocity-mag (mag velocity)
        
        drag-speed
        (+
         (* k1 velocity-mag)
         (* k2 velocity-mag velocity-mag))
        
        force (map #(* (- drag-speed) %) (norm velocity))
        
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
  :basic-exponential -- basic spring behaviour, with exponential curve

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

        lock-x-axis (:lock-x-axis spring-reg)
        lock-y-axis (:lock-y-axis spring-reg)
        
        [fx fy fz] (map - position anchor-position)

        force-vector
        [(if lock-x-axis 0 fx)
         (if lock-y-axis 0 fy)
         fz]
        
        force-spring
        (->> (mag force-vector)
             (+ (- spring-length))
             (* spring-constant))
        
        final-force
        (map (partial * (- force-spring)) (norm force-vector))

        ;;clamp the final force, so it doesn't get out of control
        final-force (clamp final-force 1e4)
        ]
    final-force))

(defmulti apply-spring-generator
  (fn [spring-reg props]
    (-> spring-reg :type)))

(defmethod apply-spring-generator :basic
  [spring-reg props]
  (let [actor (:actor spring-reg)
        spring-force (get-spring-force spring-reg)]
    (a/add-force! actor (clamp spring-force 1e4))))

(defmethod apply-spring-generator :basic-exponential
    [spring-reg props]
  (let [actor (:actor spring-reg)
        spring-force (get-spring-force spring-reg)
        spring-force (map #(Math/exp 2 %) spring-force)
        ]
    (a/add-force! actor (clamp spring-force 1e4))))

(defrecord SpringForceGenerator []
  system/System
  (run [_ props]
    (doseq [spring-reg @springed-actors]
      (apply-spring-generator spring-reg props))))

(system/add-system! :spring-force-generator (SpringForceGenerator.))


