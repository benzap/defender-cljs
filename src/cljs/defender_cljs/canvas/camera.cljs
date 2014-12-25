(ns defender-cljs.canvas.camera
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants :as c]
            [defender-cljs.actor :as a]
            [defender-cljs.physics :as physics]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.actors.ship :refer [ship ship-direction]])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown]]))

(defonce default-camera-near -10)
(defonce default-camera-far 10)

(defn make-camera [left right top bottom]
  (let [camera
        (THREE.OrthographicCamera. left right top bottom
                                   default-camera-near
                                   default-camera-far)]
    (aset (-> camera .-position) "z" 0)
    (a/create-actor camera :name "camera" :type "camera")))

(def main-camera (make-camera (- (/ c/view-width 2)) (/ c/view-width 2) 
                              c/view-height 0))
;;set the camera to the center of the screen
(a/set-position! main-camera [(/ c/map-width 2) 0 0])

(def hud-camera (make-camera 0 c/hud-width 
                             c/hud-height 0))

(a/set-mass! main-camera 1.0)
(physics/add-drag! main-camera :k1 0.0 :k2 0.0)


(def camera-spring
  (physics/add-spring! main-camera
                       :type :basic
                       :spring-length 0
                       :spring-constant 500
                       :damping-ratio 2.0
                       :lock-y-axis true))

#_(defn update-camera-position [delta]
  (let [ship-position (a/get-position ship)
        [shipx _ _] ship-position
        left-pos (* c/view-width (/ 1 5))
        right-pos (- c/view-width left-pos)
        pos (condp = @ship-direction
              :left left-pos
              :right right-pos)
        pos (+ shipx (- pos))]
    
    (physics/update-spring-anchor! camera-spring pos 0)))

;;makeshift camera tracking. Doesn't resemble defender for now
(defn update-camera-position [delta]
  (let [ship-position (a/get-position ship)
        [posx _ _] ship-position
        ship-velocity (a/get-velocity ship)
        [velx _ _] ship-velocity]
    (physics/update-spring-anchor!
     camera-spring
     (+ posx (* velx delta 20.0)) 0)))

;;system for tracking and re-adjusting the anchor
(system/add-system!
 :camera-tracking
 (reify
   system/System
   (run [_ props]
     (update-camera-position (:delta props)))))
