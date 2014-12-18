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
  (:use [defender-cljs.actors.ship :only [ship]])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)

(def spinning-square (geo/square 200 200 200 200))

(a/set-position! ship [500 500 0])

;;populate the main scene

(doto scene/main
  (scene/add-actor! cam/main-camera)
  (scene/add-object! (geo/square 50 50 100 100 :color 0x330000))
  (scene/add-object! (geo/square 50 100 100 100))
  (scene/add-object! spinning-square)
  (scene/add-actor! ship))

;;populate the hud scene

(doto scene/hud
  (scene/add-actor! cam/hud-camera))

;;clear the inside
(aset dom "innerHTML" "")
(.appendChild dom (-> renderer .-domElement))

(defn animate []
  (system/run-systems {:delta (/ 1 60.)})
  (obj/rotate! spinning-square 0.01)
  (physics/update-actor-physics ship (/ 1 60.))
  (physics/update-actor-physics cam/main-camera (/ 1 60.))
)

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer (-> scene/main :scene-instance) (:entity cam/main-camera))
  (aset renderer "autoClear" false)
  (.render renderer (-> scene/hud :scene-instance) (:entity cam/hud-camera))
  (aset renderer "autoClear" true)
  (animate))

(overlay/init (-> scene/hud :scene-instance))

(render)
