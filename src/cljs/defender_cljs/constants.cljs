(ns defender-cljs.constants)

;;the entire defender map is 7 times bigger than the viewport
(def map-width 7000)

;;for our viewport bounds
(def view-width (/ map-width 7))
(def view-height (* view-width (/ 3 4)))

;;for our hud overlay
(def hud-width 1000)
(def hud-height (* hud-width (/ 3 4)))

;;the height of the hud overlay at the top
(def top-overlay-height (/ view-height 5))

(def colors
  {:green 0x00ff00
   :red 0xff0000
   :blue 0x0000ff
   :yellow 0xffff00
   :violet 0xff00ff})