(ns defender-cljs.actors.ship
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.physics :as physics]
            [defender-cljs.events :as events]
            [defender-cljs.constants :as c])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(def mass 1)
(def damping 1.0)
(def ship-thrust-speed 4000.0)
(def ship-elevation-speed 800.0)

(def ship-sprite (sprite/make-sprite "ship.png"))

(def ship
  (a/create-actor
   ship-sprite
   :name "ship"
   :type "ship"
   :damping damping
   :inverse-mass (/ 1 mass)))

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

(on-keydown
 (c/keyboard-config :fire)
 (log "firing phasers!"))

(on-keydown
 (c/keyboard-config :bomb)
 (log "Bomb!"))

(on-keydown
 (c/keyboard-config :hyperspace)
 (log "Hyperspace!"))

;;drag tests

(physics/add-drag! ship :k1 0.5 :k2 0.00)

;;spring tests

;;tests
(def ship-spring (physics/add-spring!
                  ship
                  :spring-constant 10
                  :spring-length 0))

(physics/update-spring-anchor! ship-spring 500 500 0)

(log ship-spring)

#_(system/add-system!
 :test-system
 (reify system/System
   (run [_ props]
     (a/add-force! ship [10 0 0]))))
