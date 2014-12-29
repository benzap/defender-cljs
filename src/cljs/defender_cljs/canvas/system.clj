(ns defender-cljs.canvas.system
  "Includes helpful macro for adding new systems")

(defmacro new-system-with-name [system-name & body]
  `(add-system! 
    ~system-name
    (reify System
      (run [_ props]
        ~@body))))
