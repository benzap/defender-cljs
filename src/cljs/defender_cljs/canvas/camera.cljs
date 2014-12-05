(ns defender-cljs.canvas.camera)

(defonce default-camera-near -100)
(defonce default-camera-far 100)

(defn make-camera [left right top bottom]
  (let [camera
        (THREE.OrthographicCamera. left right top bottom
                                   default-camera-near
                                   default-camera-far)]
    (aset (-> camera .-position) "z" 0)
    camera))
