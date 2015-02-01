// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.utils');
goog.require('cljs.core');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.constants');
/**
* @param {...*} var_args
*/
defender_cljs.utils.log = (function() { 
var log__delegate = function (msgs){console.log.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,msgs)));
return cljs.core.last.call(null,msgs);
};
var log = function (var_args){
var msgs = null;if (arguments.length > 0) {
  msgs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,msgs);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__20700){
var msgs = cljs.core.seq(arglist__20700);
return log__delegate(msgs);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
defender_cljs.utils.dead_zone = (64);
/**
* Gets random location within the game scene bounds
*/
defender_cljs.utils.get_random_location = (function get_random_location(){var x = cljs.core.rand.call(null,defender_cljs.constants.map_width);var y = cljs.core.rand.call(null,((defender_cljs.constants.view_height - defender_cljs.constants.top_overlay_height) - defender_cljs.utils.dead_zone));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + defender_cljs.utils.dead_zone),(0)], null);
});

//# sourceMappingURL=utils.js.map