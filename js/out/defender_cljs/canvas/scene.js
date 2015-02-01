// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.scene');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.utils');
/**
* @param {...*} var_args
*/
defender_cljs.canvas.scene.create_scene = (function() { 
var create_scene__delegate = function (p__28395){var map__28397 = p__28395;var map__28397__$1 = ((cljs.core.seq_QMARK_.call(null,map__28397))?cljs.core.apply.call(null,cljs.core.hash_map,map__28397):map__28397);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300),(new THREE.Scene()),new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
};
var create_scene = function (var_args){
var p__28395 = null;if (arguments.length > 0) {
  p__28395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_scene__delegate.call(this,p__28395);};
create_scene.cljs$lang$maxFixedArity = 0;
create_scene.cljs$lang$applyTo = (function (arglist__28398){
var p__28395 = cljs.core.seq(arglist__28398);
return create_scene__delegate(p__28395);
});
create_scene.cljs$core$IFn$_invoke$arity$variadic = create_scene__delegate;
return create_scene;
})()
;
/**
* Adds an actor to the scene
*/
defender_cljs.canvas.scene.add_actor_BANG_ = (function add_actor_BANG_(scene,actor){new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(scene).add(new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.conj,actor);
});
/**
* Removes an actor from the scene
*/
defender_cljs.canvas.scene.remove_actor_BANG_ = (function remove_actor_BANG_(scene,actor){new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(scene).remove(new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor));
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(scene),cljs.core.filter.call(null,(function (p1__28399_SHARP_){return cljs.core.not_EQ_.call(null,actor,p1__28399_SHARP_);
}),cljs.core.deref.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(scene))));
});
defender_cljs.canvas.scene.add_object_BANG_ = (function add_object_BANG_(scene,obj){return new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(scene).add(obj);
});
defender_cljs.canvas.scene.remove_object_BANG_ = (function remove_object_BANG_(scene,obj){return new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(scene).remove(obj);
});
defender_cljs.canvas.scene.main = defender_cljs.canvas.scene.create_scene.call(null);
defender_cljs.canvas.scene.hud = defender_cljs.canvas.scene.create_scene.call(null);

//# sourceMappingURL=scene.js.map