(ns defender-cljs.utils)

(defmacro set-timed-event [time-sec & body]
  `(set-timed-event-fn ~time-sec (fn [] ~@body)))
