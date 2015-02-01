// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.enemy');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.utils');
/**
* Resembles the same functionality as an actor, but includes extra
* information specific to enemies
* @param {...*} var_args
*/
defender_cljs.enemy.create_enemy = (function() { 
var create_enemy__delegate = function (obj,p__28464){var map__28466 = p__28464;var map__28466__$1 = ((cljs.core.seq_QMARK_.call(null,map__28466))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);var attr = map__28466__$1;var initial_state = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"sleeping","sleeping",-1878480086));var actor = cljs.core.apply.call(null,defender_cljs.actor.create_actor,obj,cljs.core.flatten.call(null,cljs.core.vec.call(null,attr)));return cljs.core.merge.call(null,actor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sleeping","sleeping",-1878480086),new cljs.core.Keyword(null,"aggro","aggro",-1436478316),0.0], null))], null));
};
var create_enemy = function (obj,var_args){
var p__28464 = null;if (arguments.length > 1) {
  p__28464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_enemy__delegate.call(this,obj,p__28464);};
create_enemy.cljs$lang$maxFixedArity = 1;
create_enemy.cljs$lang$applyTo = (function (arglist__28467){
var obj = cljs.core.first(arglist__28467);
var p__28464 = cljs.core.rest(arglist__28467);
return create_enemy__delegate(obj,p__28464);
});
create_enemy.cljs$core$IFn$_invoke$arity$variadic = create_enemy__delegate;
return create_enemy;
})()
;

//# sourceMappingURL=enemy.js.map