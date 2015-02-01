// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.actor');
goog.require('cljs.core');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.canvas.object');
/**
* Creates an actor with all of the required attributes
* @param {...*} var_args
*/
defender_cljs.actor.create_actor = (function() { 
var create_actor__delegate = function (obj,p__33931){var map__33933 = p__33931;var map__33933__$1 = ((cljs.core.seq_QMARK_.call(null,map__33933))?cljs.core.apply.call(null,cljs.core.hash_map,map__33933):map__33933);var inverse_mass = cljs.core.get.call(null,map__33933__$1,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389),1.0);var damping = cljs.core.get.call(null,map__33933__$1,new cljs.core.Keyword(null,"damping","damping",1054389681),1.0);var type = cljs.core.get.call(null,map__33933__$1,new cljs.core.Keyword(null,"type","type",1174270348),"actor");var name = cljs.core.get.call(null,map__33933__$1,new cljs.core.Keyword(null,"name","name",1843675177));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"entity","entity",-450970276),obj,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"physics","physics",-1254209137),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"force-accumulator","force-accumulator",1388619442),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389),inverse_mass,new cljs.core.Keyword(null,"damping","damping",1054389681),damping], null)),new cljs.core.Keyword(null,"collision","collision",-201625508),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aabb","aabb",-772432582),new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null))], null);
};
var create_actor = function (obj,var_args){
var p__33931 = null;if (arguments.length > 1) {
  p__33931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_actor__delegate.call(this,obj,p__33931);};
create_actor.cljs$lang$maxFixedArity = 1;
create_actor.cljs$lang$applyTo = (function (arglist__33934){
var obj = cljs.core.first(arglist__33934);
var p__33931 = cljs.core.rest(arglist__33934);
return create_actor__delegate(obj,p__33931);
});
create_actor.cljs$core$IFn$_invoke$arity$variadic = create_actor__delegate;
return create_actor;
})()
;
defender_cljs.actor.get_position = (function get_position(actor){var entity_position = new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor).position;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_position.x,entity_position.y,entity_position.z], null);
});
/**
* the map world is [-map-width/2, map-width/2]. This function wraps
* the x coordinate into that range
*/
defender_cljs.actor.modulus_wrap = (function modulus_wrap(x){var ld = (- (defender_cljs.constants.map_width / (2)));var hd = (defender_cljs.constants.map_width / (2));if((x <= ld))
{return (cljs.core.rem.call(null,x,ld) + ld);
} else
{if((x >= hd))
{return (cljs.core.rem.call(null,x,hd) - hd);
} else
{return x;

}
}
});
/**
* This is the position within the game coordinate
*/
defender_cljs.actor.get_game_position = (function get_game_position(actor){var entity_position = new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor).position;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender_cljs.actor.modulus_wrap.call(null,entity_position.x),entity_position.y,entity_position.z], null);
});
defender_cljs.actor.set_position_BANG_ = (function set_position_BANG_(actor,p__33935){var vec__33937 = p__33935;var x = cljs.core.nth.call(null,vec__33937,(0),null);var y = cljs.core.nth.call(null,vec__33937,(1),null);var z = cljs.core.nth.call(null,vec__33937,(2),null);defender_cljs.canvas.object.set_position_BANG_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor),x,y,(function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
defender_cljs.actor.translate_BANG_ = (function translate_BANG_(actor,p__33938){var vec__33940 = p__33938;var x = cljs.core.nth.call(null,vec__33940,(0),null);var y = cljs.core.nth.call(null,vec__33940,(1),null);var z = cljs.core.nth.call(null,vec__33940,(2),null);return defender_cljs.canvas.object.translate_BANG_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(actor),x,y,(function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})());
});
defender_cljs.actor.get_velocity = (function get_velocity(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));return physics.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
});
defender_cljs.actor.set_velocity_BANG_ = (function set_velocity_BANG_(actor,p__33941){var vec__33943 = p__33941;var x = cljs.core.nth.call(null,vec__33943,(0),null);var y = cljs.core.nth.call(null,vec__33943,(1),null);var z = cljs.core.nth.call(null,vec__33943,(2),null);cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.assoc,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})()], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
/**
* translates the current velocity value
*/
defender_cljs.actor.update_velocity_BANG_ = (function update_velocity_BANG_(actor,vel_inc){var vel = defender_cljs.actor.get_velocity.call(null,actor);return defender_cljs.actor.set_velocity_BANG_.call(null,actor,cljs.core.map.call(null,cljs.core._PLUS_,vel,vel_inc));
});
defender_cljs.actor.get_acceleration = (function get_acceleration(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));return physics.call(null,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421));
});
defender_cljs.actor.set_acceleration_BANG_ = (function set_acceleration_BANG_(actor,p__33944){var vec__33946 = p__33944;var x = cljs.core.nth.call(null,vec__33946,(0),null);var y = cljs.core.nth.call(null,vec__33946,(1),null);var z = cljs.core.nth.call(null,vec__33946,(2),null);cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.assoc,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})()], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
/**
* translates the current acceleration value
*/
defender_cljs.actor.update_acceleration_BANG_ = (function update_acceleration_BANG_(actor,acc_inc){var acc = defender_cljs.actor.get_acceleration.call(null,actor);return defender_cljs.actor.set_acceleration_BANG_.call(null,actor,cljs.core.map.call(null,cljs.core._PLUS_,acc,acc_inc));
});
defender_cljs.actor.get_inverse_mass = (function get_inverse_mass(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));return physics.call(null,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389));
});
defender_cljs.actor.set_inverse_mass_BANG_ = (function set_inverse_mass_BANG_(actor,inverse_mass){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.assoc,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389),inverse_mass);
});
defender_cljs.actor.get_mass = (function get_mass(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));var inverse_mass = physics.call(null,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389));return ((1) / inverse_mass);
});
defender_cljs.actor.set_mass_BANG_ = (function set_mass_BANG_(actor,mass){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.assoc,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389),((1) / mass));
});
defender_cljs.actor.get_damping = (function get_damping(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));return new cljs.core.Keyword(null,"damping","damping",1054389681).cljs$core$IFn$_invoke$arity$1(physics);
});
defender_cljs.actor.get_force_accumulator = (function get_force_accumulator(actor){var physics = cljs.core.deref.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor));return physics.call(null,new cljs.core.Keyword(null,"force-accumulator","force-accumulator",1388619442));
});
defender_cljs.actor.set_force_accumulator_BANG_ = (function set_force_accumulator_BANG_(actor,p__33947){var vec__33949 = p__33947;var x = cljs.core.nth.call(null,vec__33949,(0),null);var y = cljs.core.nth.call(null,vec__33949,(1),null);var z = cljs.core.nth.call(null,vec__33949,(2),null);cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.assoc,new cljs.core.Keyword(null,"force-accumulator","force-accumulator",1388619442),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})()], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
defender_cljs.actor.add_force_BANG_ = (function add_force_BANG_(actor,force){var current_force = defender_cljs.actor.get_force_accumulator.call(null,actor);return defender_cljs.actor.set_force_accumulator_BANG_.call(null,actor,cljs.core.map.call(null,cljs.core._PLUS_,force,current_force));
});
/**
* Allowed types
* :aabb with options :height :width :origin
* @param {...*} var_args
*/
defender_cljs.actor.set_collision_BANG_ = (function() { 
var set_collision_BANG___delegate = function (actor,p__33950){var map__33952 = p__33950;var map__33952__$1 = ((cljs.core.seq_QMARK_.call(null,map__33952))?cljs.core.apply.call(null,cljs.core.hash_map,map__33952):map__33952);var attrs = map__33952__$1;var type = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"aabb","aabb",-772432582));cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508).cljs$core$IFn$_invoke$arity$1(actor),cljs.core.merge,attrs);
return actor;
};
var set_collision_BANG_ = function (actor,var_args){
var p__33950 = null;if (arguments.length > 1) {
  p__33950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_collision_BANG___delegate.call(this,actor,p__33950);};
set_collision_BANG_.cljs$lang$maxFixedArity = 1;
set_collision_BANG_.cljs$lang$applyTo = (function (arglist__33953){
var actor = cljs.core.first(arglist__33953);
var p__33950 = cljs.core.rest(arglist__33953);
return set_collision_BANG___delegate(actor,p__33950);
});
set_collision_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_collision_BANG___delegate;
return set_collision_BANG_;
})()
;

//# sourceMappingURL=actor.js.map