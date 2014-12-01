(ns defender-cljs.canvas.core)

(def dom (.getElementById js/document "app"))

(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def left-bound)

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)

(def camera (THREE.OrthographicCamera. 0 1000
                                       0 (* 1000 (/ 3 4))
                                       -1 1))
(aset (-> camera .-position) "z" 0)

(def hud-camera (THREE.OrthographicCamera. 0 1000
                                           0 (* 1000 (/ 3 4))
                                           -1 1))
(aset (-> hud-camera .-position) "z" 0)

(defn square [x y width height
              & {:keys [color]
                 :or {color 0xaaffaa}}]
  (let [geometry (THREE.BoxGeometry. width height 1)
        material (THREE.MeshBasicMaterial. #js {:color color})
        mesh (THREE.Mesh. geometry material)]
    (aset (-> mesh .-position) "x" x)
    (aset (-> mesh .-position) "y" y)
    mesh))

(def main-scene (THREE.Scene.))
(def hud-scene (THREE.Scene.))

(def spinning-square (square 200 200 200 200))

(doto main-scene
  (.add camera)
  (.add (square 50 50 100 100 :color 0x330000))
  (.add (square 50 100 100 100))
  (.add spinning-square)
  )

(doto hud-scene
  (.add hud-camera)
  (.add (square 500 10 1000 20 :color 0x555555)))

(.appendChild dom (-> renderer .-domElement))

(defn animate []
  (.rotateOnAxis spinning-square (THREE.Vector3. 0 0 1) 0.01))

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer main-scene camera)
  (aset renderer "autoClear" false)
  (.render renderer hud-scene hud-camera)
  (animate))

(render)
