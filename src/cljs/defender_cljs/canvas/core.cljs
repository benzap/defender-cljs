(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.hud :as hud]
            [defender-cljs.canvas.text :as text]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.overlay.core :as overlay]
            [defender-cljs.canvas.sprite :as sprite]))

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))
;;(def renderer (THREE.CanvasRenderer.))

(.setSize renderer width height)

(def camera (cam/make-camera 0 1000 (* 1000 (/ 3 4)) 0))
(def hud-camera (cam/make-camera 0 1000 (* 1000 (/ 3 4)) 0))

(def main-scene (THREE.Scene.))
(def hud-scene (THREE.Scene.))

(def spinning-square (geo/square 200 200 200 200))

(def ship (sprite/make-sprite "ship.png"))
(obj/set-position! ship 500 500)

(.log js/console ship)

(doto main-scene
  (.add camera)
  (.add (geo/square 50 50 100 100 :color 0x330000))
  (.add (geo/square 50 100 100 100))
  (.add spinning-square)
  (.add ship)
  )

;;(def score-label (text/create-label "score" {:size 20 :color 0xff00ff}))
;;(obj/set-position! score-label 10 700)

;;(text/set-label-text! score-label "002000000")
;;(text/set-label-attrs! score-label {:size 40})

(def some-line
  (geo/draw-line [[530 530 0] [570 570 0]]
                 :line-width 5
                 :color 0x00ff00))

(doto hud-scene
  (.add hud-camera)
  ;;(.add score-label)
  (.add some-line))

;;clear the inside
(aset dom "innerHTML" "")
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

(overlay/init hud-scene)

(render)
