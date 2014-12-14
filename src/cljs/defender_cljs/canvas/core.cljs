(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.hud :as hud]
            [defender-cljs.canvas.text :as text]
            [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.overlay.core :as overlay]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.physics :as physics]
            [defender-cljs.actor :as a]
            [defender-cljs.events :as e])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

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

(def ship-actor
  (a/create-actor
   ship
   :name "ship"
   :type "ship"))

(physics/add-damped-actor! ship-actor 0.8)

(.log js/console (clj->js ship-actor))

(a/set-velocity! ship-actor [10 0 0])
(a/set-acceleration! ship-actor [19.0 0 0])

;;populate the main scene

(doto scene/main
  (scene/add-object! camera)
  (scene/add-object! (geo/square 50 50 100 100 :color 0x330000))
  (scene/add-object! (geo/square 50 100 100 100))
  (scene/add-object! spinning-square)
  (scene/add-actor! ship-actor))

;;populate the hud scene

(doto scene/hud
  (scene/add-object! hud-camera))

;;clear the inside
(aset dom "innerHTML" "")
(.appendChild dom (-> renderer .-domElement))

(defn animate []
  (obj/rotate! spinning-square 0.01)
  (physics/update-actor-physics ship-actor (/ 1000 60))
  (system/run-systems {:delta (/ 1 60.)}))

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer (-> scene/main :scene-instance) camera)
  ;;(.render renderer main-scene camera)
  (aset renderer "autoClear" false)
  ;;(.render renderer hud-scene hud-camera)
  (.render renderer (-> scene/hud :scene-instance) hud-camera)
  (aset renderer "autoClear" true)
  (animate))

(overlay/init (-> scene/hud :scene-instance))

(render)
