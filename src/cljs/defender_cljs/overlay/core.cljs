(ns defender-cljs.overlay.core
  (:require [defender-cljs.canvas.geometry :as geo]
            [defender-cljs.constants :as c]
            [defender-cljs.canvas.object :as obj]
            [defender-cljs.canvas.hud :as hud]
            [defender-cljs.canvas.text :as text]))

(def hud-line-width 5)
(def hud-text-size 20)

;;top of the screen overlay. bounds for the map space
(def left-bound (/ c/hud-width 3))
(def right-bound (* left-bound 2))
(def top-bound c/hud-height)
(def bottom-bound (- c/hud-height c/top-overlay-height))

(def width-segments (/ (- right-bound left-bound)) 7)
(def inner-left-bound (* 3 width-segments))
(def inner-right-bound (* 4 width-segments))



(defn init-hud-outline [scene]
  (let [

        ;;line properties
        line-color (c/colors :blue)
        line-width hud-line-width
        
        ;;straight line for top overlay
        straight-line
        (geo/draw-line
         [[0 bottom-bound]
          [c/hud-width bottom-bound 0]]
         :color line-color
         :line-width line-width)

        ;;left vertical line
        left-line
        (geo/draw-line
         [[left-bound bottom-bound]
          [left-bound top-bound]]
         :color line-color
         :line-width line-width)

        ;;right vertical line
        right-line
        (geo/draw-line
         [[right-bound bottom-bound]
          [right-bound top-bound]]
         :color line-color
         :line-width line-width)

        ;;the horizontal line above the map
        top-line
        (geo/draw-line
         [[left-bound (- top-bound (/ line-width 2))]
          [right-bound (- top-bound (/ line-width 2))]]
         :color line-color
         :line-width line-width)

        white-left-bound nil
        
        ]
    
    (.add scene straight-line)
    (.add scene left-line)
    (.add scene right-line)
    (.add scene top-line)))

(def score (text/create-label "000000" {:size 20 :color 0xff00ff}))
(obj/set-position! score 120 (- c/hud-height c/top-overlay-height
                                (- hud-line-width)
                                (- 10)))


(defn init-score-label [scene]
  (.add scene score))

(defn set-score! [score]
  )

(defn init [scene]
  (init-hud-outline scene)
  (init-score-label scene))
