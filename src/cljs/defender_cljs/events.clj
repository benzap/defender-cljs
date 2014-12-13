(ns defender-cljs.events
  "Macros for events.cljs")

(defmacro on-keydown [key & body]
  `(set-on-keydown ~key (fn [] ~@body)))

(defmacro on-keyup [key & body]
  `(set-on-keyup ~key (fn [] ~@body)))
