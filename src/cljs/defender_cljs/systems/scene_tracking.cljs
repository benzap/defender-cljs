(ns defender-cljs.systems.scene-tracking
  "Includes the scene tracking system for wrapping around actors
within the main scene"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.camera :as camera]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.actor :as a]
            [defender-cljs.constants :as c]))

;;system for re-positioning the actors on the other side of the map
;;based on the current position of the main camera
;;this gives the impression that the actors are on a finite map bound on the x axis

(defn modulus-wrap [entity-x camera-x]
  (let [xmin 0
        xmax c/map-width
        local-x (- entity-x camera-x)]
    (if (or (> local-x xmax) (< local-x xmin))
      (+ camera-x (mod local-x xmax))
      entity-x)))

(defn generate-fixed-width-map []
  (let [[cam-x _ _] (a/get-position camera/main-camera)
        actors
        (filter
         (fn [actor]
           (cond
            (= (:type actor) "camera") false
            (= (:type actor) "ship") false
            :else true))
         @(:actor-list scene/main))]
    (doseq [actor actors]
      (let [[entity-x ypos zpos] (a/get-position actor)
            entity-x (modulus-wrap entity-x (- cam-x (/ c/map-width 2)))]
        (a/set-position! actor [entity-x ypos zpos])))))

#_(system/add-system!
 :fixed-width-map
 (reify
   system/System
   (run [_ props]
     (generate-fixed-width-map))))
