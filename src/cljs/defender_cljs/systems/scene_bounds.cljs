(ns defender-cljs.systems.scene-bounds
  "Produces forces to prevent actors from going outside of the game bounds"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.canvas.scene :as scene]
            [defender-cljs.actor :as a]
            [defender-cljs.constants :as c]))

(defmulti get-top-bound (fn [actor] (-> @(actor :collision) :type)))
(defmulti get-bottom-bound (fn [actor] (-> @(actor :collision) :type)))

(defmethod get-top-bound :aabb
  [actor]
  (let [{:keys [height]} @(actor :collision)
        [_ y _] (a/get-position actor)]
    (+ y (/ height 2))))

(defmethod get-bottom-bound :aabb
  [actor]
  (let [{:keys [height]} @(actor :collision)
        [_ y _] (a/get-position actor)]
    (- y (/ height 2))))

(defn correct-actor-bounds [actor]
  (cond
   (> (get-top-bound actor) (- c/view-height c/top-overlay-height 5))
   (do
     (log "past top bound!" actor (get-top-bound actor))
     (a/add-force! actor [0 -100 0]))
   (< (get-bottom-bound actor) 0)
   (do
     (log "past bottom bound!" actor (get-bottom-bound actor))
     (a/add-force! actor [0 100 0]))))

(defn maintain-actor-bounds []
  (let [actors @(scene/main :actor-list)
        actors (filter #(not= (-> % :type) "camera") actors)]
    (doseq [actor actors]
      (correct-actor-bounds actor))))
