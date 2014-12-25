(ns defender-cljs.enemy 
  "Includes the baseline"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]))

(defn create-enemy 
  "Resembles the same functionality as an actor, but includes extra
  information specific to enemies"
  [obj & {:keys []
          :as attr}]
  (let [actor (apply a/create-actor obj (flatten attr))] 
    (merge 
     actor
     {})))
