(ns defender-cljs.enemies.lander
  (:require [defender-cljs.enemy :as enemy]
            [defender-cljs.canvas.sprite :as sprite]
            [defender-cljs.actor :as a]))

;;load the assets
(sprite/load-texture :lander "enemy-lander.png")

(def main-material (sprite/make-sprite-material :lander))

(defn make-lander []
  (let [sprite
        (sprite/make-sprite main-material :scale [16 16])
        enemy-actor
        (enemy/create-enemy
         sprite
         :name :lander
         :type :enemy)]
    (a/set-collision! enemy-actor :width 16 :height 16)
    enemy-actor))
