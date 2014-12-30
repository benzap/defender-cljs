(ns defender-cljs.collision
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.scene :as scene]))

(defmulti check-collision
  (fn [first-actor second-actor]
    [(-> @(first-actor :collision) :type)
     (-> @(second-actor :collision) :type)])
  :default nil)

(defmethod check-collision nil [first-actor second-actor])

(defmethod check-collision [:aabb :aabb]
  [first-actor second-actor]
  (let [[cx1 cy1 _] (a/get-position first-actor)
        w1 (-> @(first-actor :collision) :width)
        h1 (-> @(first-actor :collision) :height)
        x1 (- cx1 (/ w1 2))
        y1 (- cy1 (/ h1 2))
        
        [cx2 cy2 _] (a/get-position second-actor)
        w2 (-> @(second-actor :collision) :width)
        h2 (-> @(second-actor :collision) :height)
        x2 (- cx2 (/ w2 2))
        y2 (- cy2 (/ h2 2))]
    (when (and
           (< x1 (+ x2 w2))
           (< x2 (+ x1 w1))
           (< y1 (+ y2 h2))
           (< y2 (+ y1 h1)))
        {:first first-actor :second second-actor}
        )))

(defn generate-collision-listing [from-list to-list]
  (filter
   some?
   (for [from from-list
         to to-list]
     (check-collision from to))))

