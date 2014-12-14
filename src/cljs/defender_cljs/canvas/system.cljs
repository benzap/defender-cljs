(ns defender-cljs.canvas.system
  "handles the render loop, and lets you pass in your own system logic")

(defprotocol System
  (run [this]))

(def systems (atom {}))

(defn add-system! [name system]
  (swap! systems assoc name system))

(defn remove-system! [name]
  (swap! systems dissoc name))

(defn run-systems []
  (doseq [system @systems]
    (run (second system))))

(defrecord Test [msg]
  System
  (run [_]
    (.log js/console msg)))

;;(add-system! "test" (Test. "Hello from Test"))
