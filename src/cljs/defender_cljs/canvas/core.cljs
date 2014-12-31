(ns defender-cljs.canvas.core
  (:require [defender-cljs.canvas.camera :as cam]
            [defender-cljs.canvas.scene :as scene]
            [defender-cljs.canvas.system :as system]
            [defender-cljs.overlay.core :as overlay]
            [defender-cljs.overlay.map :as map]
            [defender-cljs.constants :as c]
            [defender-cljs.physics :as physics]
            [defender-cljs.actor :as a]
            [defender-cljs.events :as e]
            [defender-cljs.systems.scene-tracking :refer [generate-fixed-width-map]])
  (:use [defender-cljs.utils :only [log get-random-location]]
        [defender-cljs.actors.ship :only [ship]]
        [defender-cljs.enemies.lander :only [make-lander]]
        [defender-cljs.actors.projectile :only [fire-projectile]])
  (:require-macros [defender-cljs.events :refer [on-keyup on-keydown on-timeout]]
                   [defender-cljs.canvas.system :refer [new-system-with-name]]
                   ))

(def dom (.getElementById js/document "app"))

;;Stats object
(def stats (js/Stats.))
(aset (-> stats .-domElement .-style) "position" "absolute")
(aset (-> stats .-domElement .-style) "right" "0px")
(aset (-> stats .-domElement .-style) "top" "0px")





(def width (.-clientWidth dom))
(def height (.-clientHeight dom))

(def renderer (THREE.WebGLRenderer.))
(.setSize renderer width height)

(a/set-position! ship [(/ c/map-width 2) (/ c/view-height 2) 0])

;;testing out landers
(defn gen []
  (let [lander (make-lander)]
    (scene/add-actor! scene/main lander)
    (a/set-position! lander (get-random-location))))

(doseq [i (range 10)]
  (gen))

;;populate the main scene

(doto scene/main
  (scene/add-actor! cam/main-camera)
  (scene/add-actor! ship))

;;populate the hud scene

(doto scene/hud
  (scene/add-actor! cam/hud-camera))

;;clear the inside
(aset dom "innerHTML" "")
(.appendChild dom (-> renderer .-domElement))
(.appendChild dom (-> stats .-domElement))

;;add all of our systems
;;(new-system-with-name :fixed-width-map (generate-fixed-width-map))
(system/add-system!
 :fixed-width-map
 (reify
   system/System
   (run [_ props]
     (generate-fixed-width-map))))



(defn animate []
  (.begin stats)
  (system/run-systems {:delta (/ 1 60.)})
  (physics/update-scene scene/main (/ 1 60.))
  (physics/update-scene scene/hud (/ 1 60.))
  (.end stats)
)

(defn render []
  (.requestAnimationFrame js/window render)
  (.render renderer (-> scene/main :scene-instance) (:entity cam/main-camera))
  (aset renderer "autoClear" false)
  (.render renderer (-> scene/hud :scene-instance) (:entity cam/hud-camera))
  (aset renderer "autoClear" true)
  (animate))

(overlay/init (-> scene/hud :scene-instance))

(render)

;;simulate firing a projectile

(on-keydown 
 :p
 (log "firing projectile")
 (fire-projectile :timeout 1 :position [3500 375 0])
 )


