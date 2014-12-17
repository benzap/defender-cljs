(ns defender-cljs.canvas.camera
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants :as c]
            [defender-cljs.actor :as a])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(defonce default-camera-near -100)
(defonce default-camera-far 100)

(defn make-camera [left right top bottom]
  (let [camera
        (THREE.OrthographicCamera. left right top bottom
                                   default-camera-near
                                   default-camera-far)]
    (aset (-> camera .-position) "z" 0)
    (a/create-actor camera :name "camera" :type "camera")))

(def main-camera (make-camera 0 1000 (* 1000 (/ 3 4)) 0))
(def hud-camera (make-camera 0 1000 (* 1000 (/ 3 4)) 0))

(def camera-speed 600.0)

(on-keydown
 :left
 (a/set-velocity! main-camera [(- camera-speed) 0 0]))

(on-keyup
 :left
 (a/set-velocity! main-camera [0 0 0]))

(on-keydown
 :right
 (a/set-velocity! main-camera [camera-speed 0 0]))

(on-keyup
 :right
 (a/set-velocity! main-camera [0 0 0]))
