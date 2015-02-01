// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.actors.projectile');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.events');
goog.require('defender_cljs.canvas.geometry');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.geometry');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.scene');
/**
* @param {...*} var_args
*/
defender_cljs.actors.projectile.make_projectile = (function() { 
var make_projectile__delegate = function (p__5249){var map__5251 = p__5249;var map__5251__$1 = ((cljs.core.seq_QMARK_.call(null,map__5251))?cljs.core.apply.call(null,cljs.core.hash_map,map__5251):map__5251);var color = cljs.core.get.call(null,map__5251__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));var material = (new THREE.MeshBasicMaterial({"color": color}));var geometry = (new THREE.CircleGeometry((3),(5)));var circle = (new THREE.Mesh(geometry,material));var actor = defender_cljs.actor.create_actor.call(null,circle,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"projectile","projectile",1810544084),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"projectile","projectile",1810544084));defender_cljs.actor.set_collision_BANG_.call(null,actor,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aabb","aabb",-772432582),new cljs.core.Keyword(null,"width","width",-384071477),(7),new cljs.core.Keyword(null,"height","height",1025178622),(7));
return actor;
};
var make_projectile = function (var_args){
var p__5249 = null;if (arguments.length > 0) {
  p__5249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return make_projectile__delegate.call(this,p__5249);};
make_projectile.cljs$lang$maxFixedArity = 0;
make_projectile.cljs$lang$applyTo = (function (arglist__5252){
var p__5249 = cljs.core.seq(arglist__5252);
return make_projectile__delegate(p__5249);
});
make_projectile.cljs$core$IFn$_invoke$arity$variadic = make_projectile__delegate;
return make_projectile;
})()
;
defender_cljs.actors.projectile.projectile_listing = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"basic","basic",1043717368),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"ship-phasor","ship-phasor",-292339647),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
defender_cljs.actors.projectile.add_projectile_BANG_ = (function add_projectile_BANG_(type){var projectile = (function (){var pred__5256 = cljs.core._EQ_;var expr__5257 = type;if(cljs.core.truth_(pred__5256.call(null,new cljs.core.Keyword(null,"basic","basic",1043717368),expr__5257)))
{return defender_cljs.actors.projectile.make_projectile.call(null);
} else
{if(cljs.core.truth_(pred__5256.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__5257)))
{return defender_cljs.actors.projectile.make_projectile.call(null,new cljs.core.Keyword(null,"color","color",1011675173),(11206570));
} else
{if(cljs.core.truth_(pred__5256.call(null,new cljs.core.Keyword(null,"ship-phasor","ship-phasor",-292339647),expr__5257)))
{var phasor = defender_cljs.canvas.geometry.square.call(null,new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"color","color",1011675173),(16755370));var projectile = defender_cljs.actor.create_actor.call(null,phasor,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"phasor","phasor",1818286796),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"projectile","projectile",1810544084));defender_cljs.actor.set_collision_BANG_.call(null,projectile,new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(2));
return projectile;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5257))));
}
}
}
})();cljs.core.swap_BANG_.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),projectile,new cljs.core.Keyword(null,"active","active",1895962068),false], null));
return projectile;
});
defender_cljs.actors.projectile.make_active_BANG_ = (function make_active_BANG_(type,projectile){return cljs.core.reset_BANG_.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type),cljs.core.map.call(null,(function (proj_map){if(cljs.core._EQ_.call(null,proj_map.call(null,new cljs.core.Keyword(null,"obj","obj",981763962)),projectile))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),proj_map.call(null,new cljs.core.Keyword(null,"obj","obj",981763962)),new cljs.core.Keyword(null,"active","active",1895962068),true], null);
} else
{return proj_map;
}
}),cljs.core.deref.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type))));
});
defender_cljs.actors.projectile.make_inactive_BANG_ = (function make_inactive_BANG_(type,projectile){return cljs.core.reset_BANG_.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type),cljs.core.map.call(null,(function (proj_map){if(cljs.core._EQ_.call(null,proj_map.call(null,new cljs.core.Keyword(null,"obj","obj",981763962)),projectile))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),proj_map.call(null,new cljs.core.Keyword(null,"obj","obj",981763962)),new cljs.core.Keyword(null,"active","active",1895962068),false], null);
} else
{return proj_map;
}
}),cljs.core.deref.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type))));
});
/**
* @param {...*} var_args
*/
defender_cljs.actors.projectile.fire_projectile = (function() { 
var fire_projectile__delegate = function (p__5260){var map__5262 = p__5260;var map__5262__$1 = ((cljs.core.seq_QMARK_.call(null,map__5262))?cljs.core.apply.call(null,cljs.core.hash_map,map__5262):map__5262);var timeout = cljs.core.get.call(null,map__5262__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1));var velocity = cljs.core.get.call(null,map__5262__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(0),(0)], null));var position = cljs.core.get.call(null,map__5262__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(defender_cljs.constants.view_height / (2)),(0)], null));var type = cljs.core.get.call(null,map__5262__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"basic","basic",1043717368));var proj_map = cljs.core.first.call(null,cljs.core.take.call(null,(1),cljs.core.filter.call(null,((function (map__5262,map__5262__$1,timeout,velocity,position,type){
return (function (p1__5259_SHARP_){return p1__5259_SHARP_.call(null,new cljs.core.Keyword(null,"active","active",1895962068));
});})(map__5262,map__5262__$1,timeout,velocity,position,type))
,cljs.core.deref.call(null,defender_cljs.actors.projectile.projectile_listing.call(null,type)))));var projectile = (((proj_map == null))?defender_cljs.actors.projectile.add_projectile_BANG_.call(null,type):proj_map.call(null,new cljs.core.Keyword(null,"obj","obj",981763962)));defender_cljs.actors.projectile.make_inactive_BANG_.call(null,type,projectile);
defender_cljs.actor.set_position_BANG_.call(null,projectile,position);
defender_cljs.actor.set_velocity_BANG_.call(null,projectile,velocity);
defender_cljs.canvas.scene.add_actor_BANG_.call(null,defender_cljs.canvas.scene.main,projectile);
defender_cljs.events.set_on_timeout.call(null,timeout,((function (proj_map,projectile,map__5262,map__5262__$1,timeout,velocity,position,type){
return (function (){defender_cljs.canvas.scene.remove_actor_BANG_.call(null,defender_cljs.canvas.scene.main,projectile);
return defender_cljs.actors.projectile.make_active_BANG_.call(null,type,projectile);
});})(proj_map,projectile,map__5262,map__5262__$1,timeout,velocity,position,type))
);
return projectile;
};
var fire_projectile = function (var_args){
var p__5260 = null;if (arguments.length > 0) {
  p__5260 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fire_projectile__delegate.call(this,p__5260);};
fire_projectile.cljs$lang$maxFixedArity = 0;
fire_projectile.cljs$lang$applyTo = (function (arglist__5263){
var p__5260 = cljs.core.seq(arglist__5263);
return fire_projectile__delegate(p__5260);
});
fire_projectile.cljs$core$IFn$_invoke$arity$variadic = fire_projectile__delegate;
return fire_projectile;
})()
;

//# sourceMappingURL=projectile.js.map