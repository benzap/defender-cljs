(ns defender-cljs.actors.ship
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.physics :as physics]
            [defender-cljs.events :as events])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(def damping 0.7)
(def ship-thrust-speed 2000.0)
(def ship-elevation-speed 800.0)

(def ship-sprite (sprite/make-sprite "ship.png"))

(def ship
  (a/create-actor
   ship-sprite
   :name "ship"
   :type "ship"))

(physics/add-damped-actor! ship damping)



(on-keydown
 :left
 (a/update-acceleration! ship [(- ship-thrust-speed) 0 0]))

(on-keyup
 :left
 (a/update-acceleration! ship [ship-thrust-speed 0 0]))

;;event listeners

(on-keydown
 :right
 (a/update-acceleration! ship [ship-thrust-speed 0 0]))

(on-keyup
 :right
 (a/update-acceleration! ship [(- ship-thrust-speed) 0 0]))

(on-keydown
 :up
 (a/update-velocity! ship [0 ship-elevation-speed 0]))

(on-keyup
 :up
 (let [[x _ z] (a/get-velocity ship)]
   (a/set-velocity! ship [x 0 z])))

(on-keydown
 :down
 (a/update-velocity! ship [0 (- ship-elevation-speed) 0]))

(on-keyup
 :down
 (let [[x _ z] (a/get-velocity ship)]
   (a/set-velocity! ship [x 0 z])))
