(ns defender-cljs.actors.projectile
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.events]
            [defender-cljs.constants :as c])
  (:require-macros [defender-cljs.events :refer [on-timeout]]))


(defn make-projectile [& {:keys [color]
                          :or {color 0xffffff}}]
  (let [material (THREE.MeshBasicMaterial.
                  #js {:color color})
        geometry (THREE.CircleGeometry. 3 5)
        circle (THREE.Mesh. geometry material)
        actor (a/create-actor circle
                    :name :projectile
                    :type :projectile)]
    (a/set-collision! actor :type :aabb :width 7 :height 7)
    actor))

(def projectile-listing
  {:basic (atom [])
   :green (atom [])
   :ship-phasor (atom [])})

(defn add-projectile! [type]
  (let [projectile
        (condp = type
          :basic
          (make-projectile)
          :green
          (make-projectile :color 0xaaffaa)
          :ship-phasor
          (let [phasor (geo/square :width 50 :height 2 :color 0xffaaaa)
                projectile (a/create-actor phasor :name :phasor :type :projectile)]
            (a/set-collision! projectile :width 50 :height 2)
            projectile))]
    (swap! (projectile-listing type) conj
           {:obj projectile :active false})
    projectile))

(defn make-active! [type projectile]
  (reset!
   (projectile-listing type)
   (map (fn [proj-map]
          (if (= (proj-map :obj) projectile)
            {:obj (proj-map :obj) :active true}
            proj-map))
        @(projectile-listing type))))

(defn make-inactive! [type projectile]
  (reset!
   (projectile-listing type)
   (map (fn [proj-map]
          (if (= (proj-map :obj) projectile)
            {:obj (proj-map :obj) :active false}
            proj-map))
        @(projectile-listing type))))


(defn fire-projectile
  [& {:keys [type position velocity timeout]
      :or {type :basic
           position [0 (/ c/view-height 2) 0]
           velocity [400 0 0]
           timeout 1}}]
  (let [proj-map
        (->> @(projectile-listing type)
             (filter #(% :active))
             (take 1)
             (first)
             )
        
        projectile
        (if (nil? proj-map)
          (add-projectile! type)
          (proj-map :obj))
        ]
    (make-inactive! type projectile)
    (a/set-position! projectile position)
    (a/set-velocity! projectile velocity)
    (scene/add-actor! scene/main projectile)
    (on-timeout
     timeout
     (scene/remove-actor! scene/main projectile)
     (make-active! type projectile))
    projectile))
