(ns defender-cljs.enemy 
  "Includes the baseline"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]))

(defn create-enemy 
  "Resembles the same functionality as an actor, but includes extra
  information specific to enemies"
  [obj & {:keys [initial-state]
          :or {initial-state :sleeping}
          :as attr}]
  (let [actor (apply a/create-actor obj (flatten (vec attr)))]
    (merge 
     actor
     {:current-state 
      (atom 
       {:state :sleeping
        :aggro 0.0})})))
