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
        (.log js/console damping delta)
        (apply-damping-generator actor damping delta)))))

(system/add-system! :damping-generator (DampingGenerator.))
