(ns defender-cljs.canvas.camera
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants :as c]
            [defender-cljs.actor :as a]
            [defender-cljs.physics :as physics]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.actors.ship :refer [ship]])
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

(physics/add-drag! main-camera :k1 0.5 :k2 0.1)

(def camera-spring
  (physics/add-spring! main-camera
                       :spring-length 0
                       :spring-constant 100
                       :lock-y-axis true))

(defn update-camera-position []
  (let [ship-position (a/get-position ship)
        [shipx _ _] ship-position
        pos (+ shipx -500)]
    
    (physics/update-spring-anchor! camera-spring pos 0)))


;;system for tracking and re-adjusting the anchor
(system/add-system!
 :camera-tracking
 (reify
   system/System
   (run [_ props]
     (update-camera-position))))
