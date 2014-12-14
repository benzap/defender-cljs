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
          :acceleration [0 0 0]
          :inverse-mass 1})
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

(defn update-velocity!
  "translates the current velocity value"
  [actor vel-inc]
  (let [vel (get-velocity actor)]
    (set-velocity! actor (map + vel vel-inc))))

(defn get-acceleration [actor]
  (let [physics @(-> actor :physics)]
    (physics :acceleration)))

(defn set-acceleration! [actor [x y z]]
  (swap! (-> actor :physics) assoc :acceleration [x y (or z 0)])
  [x y z])

(defn update-acceleration!
  "translates the current acceleration value"
  [actor acc-inc]
  (let [acc (get-acceleration actor)]
    (set-acceleration! actor (map + acc acc-inc))))

(defn get-inverse-mass [actor]
  (let [physics @(-> actor :physics)]
    (physics :inverse-mass)))

(defn set-inverse-mass! [actor inverse-mass]
  (swap! (-> actor :physics) assoc :inverse-mass inverse-mass))

(defn get-mass [actor]
  (let [physics @(-> actor :physics)
        inverse-mass (physics :inverse-mass)]
    (/ 1 inverse-mass)))

(defn set-mass! [actor mass]
  (swap! (-> actor :physics) assoc :inverse-mass (/ 1 mass)))
