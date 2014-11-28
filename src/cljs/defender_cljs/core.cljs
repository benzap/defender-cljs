(ns defender-cljs.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [defender-cljs.canvas.core :as c]))

(def game-state
  (atom {:stage nil
         :score 0
         :enemies []
         :lives 0
         :player {:position [0 0]}}))

(def dom-app (.getElementById js/document "app"))

(def canvas (THREE.WebGLRenderer.))

(defn main [])
