(ns defender-cljs.canvas.camera
  (:require [defender-cljs.constants :as c]))

(defonce default-camera-near -100)
(defonce default-camera-far 100)

(defn make-camera [left right top bottom]
  (let [camera
        (THREE.OrthographicCamera. left right top bottom
                                   default-camera-near
                                   default-camera-far)]
    (aset (-> camera .-position) "z" 0)
    camera))

(def main-camera (make-camera 0 1000 (* 1000 (/ 3 4)) 0))
(def hud-camera (make-camera 0 1000 (* 1000 (/ 3 4)) 0))
