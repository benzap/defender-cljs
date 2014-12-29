(ns defender-cljs.actors.projectile
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.scene :as scene])
  (:require-macros [defender-cljs.events :refer [on-timeout]]))


(defn make-projectile [& {:keys [color]
                          :or {color 0xffffff}}]
  (let [material (THREE.MeshBasicMaterial.
                  #js {:color color})
        geometry (THREE.CircleGeometry. 1 8)
        circle (THREE.Mesh. geometry material)]
    (a/create-actor circle
                    :name "projectile"
                    :type "projectile")))

(def projectile-listing
  {:basic (atom [])
   :green (atom [])})

(defn add-projectile! [type]
  (let [projectile
        (condp = type
          :basic
          (make-projectile)
          :green
          (make-projectile :color 0xaaffaa))]
    (swap! (projectile-listing type) conj
           {:obj projectile :active false})
    projectile))

(defn make-active! [type projectile]
  (reset!
   (projectile-listing type)
   (map (fn [proj-map]
          (if (= (proj-map :obj))
            {:obj (proj-map :obj) :active true}
            proj-map))
        @(projectile-listing type))))

(defn make-inactive! [type projectile]
  (reset!
   (projectile-listing type)
   (map (fn [proj-map]
          (if (= (proj-map :obj))
            {:obj (proj-map :obj) :active false}
            proj-map))
        @(projectile-listing type))))


(defn fire-projectile
  [& {:keys [type position velocity timeout]
      :or {type :basic
           position [0 0 0]
           velocity [400 0 0]
           timeout 1}}]
  (let [[projectile active]
        (take 1 (filter #(% :active) @(projectile-listing type)))
        projectile
        (if (nil? projectile)
          (add-projectile! type)
          projectile)]
    (make-inactive! type projectile)
    (a/set-position! projectile position)
    (a/set-velocity! projectile velocity)
    (scene/add-actor! scene/main projectile)
    (on-timeout
     timeout
     (scene/remove-actor! scene/main projectile)
     (make-active! type projectile))
    ))
