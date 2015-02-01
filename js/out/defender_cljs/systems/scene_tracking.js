// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.systems.scene_tracking');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.camera');
goog.require('defender_cljs.canvas.camera');
defender_cljs.systems.scene_tracking.modulus_wrap = (function modulus_wrap(entity_x,camera_x){var xmin = (0);var xmax = defender_cljs.constants.map_width;var local_x = (entity_x - camera_x);if(((local_x > xmax)) || ((local_x < xmin)))
{return (camera_x + cljs.core.mod.call(null,local_x,xmax));
} else
{return entity_x;
}
});
defender_cljs.systems.scene_tracking.generate_fixed_width_map = (function generate_fixed_width_map(){var vec__28670 = defender_cljs.actor.get_position.call(null,defender_cljs.canvas.camera.main_camera);var cam_x = cljs.core.nth.call(null,vec__28670,(0),null);var _ = cljs.core.nth.call(null,vec__28670,(1),null);var ___$1 = cljs.core.nth.call(null,vec__28670,(2),null);var actors = cljs.core.filter.call(null,((function (vec__28670,cam_x,_,___$1){
return (function (actor){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(actor),"camera"))
{return false;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(actor),"ship"))
{return false;
} else
{return true;

}
}
});})(vec__28670,cam_x,_,___$1))
,cljs.core.deref.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.scene.main)));var seq__28671 = cljs.core.seq.call(null,actors);var chunk__28672 = null;var count__28673 = (0);var i__28674 = (0);while(true){
if((i__28674 < count__28673))
{var actor = cljs.core._nth.call(null,chunk__28672,i__28674);var vec__28675_28677 = defender_cljs.actor.get_position.call(null,actor);var entity_x_28678 = cljs.core.nth.call(null,vec__28675_28677,(0),null);var ypos_28679 = cljs.core.nth.call(null,vec__28675_28677,(1),null);var zpos_28680 = cljs.core.nth.call(null,vec__28675_28677,(2),null);var entity_x_28681__$1 = defender_cljs.systems.scene_tracking.modulus_wrap.call(null,entity_x_28678,(cam_x - (defender_cljs.constants.map_width / (2))));defender_cljs.actor.set_position_BANG_.call(null,actor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_x_28681__$1,ypos_28679,zpos_28680], null));
{
var G__28682 = seq__28671;
var G__28683 = chunk__28672;
var G__28684 = count__28673;
var G__28685 = (i__28674 + (1));
seq__28671 = G__28682;
chunk__28672 = G__28683;
count__28673 = G__28684;
i__28674 = G__28685;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28671);if(temp__4126__auto__)
{var seq__28671__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28671__$1))
{var c__13356__auto__ = cljs.core.chunk_first.call(null,seq__28671__$1);{
var G__28686 = cljs.core.chunk_rest.call(null,seq__28671__$1);
var G__28687 = c__13356__auto__;
var G__28688 = cljs.core.count.call(null,c__13356__auto__);
var G__28689 = (0);
seq__28671 = G__28686;
chunk__28672 = G__28687;
count__28673 = G__28688;
i__28674 = G__28689;
continue;
}
} else
{var actor = cljs.core.first.call(null,seq__28671__$1);var vec__28676_28690 = defender_cljs.actor.get_position.call(null,actor);var entity_x_28691 = cljs.core.nth.call(null,vec__28676_28690,(0),null);var ypos_28692 = cljs.core.nth.call(null,vec__28676_28690,(1),null);var zpos_28693 = cljs.core.nth.call(null,vec__28676_28690,(2),null);var entity_x_28694__$1 = defender_cljs.systems.scene_tracking.modulus_wrap.call(null,entity_x_28691,(cam_x - (defender_cljs.constants.map_width / (2))));defender_cljs.actor.set_position_BANG_.call(null,actor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_x_28694__$1,ypos_28692,zpos_28693], null));
{
var G__28695 = cljs.core.next.call(null,seq__28671__$1);
var G__28696 = null;
var G__28697 = (0);
var G__28698 = (0);
seq__28671 = G__28695;
chunk__28672 = G__28696;
count__28673 = G__28697;
i__28674 = G__28698;
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

//# sourceMappingURL=scene_tracking.js.map