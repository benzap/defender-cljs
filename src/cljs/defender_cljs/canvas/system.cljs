(ns defender-cljs.canvas.system
  "handles the render loop, and lets you pass in your own system logic"
  (:require-macros [defender-cljs.canvas.system :refer [new-system-with-name]])
  )

(defprotocol System
  (run [this props]))

(def systems (atom {}))

(defn add-system! [name system]
  (swap! systems assoc name system))

(defn remove-system! [name]
  (swap! systems dissoc name))

(defn run-systems [& [props]]
  (doseq [system @systems]
    (run (second system) (or props {}))))

(defrecord Test [msg]
  System
  (run [_ props]
    (.log js/console msg)))

;;(add-system! "test" (Test. "Hello from Test"))
