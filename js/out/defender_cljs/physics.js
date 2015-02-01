// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.physics');
goog.require('cljs.core');
goog.require('defender_cljs.vector');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.vector');
goog.require('defender_cljs.utils');
defender_cljs.physics.update_actor_physics = (function update_actor_physics(actor,delta){var delta_func = cljs.core.partial.call(null,cljs.core._STAR_,delta);var velocity = defender_cljs.actor.get_velocity.call(null,actor);var delta_velocity = cljs.core.map.call(null,delta_func,velocity);var position = defender_cljs.actor.get_position.call(null,actor);var position__$1 = defender_cljs.actor.set_position_BANG_.call(null,actor,cljs.core.map.call(null,cljs.core._PLUS_,delta_velocity,position));var acceleration = defender_cljs.actor.get_acceleration.call(null,actor);var force_accum = defender_cljs.actor.get_force_accumulator.call(null,actor);var inverse_mass = defender_cljs.actor.get_inverse_mass.call(null,actor);var delta_force = cljs.core.map.call(null,((function (delta_func,velocity,delta_velocity,position,position__$1,acceleration,force_accum,inverse_mass){
return (function (p1__6292_SHARP_){return (inverse_mass * p1__6292_SHARP_);
});})(delta_func,velocity,delta_velocity,position,position__$1,acceleration,force_accum,inverse_mass))
,force_accum);var res_acceleration = cljs.core.map.call(null,cljs.core._PLUS_,delta_force,acceleration);var delta_acceleration = cljs.core.map.call(null,delta_func,res_acceleration);var velocity__$1 = defender_cljs.actor.set_velocity_BANG_.call(null,actor,cljs.core.map.call(null,cljs.core._PLUS_,delta_acceleration,velocity));var damping = defender_cljs.actor.get_damping.call(null,actor);var delta_damping = Math.pow.call(null,damping,delta);var velocity__$2 = defender_cljs.actor.set_velocity_BANG_.call(null,actor,cljs.core.map.call(null,((function (delta_func,velocity,delta_velocity,position,position__$1,acceleration,force_accum,inverse_mass,delta_force,res_acceleration,delta_acceleration,velocity__$1,damping,delta_damping){
return (function (p1__6293_SHARP_){return (delta_damping * p1__6293_SHARP_);
});})(delta_func,velocity,delta_velocity,position,position__$1,acceleration,force_accum,inverse_mass,delta_force,res_acceleration,delta_acceleration,velocity__$1,damping,delta_damping))
,velocity__$1));var velocity__$3 = defender_cljs.actor.set_velocity_BANG_.call(null,actor,defender_cljs.vector.clamp.call(null,velocity__$2,1.0E9));return defender_cljs.actor.set_force_accumulator_BANG_.call(null,actor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));
});
defender_cljs.physics.update_scene = (function update_scene(scene,delta){var seq__6298 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(scene)));var chunk__6299 = null;var count__6300 = (0);var i__6301 = (0);while(true){
if((i__6301 < count__6300))
{var scene_actor = cljs.core._nth.call(null,chunk__6299,i__6301);defender_cljs.physics.update_actor_physics.call(null,scene_actor,delta);
{
var G__6302 = seq__6298;
var G__6303 = chunk__6299;
var G__6304 = count__6300;
var G__6305 = (i__6301 + (1));
seq__6298 = G__6302;
chunk__6299 = G__6303;
count__6300 = G__6304;
i__6301 = G__6305;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6298);if(temp__4126__auto__)
{var seq__6298__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6298__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6298__$1);{
var G__6306 = cljs.core.chunk_rest.call(null,seq__6298__$1);
var G__6307 = c__4410__auto__;
var G__6308 = cljs.core.count.call(null,c__4410__auto__);
var G__6309 = (0);
seq__6298 = G__6306;
chunk__6299 = G__6307;
count__6300 = G__6308;
i__6301 = G__6309;
continue;
}
} else
{var scene_actor = cljs.core.first.call(null,seq__6298__$1);defender_cljs.physics.update_actor_physics.call(null,scene_actor,delta);
{
var G__6310 = cljs.core.next.call(null,seq__6298__$1);
var G__6311 = null;
var G__6312 = (0);
var G__6313 = (0);
seq__6298 = G__6310;
chunk__6299 = G__6311;
count__6300 = G__6312;
i__6301 = G__6313;
continue;
}
}
} else
{return null;
}
}
break;
}
});
defender_cljs.physics.dragged_actors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* Based on the drag coefficient V(normal) ( k1 |V| + k2 |V|^2 )
* @param {...*} var_args
*/
defender_cljs.physics.add_drag_BANG_ = (function() { 
var add_drag_BANG___delegate = function (actor,p__6314){var map__6316 = p__6314;var map__6316__$1 = ((cljs.core.seq_QMARK_.call(null,map__6316))?cljs.core.apply.call(null,cljs.core.hash_map,map__6316):map__6316);var axis = cljs.core.get.call(null,map__6316__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null));var k2 = cljs.core.get.call(null,map__6316__$1,new cljs.core.Keyword(null,"k2","k2",1429301820),0.0);var k1 = cljs.core.get.call(null,map__6316__$1,new cljs.core.Keyword(null,"k1","k1",952658428),0.0);return cljs.core.swap_BANG_.call(null,defender_cljs.physics.dragged_actors,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actor","actor",-1830560481),actor,new cljs.core.Keyword(null,"k1","k1",952658428),k1,new cljs.core.Keyword(null,"k2","k2",1429301820),k2,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null));
};
var add_drag_BANG_ = function (actor,var_args){
var p__6314 = null;if (arguments.length > 1) {
  p__6314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return add_drag_BANG___delegate.call(this,actor,p__6314);};
add_drag_BANG_.cljs$lang$maxFixedArity = 1;
add_drag_BANG_.cljs$lang$applyTo = (function (arglist__6317){
var actor = cljs.core.first(arglist__6317);
var p__6314 = cljs.core.rest(arglist__6317);
return add_drag_BANG___delegate(actor,p__6314);
});
add_drag_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_drag_BANG___delegate;
return add_drag_BANG_;
})()
;
defender_cljs.physics.apply_drag_generator = (function apply_drag_generator(drag_reg){var actor = new cljs.core.Keyword(null,"actor","actor",-1830560481).cljs$core$IFn$_invoke$arity$1(drag_reg);var k1 = new cljs.core.Keyword(null,"k1","k1",952658428).cljs$core$IFn$_invoke$arity$1(drag_reg);var k2 = new cljs.core.Keyword(null,"k2","k2",1429301820).cljs$core$IFn$_invoke$arity$1(drag_reg);var axis = new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(drag_reg);var velocity = cljs.core.map.call(null,cljs.core._STAR_,defender_cljs.actor.get_velocity.call(null,actor),axis);var velocity_mag = defender_cljs.vector.mag.call(null,velocity);var drag_speed = ((k1 * velocity_mag) + ((k2 * velocity_mag) * velocity_mag));var force = cljs.core.map.call(null,((function (actor,k1,k2,axis,velocity,velocity_mag,drag_speed){
return (function (p1__6318_SHARP_){return ((- drag_speed) * p1__6318_SHARP_);
});})(actor,k1,k2,axis,velocity,velocity_mag,drag_speed))
,defender_cljs.vector.norm.call(null,velocity));return defender_cljs.actor.add_force_BANG_.call(null,actor,force);
});
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"drag-force-generator","drag-force-generator",-724714077),(function (){if(typeof defender_cljs.physics.t6319 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.physics.t6319 = (function (meta6320){
this.meta6320 = meta6320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.physics.t6319.cljs$lang$type = true;
defender_cljs.physics.t6319.cljs$lang$ctorStr = "defender-cljs.physics/t6319";
defender_cljs.physics.t6319.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"defender-cljs.physics/t6319");
});
defender_cljs.physics.t6319.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.physics.t6319.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;var seq__6322 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.physics.dragged_actors));var chunk__6323 = null;var count__6324 = (0);var i__6325 = (0);while(true){
if((i__6325 < count__6324))
{var dragged = cljs.core._nth.call(null,chunk__6323,i__6325);defender_cljs.physics.apply_drag_generator.call(null,dragged);
{
var G__6326 = seq__6322;
var G__6327 = chunk__6323;
var G__6328 = count__6324;
var G__6329 = (i__6325 + (1));
seq__6322 = G__6326;
chunk__6323 = G__6327;
count__6324 = G__6328;
i__6325 = G__6329;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6322);if(temp__4126__auto__)
{var seq__6322__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6322__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6322__$1);{
var G__6330 = cljs.core.chunk_rest.call(null,seq__6322__$1);
var G__6331 = c__4410__auto__;
var G__6332 = cljs.core.count.call(null,c__4410__auto__);
var G__6333 = (0);
seq__6322 = G__6330;
chunk__6323 = G__6331;
count__6324 = G__6332;
i__6325 = G__6333;
continue;
}
} else
{var dragged = cljs.core.first.call(null,seq__6322__$1);defender_cljs.physics.apply_drag_generator.call(null,dragged);
{
var G__6334 = cljs.core.next.call(null,seq__6322__$1);
var G__6335 = null;
var G__6336 = (0);
var G__6337 = (0);
seq__6322 = G__6334;
chunk__6323 = G__6335;
count__6324 = G__6336;
i__6325 = G__6337;
continue;
}
}
} else
{return null;
}
}
break;
}
});
defender_cljs.physics.t6319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6321){var self__ = this;
var _6321__$1 = this;return self__.meta6320;
});
defender_cljs.physics.t6319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6321,meta6320__$1){var self__ = this;
var _6321__$1 = this;return (new defender_cljs.physics.t6319(meta6320__$1));
});
defender_cljs.physics.__GT_t6319 = (function __GT_t6319(meta6320){return (new defender_cljs.physics.t6319(meta6320));
});
}
return (new defender_cljs.physics.t6319(null));
})());
defender_cljs.physics.springed_actors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* Registers an actor to be affected by springy behaviour
* 
* Optional Arguments:
* 
* spring-constant -- defines the spring constant, k [default: 0.1]
* 
* spring-length -- defines the length of the spring [default: 1]
* 
* damping-ratio -- the damping ratio when set to a value > 0 results
* in damped harmonic motion.
* 
* lock-x-axis -- if true, prevents the spring from
* affecting the x axis [default: false]
* 
* lock-y-axis -- if true, prevents the spring from
* affecting the y axis [default: false]
* 
* type -- defines more specialized spring behaviour. types are discussed below
* [default: :basic]
* 
* max-force -- max amount of spring force that can be applied
* 
* anchor-position -- position of the anchor, that the spring follows
* 
* Spring types:
* 
* :basic -- provides basic spring behaviour, for pushing and pulling
* from a fixed point based on the spring-length
* :basic-exponential -- basic spring behaviour, with exponential curve
* 
* 
* @param {...*} var_args
*/
defender_cljs.physics.add_spring_BANG_ = (function() { 
var add_spring_BANG___delegate = function (actor,p__6338){var map__6340 = p__6338;var map__6340__$1 = ((cljs.core.seq_QMARK_.call(null,map__6340))?cljs.core.apply.call(null,cljs.core.hash_map,map__6340):map__6340);var max_force = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"max-force","max-force",-983508172),1.0E11);var anchor_position = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665),defender_cljs.actor.get_position.call(null,actor));var lock_y_axis = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"lock-y-axis","lock-y-axis",880561500),false);var lock_x_axis = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"lock-x-axis","lock-x-axis",-638008401),false);var damping_ratio = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"damping-ratio","damping-ratio",-1886973083),(0));var spring_length = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"spring-length","spring-length",144641228),(1));var spring_constant = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"spring-constant","spring-constant",1217805481),0.1);var type = cljs.core.get.call(null,map__6340__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"basic","basic",1043717368));var spring_reg = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"damping-ratio","damping-ratio",-1886973083),new cljs.core.Keyword(null,"spring-constant","spring-constant",1217805481),new cljs.core.Keyword(null,"spring-length","spring-length",144641228),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lock-x-axis","lock-x-axis",-638008401),new cljs.core.Keyword(null,"max-force","max-force",-983508172),new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665),new cljs.core.Keyword(null,"lock-y-axis","lock-y-axis",880561500),new cljs.core.Keyword(null,"actor","actor",-1830560481)],[damping_ratio,spring_constant,spring_length,type,lock_x_axis,max_force,cljs.core.atom.call(null,anchor_position),lock_y_axis,actor]);cljs.core.swap_BANG_.call(null,defender_cljs.physics.springed_actors,cljs.core.conj,spring_reg);
defender_cljs.utils.log.call(null,"test",spring_reg);
return spring_reg;
};
var add_spring_BANG_ = function (actor,var_args){
var p__6338 = null;if (arguments.length > 1) {
  p__6338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return add_spring_BANG___delegate.call(this,actor,p__6338);};
add_spring_BANG_.cljs$lang$maxFixedArity = 1;
add_spring_BANG_.cljs$lang$applyTo = (function (arglist__6341){
var actor = cljs.core.first(arglist__6341);
var p__6338 = cljs.core.rest(arglist__6341);
return add_spring_BANG___delegate(actor,p__6338);
});
add_spring_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_spring_BANG___delegate;
return add_spring_BANG_;
})()
;
/**
* @param {...*} var_args
*/
defender_cljs.physics.update_spring_anchor_BANG_ = (function() { 
var update_spring_anchor_BANG___delegate = function (spring_reg,p__6342){var vec__6344 = p__6342;var x = cljs.core.nth.call(null,vec__6344,(0),null);var y = cljs.core.nth.call(null,vec__6344,(1),null);var z = cljs.core.nth.call(null,vec__6344,(2),null);return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(spring_reg),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(function (){var or__3640__auto__ = z;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
})()], null));
};
var update_spring_anchor_BANG_ = function (spring_reg,var_args){
var p__6342 = null;if (arguments.length > 1) {
  p__6342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return update_spring_anchor_BANG___delegate.call(this,spring_reg,p__6342);};
update_spring_anchor_BANG_.cljs$lang$maxFixedArity = 1;
update_spring_anchor_BANG_.cljs$lang$applyTo = (function (arglist__6345){
var spring_reg = cljs.core.first(arglist__6345);
var p__6342 = cljs.core.rest(arglist__6345);
return update_spring_anchor_BANG___delegate(spring_reg,p__6342);
});
update_spring_anchor_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_spring_anchor_BANG___delegate;
return update_spring_anchor_BANG_;
})()
;
defender_cljs.physics.get_spring_force = (function get_spring_force(spring_reg){var actor = new cljs.core.Keyword(null,"actor","actor",-1830560481).cljs$core$IFn$_invoke$arity$1(spring_reg);var position = defender_cljs.actor.get_position.call(null,actor);var velocity = defender_cljs.actor.get_velocity.call(null,actor);var mass = defender_cljs.actor.get_mass.call(null,actor);var anchor_position = cljs.core.deref.call(null,new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(spring_reg));var spring_length = new cljs.core.Keyword(null,"spring-length","spring-length",144641228).cljs$core$IFn$_invoke$arity$1(spring_reg);var spring_constant = new cljs.core.Keyword(null,"spring-constant","spring-constant",1217805481).cljs$core$IFn$_invoke$arity$1(spring_reg);var lock_x_axis = new cljs.core.Keyword(null,"lock-x-axis","lock-x-axis",-638008401).cljs$core$IFn$_invoke$arity$1(spring_reg);var lock_y_axis = new cljs.core.Keyword(null,"lock-y-axis","lock-y-axis",880561500).cljs$core$IFn$_invoke$arity$1(spring_reg);var max_force = new cljs.core.Keyword(null,"max-force","max-force",-983508172).cljs$core$IFn$_invoke$arity$1(spring_reg);var damping_ratio = new cljs.core.Keyword(null,"damping-ratio","damping-ratio",-1886973083).cljs$core$IFn$_invoke$arity$1(spring_reg);var damping_constant = (((2) * damping_ratio) * Math.sqrt.call(null,(mass * spring_constant)));var vec__6347 = cljs.core.map.call(null,cljs.core._,position,anchor_position);var fx = cljs.core.nth.call(null,vec__6347,(0),null);var fy = cljs.core.nth.call(null,vec__6347,(1),null);var fz = cljs.core.nth.call(null,vec__6347,(2),null);var force_vector = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(lock_x_axis)?(0):fx),(cljs.core.truth_(lock_y_axis)?(0):fy),fz], null);var force_spring = (spring_constant * ((- spring_length) + defender_cljs.vector.mag.call(null,force_vector)));var force_damping = (- (damping_constant * defender_cljs.vector.mag.call(null,velocity)));var final_force = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((- force_spring) + (- force_damping))),defender_cljs.vector.norm.call(null,force_vector));return defender_cljs.vector.clamp.call(null,final_force,max_force);
});
defender_cljs.physics.apply_spring_generator = (function (){var method_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4524__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("apply-spring-generator",((function (method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__){
return (function (spring_reg,props){return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spring_reg);
});})(method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
cljs.core._add_method.call(null,defender_cljs.physics.apply_spring_generator,new cljs.core.Keyword(null,"basic","basic",1043717368),(function (spring_reg,props){var actor = new cljs.core.Keyword(null,"actor","actor",-1830560481).cljs$core$IFn$_invoke$arity$1(spring_reg);var spring_force = defender_cljs.physics.get_spring_force.call(null,spring_reg);return defender_cljs.actor.add_force_BANG_.call(null,actor,spring_force);
}));

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
defender_cljs.physics.SpringForceGenerator = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k6349,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__6351 = k6349;switch (G__6351) {
default:
return cljs.core.get.call(null,self__.__extmap,k6349,else__4239__auto__);

}
});
defender_cljs.physics.SpringForceGenerator.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.physics.SpringForceGenerator.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;var seq__6352 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.physics.springed_actors));var chunk__6353 = null;var count__6354 = (0);var i__6355 = (0);while(true){
if((i__6355 < count__6354))
{var spring_reg = cljs.core._nth.call(null,chunk__6353,i__6355);defender_cljs.physics.apply_spring_generator.call(null,spring_reg,props);
{
var G__6360 = seq__6352;
var G__6361 = chunk__6353;
var G__6362 = count__6354;
var G__6363 = (i__6355 + (1));
seq__6352 = G__6360;
chunk__6353 = G__6361;
count__6354 = G__6362;
i__6355 = G__6363;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6352);if(temp__4126__auto__)
{var seq__6352__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6352__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6352__$1);{
var G__6364 = cljs.core.chunk_rest.call(null,seq__6352__$1);
var G__6365 = c__4410__auto__;
var G__6366 = cljs.core.count.call(null,c__4410__auto__);
var G__6367 = (0);
seq__6352 = G__6364;
chunk__6353 = G__6365;
count__6354 = G__6366;
i__6355 = G__6367;
continue;
}
} else
{var spring_reg = cljs.core.first.call(null,seq__6352__$1);defender_cljs.physics.apply_spring_generator.call(null,spring_reg,props);
{
var G__6368 = cljs.core.next.call(null,seq__6352__$1);
var G__6369 = null;
var G__6370 = (0);
var G__6371 = (0);
seq__6352 = G__6368;
chunk__6353 = G__6369;
count__6354 = G__6370;
i__6355 = G__6371;
continue;
}
}
} else
{return null;
}
}
break;
}
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#defender-cljs.physics.SpringForceGenerator{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new defender_cljs.physics.SpringForceGenerator(self__.__meta,self__.__extmap,self__.__hash));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new defender_cljs.physics.SpringForceGenerator(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__6348){var self__ = this;
var this__4243__auto____$1 = this;var pred__6356 = cljs.core.keyword_identical_QMARK_;var expr__6357 = k__4244__auto__;return (new defender_cljs.physics.SpringForceGenerator(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__6348),null));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__6348){var self__ = this;
var this__4235__auto____$1 = this;return (new defender_cljs.physics.SpringForceGenerator(G__6348,self__.__extmap,self__.__hash));
});
defender_cljs.physics.SpringForceGenerator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
defender_cljs.physics.SpringForceGenerator.cljs$lang$type = true;
defender_cljs.physics.SpringForceGenerator.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"defender-cljs.physics/SpringForceGenerator");
});
defender_cljs.physics.SpringForceGenerator.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"defender-cljs.physics/SpringForceGenerator");
});
defender_cljs.physics.__GT_SpringForceGenerator = (function __GT_SpringForceGenerator(){return (new defender_cljs.physics.SpringForceGenerator());
});
defender_cljs.physics.map__GT_SpringForceGenerator = (function map__GT_SpringForceGenerator(G__6350){return (new defender_cljs.physics.SpringForceGenerator(null,cljs.core.dissoc.call(null,G__6350)));
});
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"spring-force-generator","spring-force-generator",-201322159),(new defender_cljs.physics.SpringForceGenerator()));

//# sourceMappingURL=physics.js.map