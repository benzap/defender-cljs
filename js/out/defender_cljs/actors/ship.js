// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.actors.ship');
goog.require('cljs.core');
goog.require('defender_cljs.actors.projectile');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.sprite');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actors.projectile');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.events');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.events');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.physics');
goog.require('defender_cljs.canvas.sprite');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.physics');
defender_cljs.actors.ship.mass = (1);
defender_cljs.actors.ship.damping = 0.6;
defender_cljs.actors.ship.ship_thrust_speed = 3000.0;
defender_cljs.actors.ship.ship_elevation_speed = 800.0;
defender_cljs.canvas.sprite.load_texture.call(null,new cljs.core.Keyword(null,"ship","ship",197863473),"ship.png");
defender_cljs.actors.ship.main_material = defender_cljs.canvas.sprite.make_sprite_material.call(null,new cljs.core.Keyword(null,"ship","ship",197863473));
defender_cljs.actors.ship.ship_sprite = defender_cljs.canvas.sprite.make_sprite.call(null,defender_cljs.actors.ship.main_material);
defender_cljs.actors.ship.ship = defender_cljs.actor.create_actor.call(null,defender_cljs.actors.ship.ship_sprite,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"damping","damping",1054389681),defender_cljs.actors.ship.damping,new cljs.core.Keyword(null,"inverse-mass","inverse-mass",-1271507389),((1) / defender_cljs.actors.ship.mass));
defender_cljs.physics.add_drag_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.Keyword(null,"k1","k1",952658428),0.0,new cljs.core.Keyword(null,"k2","k2",1429301820),0.001,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null));
defender_cljs.actors.ship.ship_direction = cljs.core.atom.call(null,new cljs.core.Keyword(null,"left","left",-399115937));
defender_cljs.actors.ship.switch_ship_direction = (function switch_ship_direction(){var direction = cljs.core.deref.call(null,defender_cljs.actors.ship.ship_direction);var toggle = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937));return cljs.core.reset_BANG_.call(null,defender_cljs.actors.ship.ship_direction,toggle);
});
defender_cljs.actors.ship.thrust_ship = (function thrust_ship(){var pred__5315 = cljs.core._EQ_;var expr__5316 = cljs.core.deref.call(null,defender_cljs.actors.ship.ship_direction);if(cljs.core.truth_(pred__5315.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__5316)))
{return defender_cljs.actor.set_acceleration_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- defender_cljs.actors.ship.ship_thrust_speed),(0),(0)], null));
} else
{if(cljs.core.truth_(pred__5315.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__5316)))
{return defender_cljs.actor.set_acceleration_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender_cljs.actors.ship.ship_thrust_speed,(0),(0)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5316))));
}
}
});
defender_cljs.actors.ship.stop_ship = (function stop_ship(){return defender_cljs.actor.set_acceleration_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));
});
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"thrust","thrust",651754168)),(function (){return defender_cljs.actors.ship.thrust_ship.call(null);
}));
defender_cljs.events.set_on_keyup.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"thrust","thrust",651754168)),(function (){return defender_cljs.actors.ship.stop_ship.call(null);
}));
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"move-up","move-up",-1153137133)),(function (){return defender_cljs.actor.update_velocity_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),defender_cljs.actors.ship.ship_elevation_speed,(0)], null));
}));
defender_cljs.events.set_on_keyup.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"move-up","move-up",-1153137133)),(function (){var vec__5318 = defender_cljs.actor.get_velocity.call(null,defender_cljs.actors.ship.ship);var x = cljs.core.nth.call(null,vec__5318,(0),null);var _ = cljs.core.nth.call(null,vec__5318,(1),null);var z = cljs.core.nth.call(null,vec__5318,(2),null);return defender_cljs.actor.set_velocity_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),z], null));
}));
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),(function (){return defender_cljs.actor.update_velocity_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- defender_cljs.actors.ship.ship_elevation_speed),(0)], null));
}));
defender_cljs.events.set_on_keyup.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),(function (){var vec__5319 = defender_cljs.actor.get_velocity.call(null,defender_cljs.actors.ship.ship);var x = cljs.core.nth.call(null,vec__5319,(0),null);var _ = cljs.core.nth.call(null,vec__5319,(1),null);var z = cljs.core.nth.call(null,vec__5319,(2),null);return defender_cljs.actor.set_velocity_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),z], null));
}));
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"switch-directions","switch-directions",-212525499)),(function (){defender_cljs.actors.ship.switch_ship_direction.call(null);
if(cljs.core.truth_(cljs.core.deref.call(null,defender_cljs.events.keys_pressed).call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"thrust","thrust",651754168)))))
{defender_cljs.actors.ship.thrust_ship.call(null);
} else
{defender_cljs.actors.ship.stop_ship.call(null);
}
return defender_cljs.canvas.object.scale_BANG_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(defender_cljs.actors.ship.ship),(-1),(1));
}));
defender_cljs.actors.ship.ship_fire_speed = (2000);
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"fire","fire",-144730624)),(function (){var vec__5320 = defender_cljs.actor.get_position.call(null,defender_cljs.actors.ship.ship);var px = cljs.core.nth.call(null,vec__5320,(0),null);var py = cljs.core.nth.call(null,vec__5320,(1),null);var _ = cljs.core.nth.call(null,vec__5320,(2),null);var vec__5321 = defender_cljs.actor.get_velocity.call(null,defender_cljs.actors.ship.ship);var vx = cljs.core.nth.call(null,vec__5321,(0),null);var ___$1 = cljs.core.nth.call(null,vec__5321,(1),null);var ___$2 = cljs.core.nth.call(null,vec__5321,(2),null);var vx__$1 = (function (){var pred__5322 = cljs.core._EQ_;var expr__5323 = cljs.core.deref.call(null,defender_cljs.actors.ship.ship_direction);if(cljs.core.truth_(pred__5322.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__5323)))
{return (- ((- vx) + defender_cljs.actors.ship.ship_fire_speed));
} else
{if(cljs.core.truth_(pred__5322.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__5323)))
{return (vx + defender_cljs.actors.ship.ship_fire_speed);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5323))));
}
}
})();return defender_cljs.actors.projectile.fire_projectile.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ship-phasor","ship-phasor",-292339647),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx__$1,(0),(0)], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),0.3);
}));
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"bomb","bomb",-1302543521)),(function (){return defender_cljs.utils.log.call(null,"Bomb!");
}));
defender_cljs.events.set_on_keydown.call(null,defender_cljs.constants.keyboard_config.call(null,new cljs.core.Keyword(null,"hyperspace","hyperspace",-58515474)),(function (){return defender_cljs.utils.log.call(null,"Hyperspace!");
}));

//# sourceMappingURL=ship.js.map