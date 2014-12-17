(ns defender-cljs.events
  (:require-macros [defender-cljs.events :refer [on-keydown on-keyup]]))

(def keycode-map
  {:enter 13
   :left 37
   :up 38
   :right 39
   :down 40
   :space 32
   :a 65 :b 66 :c 67
   :d 68 :e 69 :f 70
   :g 71 :h 72 :i 73
   :j 74 :k 75 :l 76
   :m 77 :n 78 :o 79
   :p 80 :q 81 :r 82
   :s 83 :t 84 :u 85
   :v 86 :w 87 :x 88
   :y 89 :z 90})

(def keys-pressed (atom #{}))

(defn set-on-keydown [key callback]
  (let [keycode (keycode-map key)
        callback-wrapper
        (fn [event]
          (let [event-keycode (.-keyCode event)]
            (when (and (= keycode event-keycode)
                       (not (key @keys-pressed)))
              (callback)
              (swap! keys-pressed conj key))))
        ;;need to track when the key goes up, so we can remove it from
        ;;the keys-pressed set
        keyup-listener
        (fn [event]
          (let [event-keycode (.-keyCode event)]
            (when (= keycode event-keycode)
              (swap! keys-pressed disj key))))]
    (.addEventListener js/document "keydown" callback-wrapper)
    (.addEventListener js/document "keyup" keyup-listener)))

(defn set-on-keyup [key callback]
  (let [keycode (keycode-map key)
        callback-wrapper
        (fn [event]
          (let [event-keycode (.-keyCode event)]
            (when (= keycode event-keycode)
              (callback))))]
    (.addEventListener js/document "keyup" callback-wrapper)))

#_(set-on-keydown :left
                (fn []
                  (.log js/console "left!")))

#_(on-keydown
 :right
 (.log js/console "right down!"))

#_(on-keyup
 :right
 (.log js/console "right up!"))

