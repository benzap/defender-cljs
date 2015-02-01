// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.core');
goog.require('cljs.core');
goog.require('defender_cljs.actors.ship');
goog.require('defender_cljs.enemies.lander');
goog.require('defender_cljs.systems.scene_bounds');
goog.require('defender_cljs.actors.projectile');
goog.require('defender_cljs.systems.scene_tracking');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actors.projectile');
goog.require('defender_cljs.overlay.map');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.events');
goog.require('defender_cljs.enemies.lander');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.systems.scene_bounds');
goog.require('defender_cljs.systems.scene_tracking');
goog.require('defender_cljs.overlay.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.events');
goog.require('defender_cljs.physics');
goog.require('defender_cljs.overlay.map');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.canvas.camera');
goog.require('defender_cljs.overlay.core');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.physics');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.actors.ship');
goog.require('defender_cljs.canvas.camera');
defender_cljs.canvas.core.dom = document.getElementById("app");
defender_cljs.canvas.core.stats = (new Stats());
(defender_cljs.canvas.core.stats.domElement.style["position"] = "absolute");
(defender_cljs.canvas.core.stats.domElement.style["right"] = "0px");
(defender_cljs.canvas.core.stats.domElement.style["top"] = "0px");
defender_cljs.canvas.core.width = defender_cljs.canvas.core.dom.clientWidth;
defender_cljs.canvas.core.height = defender_cljs.canvas.core.dom.clientHeight;
defender_cljs.canvas.core.renderer = (new THREE.WebGLRenderer());
defender_cljs.canvas.core.renderer.setSize(defender_cljs.canvas.core.width,defender_cljs.canvas.core.height);
defender_cljs.actor.set_position_BANG_.call(null,defender_cljs.actors.ship.ship,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(defender_cljs.constants.map_width / (2)),(defender_cljs.constants.view_height / (2)),(0)], null));
defender_cljs.canvas.core.gen = (function gen(){var lander = defender_cljs.enemies.lander.make_lander.call(null);defender_cljs.canvas.scene.add_actor_BANG_.call(null,defender_cljs.canvas.scene.main,lander);
return defender_cljs.actor.set_position_BANG_.call(null,lander,defender_cljs.utils.get_random_location.call(null));
});
var seq__5436_5440 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));var chunk__5437_5441 = null;var count__5438_5442 = (0);var i__5439_5443 = (0);while(true){
if((i__5439_5443 < count__5438_5442))
{var i_5444 = cljs.core._nth.call(null,chunk__5437_5441,i__5439_5443);defender_cljs.canvas.core.gen.call(null);
{
var G__5445 = seq__5436_5440;
var G__5446 = chunk__5437_5441;
var G__5447 = count__5438_5442;
var G__5448 = (i__5439_5443 + (1));
seq__5436_5440 = G__5445;
chunk__5437_5441 = G__5446;
count__5438_5442 = G__5447;
i__5439_5443 = G__5448;
continue;
}
} else
{var temp__4126__auto___5449 = cljs.core.seq.call(null,seq__5436_5440);if(temp__4126__auto___5449)
{var seq__5436_5450__$1 = temp__4126__auto___5449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5436_5450__$1))
{var c__4410__auto___5451 = cljs.core.chunk_first.call(null,seq__5436_5450__$1);{
var G__5452 = cljs.core.chunk_rest.call(null,seq__5436_5450__$1);
var G__5453 = c__4410__auto___5451;
var G__5454 = cljs.core.count.call(null,c__4410__auto___5451);
var G__5455 = (0);
seq__5436_5440 = G__5452;
chunk__5437_5441 = G__5453;
count__5438_5442 = G__5454;
i__5439_5443 = G__5455;
continue;
}
} else
{var i_5456 = cljs.core.first.call(null,seq__5436_5450__$1);defender_cljs.canvas.core.gen.call(null);
{
var G__5457 = cljs.core.next.call(null,seq__5436_5450__$1);
var G__5458 = null;
var G__5459 = (0);
var G__5460 = (0);
seq__5436_5440 = G__5457;
chunk__5437_5441 = G__5458;
count__5438_5442 = G__5459;
i__5439_5443 = G__5460;
continue;
}
}
} else
{}
}
break;
}
var G__5461_5462 = defender_cljs.canvas.scene.main;defender_cljs.canvas.scene.add_actor_BANG_.call(null,G__5461_5462,defender_cljs.canvas.camera.main_camera);
defender_cljs.canvas.scene.add_actor_BANG_.call(null,G__5461_5462,defender_cljs.actors.ship.ship);
var G__5463_5464 = defender_cljs.canvas.scene.hud;defender_cljs.canvas.scene.add_actor_BANG_.call(null,G__5463_5464,defender_cljs.canvas.camera.hud_camera);
(defender_cljs.canvas.core.dom["innerHTML"] = "");
defender_cljs.canvas.core.dom.appendChild(defender_cljs.canvas.core.renderer.domElement);
defender_cljs.canvas.core.dom.appendChild(defender_cljs.canvas.core.stats.domElement);
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"fixed-width-map","fixed-width-map",-621177781),(function (){if(typeof defender_cljs.canvas.core.t5465 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.canvas.core.t5465 = (function (meta5466){
this.meta5466 = meta5466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.canvas.core.t5465.cljs$lang$type = true;
defender_cljs.canvas.core.t5465.cljs$lang$ctorStr = "defender-cljs.canvas.core/t5465";
defender_cljs.canvas.core.t5465.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"defender-cljs.canvas.core/t5465");
});
defender_cljs.canvas.core.t5465.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.canvas.core.t5465.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;return defender_cljs.systems.scene_tracking.generate_fixed_width_map.call(null);
});
defender_cljs.canvas.core.t5465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5467){var self__ = this;
var _5467__$1 = this;return self__.meta5466;
});
defender_cljs.canvas.core.t5465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5467,meta5466__$1){var self__ = this;
var _5467__$1 = this;return (new defender_cljs.canvas.core.t5465(meta5466__$1));
});
defender_cljs.canvas.core.__GT_t5465 = (function __GT_t5465(meta5466){return (new defender_cljs.canvas.core.t5465(meta5466));
});
}
return (new defender_cljs.canvas.core.t5465(null));
})());
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"game-bounds","game-bounds",-1943741051),(function (){if(typeof defender_cljs.canvas.core.t5468 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.canvas.core.t5468 = (function (meta5469){
this.meta5469 = meta5469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.canvas.core.t5468.cljs$lang$type = true;
defender_cljs.canvas.core.t5468.cljs$lang$ctorStr = "defender-cljs.canvas.core/t5468";
defender_cljs.canvas.core.t5468.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"defender-cljs.canvas.core/t5468");
});
defender_cljs.canvas.core.t5468.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.canvas.core.t5468.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;return defender_cljs.systems.scene_bounds.maintain_actor_bounds.call(null);
});
defender_cljs.canvas.core.t5468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5470){var self__ = this;
var _5470__$1 = this;return self__.meta5469;
});
defender_cljs.canvas.core.t5468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5470,meta5469__$1){var self__ = this;
var _5470__$1 = this;return (new defender_cljs.canvas.core.t5468(meta5469__$1));
});
defender_cljs.canvas.core.__GT_t5468 = (function __GT_t5468(meta5469){return (new defender_cljs.canvas.core.t5468(meta5469));
});
}
return (new defender_cljs.canvas.core.t5468(null));
})());
defender_cljs.canvas.core.animate = (function animate(){defender_cljs.canvas.core.stats.begin();
defender_cljs.canvas.system.run_systems.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delta","delta",108939957),((1) / 60.0)], null));
defender_cljs.physics.update_scene.call(null,defender_cljs.canvas.scene.main,((1) / 60.0));
defender_cljs.physics.update_scene.call(null,defender_cljs.canvas.scene.hud,((1) / 60.0));
return defender_cljs.canvas.core.stats.end();
});
defender_cljs.canvas.core.render = (function render(){window.requestAnimationFrame(render);
defender_cljs.canvas.core.renderer.render(new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.scene.main),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.camera.main_camera));
(defender_cljs.canvas.core.renderer["autoClear"] = false);
defender_cljs.canvas.core.renderer.render(new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.scene.hud),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.camera.hud_camera));
(defender_cljs.canvas.core.renderer["autoClear"] = true);
return defender_cljs.canvas.core.animate.call(null);
});
defender_cljs.overlay.core.init.call(null,new cljs.core.Keyword(null,"scene-instance","scene-instance",-1336333300).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.scene.hud));
defender_cljs.canvas.core.render.call(null);
defender_cljs.events.set_on_keydown.call(null,new cljs.core.Keyword(null,"p","p",151049309),(function (){defender_cljs.utils.log.call(null,"firing projectile");
return defender_cljs.actors.projectile.fire_projectile.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3500),(375),(0)], null));
}));

//# sourceMappingURL=core.js.map