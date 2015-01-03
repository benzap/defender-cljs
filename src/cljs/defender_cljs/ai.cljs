(ns defender-cljs.ai
  "Includes functionality for an AI System.
  Current implementation takes the form of a state machine"
  (:use [defender-cljs.utils :only [log]])
  (:require [defender-cljs.actor :as a]
            [defender-cljs.canvas.system :as system]))

;;
;; State Machine Implementation
;;

(def state-machines
  "List of state machines"
  (atom []))

(defn create-state-machine
  "A state machine consists of a list of states, and a list of
  transitions between those states

  states is a symbol:function map

  transitions is a [from-state-symbol to-state-symbol]:function map
  "
  [name &
   {:keys [initial-state]
    :or {initial-state :none}}]
  {:name name
   :current-state (atom initial-state)
   :states (atom {})
   :transitions (atom {})})

(defn set-state! [state-machine state-name arguments]
  (let [states @(get state-machine :states)
        state-fcn (states state-name)]
    (if (fn? state-fcn)
      (apply state-fcn arguments)
      (log "Unable to find state change for " state-name))))

(defn state-transition! [state-machine state-name arguments])

(defn register-state-machine! [state-machine])
(defn unregister-state-machine! [state-machine])

(defn add-state! [state-name fcn])
(defn remove-state! [state-name])

(defn add-transition! [[from-state to-state] fcn])
(defn remove-transition! [[from-state to-state]])

