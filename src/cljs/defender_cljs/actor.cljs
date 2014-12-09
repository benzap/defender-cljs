(ns defender-cljs.actor
  "Includes the actor pattern for representing entities within the game"
  (:require [defender-cljs.canvas.object :as obj]))

(def actor-list (atom []))

(defn create-actor
  "Creates an actor with all of the required attributes"
  [obj & {:keys [name type] :or {type "actor"}}]
  {:entity obj
   :name name
   :type type
   :physics
   (atom {:velocity [0 0 0]
          :acceleration [0 0 0]})
   :collision
   {:type "AABB"
    :width 64
    :height 64}})

(defn get-position [actor]
  (let [entity-position (-> actor :entity .-position)]
    [(.-x entity-position)
     (.-y entity-position)
     (.-z entity-position)]))

(defn set-position! [actor [x y z]]
  (obj/set-position! (-> actor :entity) x y (or z 0))
  [x y z])

(defn translate! [actor [x y z]]
  (obj/translate! (-> actor :entity) x y (or z 0)))

(defn get-velocity [actor]
  (let [physics @(-> actor :physics)]
    (physics :velocity)))

(defn set-velocity! [actor [x y z]]
  (swap! (-> actor :physics) assoc :velocity [x y (or z 0)])
  [x y z])

(defn get-acceleration [actor]
  (let [physics @(-> actor :physics)]
    (physics :acceleration)))

(defn set-acceleration! [actor [x y z]]
  (swap! (-> actor :physics) assoc :acceleration [x y (or z 0)])
  [x y z])
