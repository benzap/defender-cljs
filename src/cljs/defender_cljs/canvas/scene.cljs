(ns defender-cljs.canvas.scene
  "Includes abstractions over the three.js scene to store categories
  of certain displayed data")

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
