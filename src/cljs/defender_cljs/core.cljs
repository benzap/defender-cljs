(ns defender-cljs.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {:text "Hello Chest"}))

(def game-state
  (atom {:stage nil
         :score 0
         :enemies []
         :lives 0
         :player {:position [0 0]}}))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/h1 nil (:text app)))))
    app-state
    {:target (. js/document (getElementById "app"))}))
