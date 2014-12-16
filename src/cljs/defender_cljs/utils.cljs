(ns defender-cljs.utils
  "")

(defn log [msg]
  (.log js/console (clj->js msg)))
