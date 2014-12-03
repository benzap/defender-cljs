(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.hud :as hud]
            [defender-cljs.canvas.text :as text]
            [defender-cljs.canvas.geometry :as geo]))

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

(def main-scene (THREE.Scene.))
(def hud-scene (THREE.Scene.))

(def spinning-square (geo/square 200 200 200 200))

(doto main-scene
  (.add camera)
  (.add (geo/square 50 50 100 100 :color 0x330000))
  (.add (geo/square 50 100 100 100))
  (.add spinning-square)
  )

(def score-label (text/create-label "score" {:size 20}))

(obj/set-position! score-label 10 700)

(text/set-label-text! score-label "score:00000")
;;(text/set-label-attrs! score-label {:size 40})

(def some-line
  (geo/draw-line 500 500
                 [[30 30 0] [70 70 0]]
                 :line-width 5
                 :color 0x00ff00))

(.log js/console some-line)

(doto hud-scene
  (.add hud-camera)
  (.add score-label)
  (.add some-line))

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
