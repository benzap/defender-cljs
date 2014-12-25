(ns defender-cljs.collision
  (:require [defender-cljs.actor :as a]))

(defmulti check-collision (fn [collision-type attrs] collision-type))

(defn check-collision-aabb [])
