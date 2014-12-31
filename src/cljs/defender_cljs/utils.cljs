(ns defender-cljs.utils
  ""
  (:require [defender-cljs.constants :as c]))

(defn log [& msgs]
  (.apply (.-log js/console) js/console (clj->js (map clj->js msgs)))
  (last msgs))

(def dead-zone 32)

(defn get-random-location
  "Gets random location within the game scene bounds"
  []
  (let [x (rand c/map-width)
        y (rand (- c/view-height c/top-overlay-height dead-zone))]
    [x (+ y dead-zone) 0]))


