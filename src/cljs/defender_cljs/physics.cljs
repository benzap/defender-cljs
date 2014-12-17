(ns defender-cljs.physics
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.system :as system]))

(defn update-actor-physics [actor delta]
  (let [delta-sec (/ delta 1000)
        delta-func (partial * delta-sec)

        ;;get our acceleration and get the change in velocity
        acceleration (a/get-acceleration actor)
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
        
        ]))

;;force generators

;;Damping generator, which damps the velocity.
(def damped-actors (atom []))
(defn apply-damping-generator
  "Takes an actor, and applies damping to the velocity"
  [actor damping delta]
  (let [velocity (a/get-velocity actor)]
    (a/set-velocity! actor (map (fn [x]
                                  (* x (.pow js/Math damping delta))) velocity))))

(defn add-damped-actor! [actor damping]
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

(defn add-springy-actor!
  "Registers an actor to be affected by springy behaviour
  
  Optional Arguments:

  spring-constant -- defines the spring constant, k [default: 5]

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
                 spring-constant 5
                 spring-length 1
                 lock-x-axis false
                 lock-y-axis false
                 anchor-position
                 (take 2 (a/get-position actor))}}]
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

(defn update-spring-anchor! [spring-reg & [x y]]
  (reset! (-> spring-reg :anchor-position) [x y]))

(defmulti apply-spring-generator
  (fn [spring-reg props]
    (-> spring-reg :type)))

(defmethod apply-spring-generator :basic
  [spring-reg props]
  (let [delta (props :delta)]))

(defrecord SpringForceGenerator []
  system/System
  (run [_ props]
    (doseq [spring-reg @springed-actors]
      (apply-spring-generator spring-reg props))))

(system/add-system! :spring-force-generator (SpringForceGenerator.))
