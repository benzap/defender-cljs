// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.camera');
goog.require('cljs.core');
goog.require('defender_cljs.actors.ship');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.physics');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.physics');
goog.require('defender_cljs.actors.ship');
if(typeof defender_cljs.canvas.camera.default_camera_near !== 'undefined')
{} else
{defender_cljs.canvas.camera.default_camera_near = (-10);
}
if(typeof defender_cljs.canvas.camera.default_camera_far !== 'undefined')
{} else
{defender_cljs.canvas.camera.default_camera_far = (10);
}
defender_cljs.canvas.camera.make_camera = (function make_camera(left,right,top,bottom){var camera = (new THREE.OrthographicCamera(left,right,top,bottom,defender_cljs.canvas.camera.default_camera_near,defender_cljs.canvas.camera.default_camera_far));(camera.position["z"] = (0));
return defender_cljs.actor.create_actor.call(null,camera,new cljs.core.Keyword(null,"name","name",1843675177),"camera",new cljs.core.Keyword(null,"type","type",1174270348),"camera");
});
defender_cljs.canvas.camera.main_camera = defender_cljs.canvas.camera.make_camera.call(null,(- (defender_cljs.constants.view_width / (2))),(defender_cljs.constants.view_width / (2)),defender_cljs.constants.view_height,(0));
defender_cljs.actor.set_position_BANG_.call(null,defender_cljs.canvas.camera.main_camera,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(defender_cljs.constants.map_width / (2)),(0),(0)], null));
defender_cljs.canvas.camera.hud_camera = defender_cljs.canvas.camera.make_camera.call(null,(0),defender_cljs.constants.hud_width,defender_cljs.constants.hud_height,(0));
defender_cljs.actor.set_mass_BANG_.call(null,defender_cljs.canvas.camera.main_camera,1.0);
defender_cljs.physics.add_drag_BANG_.call(null,defender_cljs.canvas.camera.main_camera,new cljs.core.Keyword(null,"k1","k1",952658428),0.0,new cljs.core.Keyword(null,"k2","k2",1429301820),0.0);
defender_cljs.canvas.camera.camera_spring = defender_cljs.physics.add_spring_BANG_.call(null,defender_cljs.canvas.camera.main_camera,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"basic","basic",1043717368),new cljs.core.Keyword(null,"spring-length","spring-length",144641228),(0),new cljs.core.Keyword(null,"spring-constant","spring-constant",1217805481),(500),new cljs.core.Keyword(null,"max-force","max-force",-983508172),(5000),new cljs.core.Keyword(null,"damping-ratio","damping-ratio",-1886973083),2.0,new cljs.core.Keyword(null,"lock-y-axis","lock-y-axis",880561500),true);
defender_cljs.canvas.camera.update_camera_position = (function update_camera_position(delta){var ship_position = defender_cljs.actor.get_position.call(null,defender_cljs.actors.ship.ship);var vec__5337 = ship_position;var posx = cljs.core.nth.call(null,vec__5337,(0),null);var _ = cljs.core.nth.call(null,vec__5337,(1),null);var ___$1 = cljs.core.nth.call(null,vec__5337,(2),null);var ship_velocity = defender_cljs.actor.get_velocity.call(null,defender_cljs.actors.ship.ship);var vec__5338 = ship_velocity;var velx = cljs.core.nth.call(null,vec__5338,(0),null);var ___$2 = cljs.core.nth.call(null,vec__5338,(1),null);var ___$3 = cljs.core.nth.call(null,vec__5338,(2),null);return defender_cljs.physics.update_spring_anchor_BANG_.call(null,defender_cljs.canvas.camera.camera_spring,(posx + ((velx * delta) * 15.0)),(0));
});
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"camera-tracking","camera-tracking",1422001685),(function (){if(typeof defender_cljs.canvas.camera.t5339 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.canvas.camera.t5339 = (function (meta5340){
this.meta5340 = meta5340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.canvas.camera.t5339.cljs$lang$type = true;
defender_cljs.canvas.camera.t5339.cljs$lang$ctorStr = "defender-cljs.canvas.camera/t5339";
defender_cljs.canvas.camera.t5339.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"defender-cljs.canvas.camera/t5339");
});
defender_cljs.canvas.camera.t5339.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.canvas.camera.t5339.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;return defender_cljs.canvas.camera.update_camera_position.call(null,new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(props));
});
defender_cljs.canvas.camera.t5339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5341){var self__ = this;
var _5341__$1 = this;return self__.meta5340;
});
defender_cljs.canvas.camera.t5339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5341,meta5340__$1){var self__ = this;
var _5341__$1 = this;return (new defender_cljs.canvas.camera.t5339(meta5340__$1));
});
defender_cljs.canvas.camera.__GT_t5339 = (function __GT_t5339(meta5340){return (new defender_cljs.canvas.camera.t5339(meta5340));
});
}
return (new defender_cljs.canvas.camera.t5339(null));
})());

//# sourceMappingURL=camera.js.map