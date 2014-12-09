(ns defender-cljs.physics
  (:require [defender-cljs.actor :as a]))

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
  [actor damping]
  (let [velocity (a/get-velocity actor)]
    (a/set-velocity! actor (map (partial * damping) velocity))))

