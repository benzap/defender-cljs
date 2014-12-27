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
         @(:actor-list main))]
    (doseq [actor actors]
      (let [[entity-x ypos zpos] (a/get-position actor)
            entity-x (modulus-wrap entity-x (- cam-x (/ c/map-width 2)))]
        (a/set-position! actor [entity-x ypos zpos])))))

(system/add-system!
 :fixed-width-map
 (reify
   system/System
   (run [_ props]
     (generate-fixed-width-map))))
