(ns defender-cljs.canvas.sprite
  (:require [defender-cljs.canvas.object :as obj]))

(def texture-map (atom {}))

(defn load-texture 
  "Loads the given texture asset, and returns a map to it"
  [name texture-name]
  (let [texture (.loadTexture THREE.ImageUtils (str "assets/" texture-name))]
    (swap! texture-map assoc name texture)
    texture))

(defn make-sprite-material [texture-map]
  (THREE.SpriteMaterial.
   #js {"map" texture-map
        "color" 0xffffff
        "fog" true}))

(def default-scale [64 64])

(defn make-sprite 
  "makes a sprite from a given texture-url. The url is based on the
  root folder /assets/"
  [name & {:keys [scale]
           :or {scale default-scale}}]
  (let [texture-map (load-texture name name)
        sprite-material (make-sprite-material texture-map)
        sprite (THREE.Sprite. sprite-material)]
    ;;The scale of the sprite is 1 by 1, which is 1px by 1px
    ;;so the scale is fixed at the default-scale, or whatever is supplied
    (obj/set-scale! sprite (first scale) (second scale))
    sprite))

(defn set-sprite-material! [obj])
