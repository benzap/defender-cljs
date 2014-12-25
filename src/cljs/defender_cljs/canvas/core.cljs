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
  (:use [defender-cljs.utils :only [log get-random-location]]
        [defender-cljs.actors.ship :only [ship]]
        [defender-cljs.enemies.lander :only [make-lander]]
        [defender-cljs.actors.projectile :only [make-projectile]])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown on-timeout]]))

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)

(def spinning-square (geo/square 200 200 200 200))

(a/set-position! ship [500 500 0])

;;testing out landers
(defn gen []
  (let [lander (make-lander)]
    (scene/add-actor! scene/main lander)
    (a/set-position! lander (get-random-location))
    (log "lander" lander)))

(doseq [i (range 50)]
  (gen))

(defn gen-projectile []
  (let [proj (make-projectile)]
    (scene/add-actor! scene/main proj)
    (a/set-position! proj (get-random-location))
    (log "lander" proj)))

#_(doseq [i (range 50)]
  (gen-projectile))

(on-timeout 5 (js/alert "hello!"))

;;populate the main scene

(doto scene/main
  (scene/add-actor! cam/main-camera)
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
  (physics/update-scene scene/main (/ 1 60.))
  (physics/update-scene scene/hud (/ 1 60.))
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
