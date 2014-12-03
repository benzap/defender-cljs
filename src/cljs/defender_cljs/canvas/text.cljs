(ns defender-cljs.canvas.text
  "Provides an abstraction over Three.js for producing text objects")

(defn create-text-geometry
  "Creates a TextGeometry object with the given attributes"
  [text {:keys [size]
         :or {size 50}}]
  (THREE.TextGeometry.
   text
   #js {"font" "arcade normal"
        "weight" "normal"
        "style" "normal"
        "size" size}))

(defn create-label
  "Creates a TextGeometry setup as a label"
  [text {:keys [size color]
         :or {color 0xaaffaa}
         :as attrs}]
  (let [geometry
        (create-text-geometry text attrs)
        material
        (THREE.MeshBasicMaterial. #js {:color color})
        mesh
        (THREE.Mesh. geometry material)]
    (aset mesh "textattributes" attrs)
    mesh))

(defn set-label-text! [label text]
  (let [text-attributes (-> label .-textattributes)
        geometry (create-text-geometry text text-attributes)]
    (aset label "text" text)
    (aset label "geometry" geometry)
    geometry))

(defn set-label-attrs! [label attrs]
  (let [text (-> label .-text)
        text-attributes (-> label .-textattributes)
        geometry (create-text-geometry text (merge text-attributes attrs))]
    (aset label "geometry" geometry)
    geometry))
