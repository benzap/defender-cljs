(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.hud :as hud]))

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def left-bound)

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)

(def camera (THREE.OrthographicCamera. 0 1000
                                       (* 1000 (/ 3 4)) 0
                                       1000 -1000))

(def hud-camera (THREE.OrthographicCamera. 0 1000
                                           (* 1000 (/ 3 4)) 0
                                           1000 -1000))

(defn square [x y width height
              & {:keys [color]
                 :or {color 0xaaffaa}}]
  (let [geometry (THREE.BoxGeometry. width height 1)
        material (THREE.MeshBasicMaterial. #js {:color color})
        mesh (THREE.Mesh. geometry material)]
    (obj/set-position! mesh x y)
    mesh))

(def main-scene (THREE.Scene.))
(def hud-scene (THREE.Scene.))

(def spinning-square (square 200 200 200 200))

(doto main-scene
  (.add camera)
  (.add (square 50 50 100 100 :color 0x330000))
  (.add (square 50 100 100 100))
  (.add spinning-square)
  )

(def score-label (hud/create-label "score" :size 30))

(obj/set-position! score-label 10 700)

(doto hud-scene
  (.add hud-camera)
  #_(.add (square 500 10 1000 20 :color 0x555555))
  (.add score-label))

(.appendChild dom (-> renderer .-domElement))

(defn animate []
  (obj/rotate! spinning-square 0.01))

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer main-scene camera)
  (aset renderer "autoClear" false)
  (.render renderer hud-scene hud-camera)
  (aset renderer "autoClear" true)
  (animate))

(render)
