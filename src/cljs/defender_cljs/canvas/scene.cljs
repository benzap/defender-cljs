(ns defender-cljs.canvas.scene
  "Includes abstractions over the three.js scene to store categories
  of certain displayed data"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants]
            [defender-cljs.canvas.camera :as camera]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.actor :as a]
            [defender-cljs.constants :as c]))

(defn create-scene [& {:keys []}]
  {:scene-instance (THREE.Scene.)
   :actor-list (atom [])})

(defn add-actor!
  "Adds an actor to the scene"
  [scene actor]
  (.add (-> scene :scene-instance) (-> actor :entity))
  (swap! (-> scene :actor-list) conj actor))

(defn remove-actor!
  "Removes an actor from the scene"
  [scene actor]
  (.remove (-> scene :scene-instance) (-> actor :entity))
  (reset! (-> scene :actor-list)
          (filter #(not= actor %) @(-> scene :actor-list))))

(defn add-object! [scene obj]
  (.add (-> scene :scene-instance) obj))

(defn remove-object! [scene obj]
  (.remove (-> scene :scene-instance obj)))

;;
;; Scenes.
;;

;; Main scene which moves across the screen
(def main (create-scene))

;; Static scene for displaying HUD elements
(def hud (create-scene))


;;
;; Systems.
;;

;;system for re-positioning the actors on the other side of the map
;;based on the current position of the main camera
;;this gives the impression that the actors are on a finite map bound on the x axis

(defn generate-fixed-width-map []
  (let [[x _ _] (a/get-position camera/main-camera)
        extent (/ c/map-width 2)
        xmax (+ x extent)
        xmin (- x extent)]
    (doseq [actor @(:actor-list main)]
      (let [[xpos ypos zpos] (a/get-position actor)
            xpos 
            (cond 
             (< xpos xmin) (+ (rem xpos (- c/map-width)) x)
             (> xpos xmax) (- (rem xpos c/map-width) x)
             :else xpos)]
        (a/set-position! actor [xpos ypos zpos])))))

(system/add-system!
 :fixed-width-map
 (reify
   system/System
   (run [_ props]
     (generate-fixed-width-map))))
