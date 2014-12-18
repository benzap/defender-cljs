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
        
        ]
    ;;clear our force accumulator for the next iteration
    (a/set-force-accumulator! actor [0 0 0])))

;;force generators

;;Damping generator, which damps the velocity.
(def damped-actors (atom []))
(defn apply-damping-generator
  "Takes an actor, and applies damping to the velocity"
  [actor damping delta]
  (let [velocity (a/get-velocity actor)]
    (a/set-velocity! actor (map (fn [x]
                                  (* x (.pow js/Math damping delta))) velocity))))

(defn add-damping! [actor damping]
  (swap! damped-actors conj [actor damping]))

(defrecord DampingGenerator []
  system/System
  (run [_ props]
    (doseq [pair @damped-actors]
      (let [actor (first pair)
            damping (second pair)
            delta (or (:delta props) (/ 1. 60.))]
        (apply-damping-generator actor damping delta)))))

(system/add-system! :damping-generator (DampingGenerator.))

;;Spring generator
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


