(ns defender-cljs.canvas.hud
  "Provides an abstraction over Three.js for producing hud objects")

(defn create-label
  "Creates a TextGeometry setup as a label"
  [text & {:keys [size]
           :or {size 50}}]
  (let [geometry
        (THREE.TextGeometry.
         text
         #js {"font" "arcade normal"
              "weight" "normal"
              "style" "normal"
              "size" size})
        material
        (THREE.MeshBasicMaterial. #js {:color 0xaaffaa})
        mesh
        (THREE.Mesh. geometry material)]
    mesh))

(defn set-label!)
