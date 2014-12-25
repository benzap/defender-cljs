(ns defender-cljs.canvas.sprite
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.canvas.object :as obj]))

(def texture-map (atom {}))

(defn load-texture 
  "Loads the given texture asset, and returns a map to it"
  [texture-name texture-file]
  (let [texture (.loadTexture THREE.ImageUtils (str "assets/" texture-file))]
    (swap! texture-map assoc texture-name texture)
    texture))

(log "texture" @texture-map)

(defn make-sprite-material 
  [texture-name & 
   {:keys [color]
    :or {color 0xffffff}}]
  (let [texture (@texture-map texture-name)]
    (THREE.SpriteMaterial.
     #js {:map texture
          :color color
          :fog true})))

(defn make-sprite 
  "makes a sprite from a given texture-url. The url is based on the
  root folder /assets/"
  [sprite-material & {:keys [scale]
                      :or {scale [64 64]}}]
  (let [sprite (THREE.Sprite. sprite-material)]
    ;;The scale of the sprite is 1 by 1, which is 1px by 1px
    ;;so the scale is fixed at the default-scale, or whatever is supplied
    (obj/set-scale! sprite (first scale) (second scale))
    sprite))

(defn set-sprite-material! [obj])
