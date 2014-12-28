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
            [defender-cljs.canvas.camera :as camera]
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
  (geo/square 5 5 :color 0xffffff))

(defmethod create-map-point [:enemy :lander]
  [actor]
  (geo/square 5 5 :color 0xaaffaa))

(defn add-map-point!
  [actor &
   {:keys [color]
    :or {color 0xaaffaa}}]
  (let [map-point (create-map-point actor)]
    (log "adding map point" map-point)
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

(defn update-map-point-listing [scene]
  ;;include any new actors within our map points
  (doseq [actor (get-actor-list scene/main)]
    (when (nil? (@map-points actor))
      (log "adding actor" actor)
      (add-map-point! actor)))
  ;;check if there are any actors in our map-points, that shouldn't exist
  (let [map-actors (set (keys @map-points))
        scene-actors (set (get-actor-list scene/main))]
    (doseq [actor (difference map-actors scene-actors)]
      (remove-map-point! actor)))

  ;;iterate over our map-points, and update their positions
  
  )
