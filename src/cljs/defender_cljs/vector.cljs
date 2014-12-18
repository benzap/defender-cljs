(ns defender-cljs.vector
  (:use [defender-cljs.utils :only [log]]))

(defn mag [v]
  (->> v
       (map #(* % %))
       (reduce +)
       (Math/sqrt)))

(defn norm [v]
  (let [magnitude (mag v)]
    (if (not= magnitude 0)
      (map #(/ % magnitude) v)
      (map (fn [_] 0) v))))
