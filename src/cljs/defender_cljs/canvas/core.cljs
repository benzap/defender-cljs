(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.hud :as hud]
            [defender-cljs.canvas.text :as text]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.overlay.core :as overlay]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.physics :as physics]
            [defender-cljs.actor :as a]
            [defender-cljs.events :as e]))

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))

(.setSize renderer width height)

(def camera (cam/make-camera 0 1000 (* 1000 (/ 3 4)) 0))
(def hud-camera (cam/make-camera 0 1000 (* 1000 (/ 3 4)) 0))

(def main-scene (THREE.Scene.))
(def hud-scene (THREE.Scene.))

(def spinning-square (geo/square 200 200 200 200))

(def ship (sprite/make-sprite "ship.png"))
(obj/set-position! ship 500 500)

(.log js/console ship)

(def ship-actor
  (a/create-actor
   ship
   :name "ship"
   :type "ship"))

(a/set-velocity! ship-actor [10 0 0])
(a/set-acceleration! ship-actor [19.0 0 0])


(doto main-scene
  (.add camera)
  (.add (geo/square 50 50 100 100 :color 0x330000))
  (.add (geo/square 50 100 100 100))
  (.add spinning-square)
  (.add ship)
  )

(def some-line
  (geo/draw-line [[530 530 0] [570 570 0]]
                 :line-width 5
                 :color 0x00ff00))

(doto hud-scene
  (.add hud-camera)
  (.add some-line))

;;clear the inside
(aset dom "innerHTML" "")
(.appendChild dom (-> renderer .-domElement))

(defn animate []
  (obj/rotate! spinning-square 0.01)
  (physics/update-actor-physics ship-actor (/ 1000 60)))

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer main-scene camera)
  (aset renderer "autoClear" false)
  (.render renderer hud-scene hud-camera)
  (aset renderer "autoClear" true)
  (animate))

(overlay/init hud-scene)

(render)
