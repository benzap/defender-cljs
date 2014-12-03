(ns defender-cljs.canvas.geometry
  "A set of basic primitives for making elements in the playing field"
  (:require [defender-cljs.canvas.object :as obj]))

(defn square [x y width height
              & {:keys [color]
                 :or {color 0xaaffaa}}]
  (let [geometry (THREE.BoxGeometry. width height 1)
        material (THREE.MeshBasicMaterial. #js {:color color})
        mesh (THREE.Mesh. geometry material)]
    (obj/set-position! mesh x y)
    mesh))

(defn draw-line
  "Forms a set of lines into a line segment"
  [x y vertices & {:keys [color line-width]
               :or {color 0xffaaaa
                    line-width 1}}]
  (let [material (THREE.LineBasicMaterial.
                  #js {"color" color
                       "linewidth" line-width})
        geometry (THREE.Geometry.)
        line (THREE.Line. geometry material)]
    (doseq [[x y z] vertices]
      (.push (-> geometry .-vertices) (THREE.Vector3. x y z)))
    (obj/set-position! line x y)
    line))
