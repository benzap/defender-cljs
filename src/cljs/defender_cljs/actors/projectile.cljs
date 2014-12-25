(ns defender-cljs.actors.projectile
  (:require [defender-cljs.actor :as a]))


(defn make-projectile [& {:keys [color]
                          :or {color 0xffffff}}]
  (let [material (THREE.MeshBasicMaterial.
                  #js {:color color})
        geometry (THREE.CircleGeometry. 1 8)
        circle (THREE.Mesh. geometry material)]
    (a/create-actor circle
                    :name "projectile"
                    :type "projectile")))

(defn fire-projectile [])
