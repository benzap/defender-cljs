// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.ai');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.utils');
/**
* List of state machines
*/
defender_cljs.ai.state_machines = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* A state machine consists of a list of states, and a list of
* transitions between those states
* 
* states is a symbol:function map
* 
* transitions is a [from-state-symbol to-state-symbol]:function map
* 
* @param {...*} var_args
*/
defender_cljs.ai.create_state_machine = (function() { 
var create_state_machine__delegate = function (name,p__5325){var map__5327 = p__5325;var map__5327__$1 = ((cljs.core.seq_QMARK_.call(null,map__5327))?cljs.core.apply.call(null,cljs.core.hash_map,map__5327):map__5327);var initial_state = cljs.core.get.call(null,map__5327__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"none","none",1333468478));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"current-state","current-state",1048284452),cljs.core.atom.call(null,initial_state),new cljs.core.Keyword(null,"states","states",1389013542),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null);
};
var create_state_machine = function (name,var_args){
var p__5325 = null;if (arguments.length > 1) {
  p__5325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_state_machine__delegate.call(this,name,p__5325);};
create_state_machine.cljs$lang$maxFixedArity = 1;
create_state_machine.cljs$lang$applyTo = (function (arglist__5328){
var name = cljs.core.first(arglist__5328);
var p__5325 = cljs.core.rest(arglist__5328);
return create_state_machine__delegate(name,p__5325);
});
create_state_machine.cljs$core$IFn$_invoke$arity$variadic = create_state_machine__delegate;
return create_state_machine;
})()
;
defender_cljs.ai.set_state_BANG_ = (function set_state_BANG_(state_machine,state_name,arguments){var states = cljs.core.deref.call(null,cljs.core.get.call(null,state_machine,new cljs.core.Keyword(null,"states","states",1389013542)));var state_fcn = states.call(null,state_name);if(cljs.core.fn_QMARK_.call(null,state_fcn))
{return cljs.core.apply.call(null,state_fcn,arguments);
} else
{return defender_cljs.utils.log.call(null,"Unable to find state change for ",state_name);
}
});
defender_cljs.ai.state_transition_BANG_ = (function state_transition_BANG_(state_machine,state_name,arguments){return null;
});
defender_cljs.ai.register_state_machine_BANG_ = (function register_state_machine_BANG_(state_machine){return null;
});
defender_cljs.ai.unregister_state_machine_BANG_ = (function unregister_state_machine_BANG_(state_machine){return null;
});
defender_cljs.ai.add_state_BANG_ = (function add_state_BANG_(state_name,fcn){return null;
});
defender_cljs.ai.remove_state_BANG_ = (function remove_state_BANG_(state_name){return null;
});
defender_cljs.ai.add_transition_BANG_ = (function add_transition_BANG_(p__5329,fcn){var vec__5331 = p__5329;var from_state = cljs.core.nth.call(null,vec__5331,(0),null);var to_state = cljs.core.nth.call(null,vec__5331,(1),null);return null;
});
defender_cljs.ai.remove_transition_BANG_ = (function remove_transition_BANG_(p__5332){var vec__5334 = p__5332;var from_state = cljs.core.nth.call(null,vec__5334,(0),null);var to_state = cljs.core.nth.call(null,vec__5334,(1),null);return null;
});

//# sourceMappingURL=ai.js.map