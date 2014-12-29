(ns defender-cljs.actors.ship
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.physics :as physics]
            [defender-cljs.events :as events]
            [defender-cljs.constants :as c]
            [defender-cljs.actors.projectile :refer [fire-projectile]])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(def mass 1)
(def damping 0.6)
(def ship-thrust-speed 4000.0)
(def ship-elevation-speed 800.0)

;;load our ship assets
(sprite/load-texture :ship "ship.png")

;;create our ship materials
(def main-material (sprite/make-sprite-material :ship))


(def ship-sprite (sprite/make-sprite main-material))

(def ship
  (a/create-actor
   ship-sprite
   :name :ship
   :type :ship
   :damping damping
   :inverse-mass (/ 1 mass)))

#_(physics/add-drag! ship :k1 0.2 :k2 0.001)
(physics/add-drag! ship :k1 0.0 :k2 0.001 :axis [1 0 0])

(def ship-direction (atom :left))
(defn switch-ship-direction []
  (let [direction @ship-direction
        toggle (if (= direction :left)
                 :right
                 :left)]
    (reset! ship-direction toggle)))

(defn thrust-ship []
  (condp = @ship-direction
   :right (a/set-acceleration! ship [(- ship-thrust-speed) 0 0])
   :left (a/set-acceleration! ship [ship-thrust-speed 0 0])))

(defn stop-ship []
  (a/set-acceleration! ship [0 0 0]))

;;event listeners

;;ship movement

(on-keydown
 (c/keyboard-config :thrust)
 (thrust-ship))

(on-keyup
 (c/keyboard-config :thrust)
 (stop-ship))

(on-keydown
 (c/keyboard-config :move-up)
 (a/update-velocity! ship [0 ship-elevation-speed 0]))

(on-keyup
 (c/keyboard-config :move-up)
 (let [[x _ z] (a/get-velocity ship)]
   (a/set-velocity! ship [x 0 z])))

(on-keydown
 (c/keyboard-config :move-down)
 (a/update-velocity! ship [0 (- ship-elevation-speed) 0]))

(on-keyup
 (c/keyboard-config :move-down)
 (let [[x _ z] (a/get-velocity ship)]
   (a/set-velocity! ship [x 0 z])))

(on-keydown
 (c/keyboard-config :switch-directions)
 (switch-ship-direction)
 (if (@events/keys-pressed (c/keyboard-config :thrust))
   (thrust-ship)
   (stop-ship))
 (obj/scale! (-> ship :entity) -1 1))

(def ship-fire-speed 2000)

(on-keydown
 (c/keyboard-config :fire)
 (let [[px py _] (a/get-position ship)
       [vx _ _] (a/get-velocity ship)
       vx (condp = @ship-direction
            :right (- (+ (- vx) ship-fire-speed))
            :left (+ vx ship-fire-speed))]
   (log "fire speed" vx)
   (fire-projectile :position [px py 0]
                    :velocity [vx 0 0]
                    :timeout 0.3)))

(on-keydown
 (c/keyboard-config :bomb)
 (log "Bomb!"))

(on-keydown
 (c/keyboard-config :hyperspace)
 (log "Hyperspace!"))







