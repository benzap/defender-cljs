(ns defender-cljs.overlay.map
  "Includes functionality for showing enemies on the HUD scene"
  (:use [defender-cljs.overlay.core
         :only [left-bound right-bound
                top-bound bottom-bound]]
        [defender-cljs.utils :only [log]])
  (:require [defender-cljs.constants :as c]
            [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.camera :as camera]))

(def map-points
  "List of map points, with the key being the actor, and the value
  being the point geometry"
  (atom {}))

(defn add-map-point! [actor &
                      {:keys [color]
                       :or {color 0xaaffaa}}]
  (let [map-point (geo/square 5 5 :color color)]
    (scene/add-object! scene/hud map-point)
    (swap! map-points assoc actor map-point)
    (log @map-points)
    map-point))

(defn remove-map-point! [actor]
  )

(defn has-map-point? [actor])

(defn generate-map-points
  "Generates a set of points to be placed on the map"
  [points])

(defmulti update-map-point (fn [actor] [(actor :type) (actor :name)]))

(defmethod update-map-point [:ship :ship] [actor])
