(ns defender-cljs.canvas.core)

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)



(def camera (THREE.OrthographicCamera. -1000 1000
                                       -1000 1000
                                       -100 100))
(aset (-> camera .-position) "z" -5)

(def light (THREE.AmbientLight. 0x404040))

(defn init [dom])

(defn animate [dom])

(defn square [x y width height
              & {:keys [color]
                 :or {color 0xaaffaa}}]
  (let [geometry (THREE.BoxGeometry. width height 1)
        material (THREE.MeshBasicMaterial. #js {:color color})]
    (new js/THREE.Mesh geometry material)))



(def main-scene (THREE.Scene.))
(doto main-scene
  (.add camera)
  (.add light)
  (.add (square 10 10 100 100))
  (.add (square 200 200 200 200))
  )

(.log js/console main-scene)
(.log js/console renderer)

(.appendChild dom (-> renderer .-domElement))
(.render renderer main-scene camera)


