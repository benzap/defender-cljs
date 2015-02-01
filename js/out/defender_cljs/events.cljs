(ns defender-cljs.events
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.canvas.system :as system]
            [defender-cljs.collision :as collision]
            [defender-cljs.canvas.scene :as scene])
  (:require-macros [defender-cljs.events
                    :refer [on-keydown on-keyup on-timeout]]))

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


;;
;; Timed Events System
;;


(def timed-events (atom []))
(def timed-id (atom 0))
(def timer-clock (atom 0.0))


(defn add-timed-event! [time func]
  (swap! timed-events conj {:id @timed-id
                            :func func
                            :time (+ @timer-clock time)})
  (swap! timed-id inc))

(defn remove-timed-event! [id]
  (let [events @timed-events]
    (reset! timed-events (filter #(not= id (% :id)) events))))

(defn set-on-timeout [time-sec callback]
  (add-timed-event! time-sec callback)
  ;;(.setTimeout js/window callback (* time-sec 1000))
  )

(system/add-system!
 :event-timer
 (reify
   system/System
   (run [_ props]
     (let [delta (props :delta)]
       (swap! timer-clock + delta)
       (doseq [{:keys [id func time]} @timed-events]
         (when (> @timer-clock time)
           (func)
           (remove-timed-event! id))
         ;;(log id func time)
         )))))

#_(on-timeout
 3 ;;seconds
 (log "ding!"))


;;
;; Collision Events System
;;

(def collision-handlers (atom []))

(defn set-on-collision
  "adding callbacks from an actor trait to another actor
  trait. callback is of the form [first-actor second-actor]
  
  An actor trait at the time of writing can be :type or :name

  ex. (set-on-collision :from [:name :ship] 
                        :to [:type :enemy]
                        ...

  providing an actor trait of [:all] chooses all actors
  "
  [& {:keys [name from to callback]
      :or {from :all
           to :all}}]
  (swap! collision-handlers conj
         {:name name :from from
          :to to :callback callback}))

(defn has-trait? [actor [attribute value]]
  (if (= (get actor attribute) value)
    true))

(system/add-system!
 :collision-system
 (reify
   system/System
   (run [_ props]
     (let [from-actors @(-> scene/main :actor-list)
           to-actors from-actors

           collision-listing
           (collision/generate-collision-listing from-actors to-actors)]
       (doseq [{:keys [from to callback]} @collision-handlers
               {from-actor :first to-actor :second} collision-listing]
         (when (and
                (has-trait? from-actor from)
                (has-trait? to-actor to))
           (callback from-actor to-actor)))))))

(set-on-collision
 :name :test
 :from [:name :phasor]
 :to [:type :enemy]
 :callback
 (fn [from to]
   (log "hit!")
   (scene/remove-actor! scene/main to)))
