(ns defender-cljs.overlay.map
  "Includes functionality for showing enemies on the HUD scene"
  (:use [clojure.set :only [difference]]
        [defender-cljs.overlay.core
         :only [left-bound right-bound
                top-bound bottom-bound]]
        [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants :as c]
            [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.canvas.object :as obj]
            [defender-cljs.actor :as a]
            [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.system :as system]))

(def map-points
  "List of map points, with the key being the actor, and the value
  being the point geometry"
  (atom {}))

;;adding different types of points based on what's on the map
(defmulti create-map-point
  (fn [actor]
    (when (some? actor)
      [(actor :type) (actor :name)]))
  :default nil)

(defmethod create-map-point nil
  [actor])

(defmethod create-map-point [:ship :ship]
  [actor]
  (geo/square 
   :width 5 
   :height 5 
   :depth 1
   :color 0xffffff))

(defmethod create-map-point [:enemy :lander]
  [actor]
  (geo/square 
   :width 3 
   :height 3 
   :depth 1
   :color 0x33ff33))

(defn add-map-point!
  [actor &
   {:keys [color]
    :or {color 0xaaffaa}}]
  (let [map-point (create-map-point actor)]
    (when (some? map-point)
      (scene/add-object! scene/hud map-point)
      (swap! map-points assoc actor map-point))
    map-point))

(defn remove-map-point!
  "Removes the map point. If the stored value is nil, nothing is done"
  [actor]
  (when (some? (@map-points actor))
    (scene/remove-object! scene/hud (@map-points actor))
    (swap! map-points dissoc actor)))

(defn get-actor-list [scene]
  @(scene :actor-list))

(def width-padding 0)
(def height-padding 5)

(defn update-point-position! [actor point-obj]
  (let [bounds 
        {:left left-bound
         :right right-bound
         :top top-bound
         :bottom bottom-bound
         :width (- right-bound left-bound (+ width-padding))
         :height (- top-bound bottom-bound (+ height-padding))
         :center-x (+ (/ (- right-bound left-bound) 2) left-bound)
         :center-y (+ (/ (- top-bound bottom-bound) 2) bottom-bound)}
        
        
        camera-pos (a/get-position cam/main-camera)
        actor-pos (a/get-position actor)
        
        relative-pos (map - actor-pos camera-pos)
        [relx rely _] relative-pos
        
        rely (- rely (/ c/view-height 2))

        mapx (+ (* relx (/ (bounds :width) c/map-width)) (bounds :center-x))
        mapy (+ (* rely (/ (bounds :height) (- c/view-height c/top-overlay-height))) (bounds :center-y))

        ]
    (obj/set-position! point-obj mapx mapy -5)))

(defn update-map-point-listing [scene]
  ;;include any new actors within our map points
  (doseq [actor (get-actor-list scene/main)]
    (when (nil? (@map-points actor))
      (add-map-point! actor)))

  ;;check if there are any actors in our map-points, that shouldn't exist
  (let [map-actors (set (keys @map-points))
        scene-actors (set (get-actor-list scene/main))]
    (doseq [actor (difference map-actors scene-actors)]
      (remove-map-point! actor)))

  ;;iterate over our map-points, and update their positions
  (doseq [[actor point-obj] @map-points]
    (update-point-position! actor point-obj)))

(system/add-system!
 :map-updater
 (reify
   system/System
   (run [_ props]
     (update-map-point-listing scene/main))))
