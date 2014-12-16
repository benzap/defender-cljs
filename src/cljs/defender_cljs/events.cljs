(ns defender-cljs.events
  (:require-macros [defender-cljs.events :refer [on-keydown on-keyup]]))

(def keycode-map
  {:left 37
   :up 38
   :right 39
   :down 40
   :w 87
   :a 65
   :s 83
   :d 100
   :space 32
   :enter 13
   :i 73
   :j 74
   :k 75
   :l 76
   :b 66
   :g 71})

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

