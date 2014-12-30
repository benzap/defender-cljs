(ns defender-cljs.actor
  "Includes the actor pattern for representing entities within the game"
  (:require [defender-cljs.canvas.object :as obj]
            [defender-cljs.constants :as c]))

(defn create-actor
  "Creates an actor with all of the required attributes"
  [obj & {:keys [name type damping inverse-mass]
          :or {type "actor" damping 1.0 inverse-mass 1.0}}]
  {:entity obj
   :name name
   :type type
   :physics
   (atom {:force-accumulator [0 0 0]
          :velocity [0 0 0]
          :acceleration [0 0 0]
          :inverse-mass inverse-mass
          :damping damping})
   :collision
   (atom {:type :aabb
          :width 64
          :height 64
          :origin [0 0 0]})})

(defn get-position 
  [actor]
  (let [entity-position (-> actor :entity .-position)]
    [(.-x entity-position)
     (.-y entity-position)
     (.-z entity-position)]))

(defn modulus-wrap 
  "the map world is [-map-width/2, map-width/2]. This function wraps
  the x coordinate into that range"
  [x]
  (let [ld (- (/ c/map-width 2))
        hd (/ c/map-width 2)]
    (cond 
     (<= x ld) (+ (rem x ld) ld)
     (>= x hd) (- (rem x hd) hd)
     :else x)))

(defn get-game-position 
  "This is the position within the game coordinate"
  [actor]
  (let [entity-position (-> actor :entity .-position)]
    [(modulus-wrap (.-x entity-position))
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

(defn get-damping [actor]
  (let [physics @(-> actor :physics)]
    (:damping physics)))

(defn get-force-accumulator [actor]
  (let [physics @(-> actor :physics)]
    (physics :force-accumulator)))

(defn set-force-accumulator! [actor [x y z]]
  (swap! (-> actor :physics) assoc :force-accumulator [x y (or z 0)])
  [x y z])

(defn add-force! [actor force]
  (let [current-force (get-force-accumulator actor)]
    (set-force-accumulator! actor (map + force current-force))))
