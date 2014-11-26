(ns defender-cljs.canvas.core)


(defonce main-scene (THREE.Scene))

(defn create-ortho-camera [width height]
  (THREE.OrthographicCamera 0 width height 0))

(defn add-square [x y width height
                  & {:keys [color]
                     :or {color 0xaaffaa}}]
  (let [geometry (new js/THREE.BoxGeometry width height 1)
        material (new js/THREE.MeshBasicMaterial #js {:color color})]
    (new js/THREE.Mesh geometry material)))

(defn init [dom])

(defn animate [dom])

(defn cube []
  (let [geometry (new js/THREE.BoxGeometry 1 1 1)
        material (new js/THREE.MeshBasicMaterial #js {:color 0xaaffaa})]
    (new js/THREE.Mesh geometry material)))
