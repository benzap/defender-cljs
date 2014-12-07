(ns defender-cljs.canvas.sprite)

(defn load-texture 
  "Loads the given texture asset, and returns a map to it"
  [texture-name]
  (.loadTexture THREE.ImageUtils (str "assets/" texture-name)))

(defn make-sprite-material [texture-map]
  (THREE.SpriteMaterial.
   #js {"map" texture-map
        "color" 0xffffff
        "fog" true}))

(defn make-sprite 
  "makes a sprite from a given texture-url. The url is based on the
  root folder /assets/"
  [name]
  (let [texture-map (load-texture name)
        sprite-material (make-sprite-material texture-map)]
    (THREE.Sprite. sprite-material)))
