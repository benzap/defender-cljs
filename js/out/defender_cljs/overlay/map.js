// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.overlay.map');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('defender_cljs.overlay.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.geometry');
goog.require('clojure.set');
goog.require('defender_cljs.overlay.core');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.geometry');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.canvas.camera');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.camera');
/**
* List of map points, with the key being the actor, and the value
* being the point geometry
*/
defender_cljs.overlay.map.map_points = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
defender_cljs.overlay.map.create_map_point = (function (){var method_table__13426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__13427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__13428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__13429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__13430__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create-map-point",((function (method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__){
return (function (actor){if(cljs.core.some_QMARK_.call(null,actor))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),actor.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null);
} else
{return null;
}
});})(method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__))
,null,hierarchy__13430__auto__,method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__));
})();
cljs.core._add_method.call(null,defender_cljs.overlay.map.create_map_point,null,(function (actor){return null;
}));
cljs.core._add_method.call(null,defender_cljs.overlay.map.create_map_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"ship","ship",197863473)], null),(function (actor){return defender_cljs.canvas.geometry.square.call(null,new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
}));
cljs.core._add_method.call(null,defender_cljs.overlay.map.create_map_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"lander","lander",439860228)], null),(function (actor){return defender_cljs.canvas.geometry.square.call(null,new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"color","color",1011675173),(3407667));
}));
/**
* @param {...*} var_args
*/
defender_cljs.overlay.map.add_map_point_BANG_ = (function() { 
var add_map_point_BANG___delegate = function (actor,p__20604){var map__20606 = p__20604;var map__20606__$1 = ((cljs.core.seq_QMARK_.call(null,map__20606))?cljs.core.apply.call(null,cljs.core.hash_map,map__20606):map__20606);var color = cljs.core.get.call(null,map__20606__$1,new cljs.core.Keyword(null,"color","color",1011675173),(11206570));var map_point = defender_cljs.overlay.map.create_map_point.call(null,actor);if(cljs.core.some_QMARK_.call(null,map_point))
{defender_cljs.canvas.scene.add_object_BANG_.call(null,defender_cljs.canvas.scene.hud,map_point);
cljs.core.swap_BANG_.call(null,defender_cljs.overlay.map.map_points,cljs.core.assoc,actor,map_point);
} else
{}
return map_point;
};
var add_map_point_BANG_ = function (actor,var_args){
var p__20604 = null;if (arguments.length > 1) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return add_map_point_BANG___delegate.call(this,actor,p__20604);};
add_map_point_BANG_.cljs$lang$maxFixedArity = 1;
add_map_point_BANG_.cljs$lang$applyTo = (function (arglist__20607){
var actor = cljs.core.first(arglist__20607);
var p__20604 = cljs.core.rest(arglist__20607);
return add_map_point_BANG___delegate(actor,p__20604);
});
add_map_point_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_map_point_BANG___delegate;
return add_map_point_BANG_;
})()
;
/**
* Removes the map point. If the stored value is nil, nothing is done
*/
defender_cljs.overlay.map.remove_map_point_BANG_ = (function remove_map_point_BANG_(actor){if(cljs.core.some_QMARK_.call(null,cljs.core.deref.call(null,defender_cljs.overlay.map.map_points).call(null,actor)))
{defender_cljs.canvas.scene.remove_object_BANG_.call(null,defender_cljs.canvas.scene.hud,cljs.core.deref.call(null,defender_cljs.overlay.map.map_points).call(null,actor));
return cljs.core.swap_BANG_.call(null,defender_cljs.overlay.map.map_points,cljs.core.dissoc,actor);
} else
{return null;
}
});
defender_cljs.overlay.map.get_actor_list = (function get_actor_list(scene){return cljs.core.deref.call(null,scene.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565)));
});
defender_cljs.overlay.map.width_padding = (0);
defender_cljs.overlay.map.height_padding = (10);
defender_cljs.overlay.map.update_point_position_BANG_ = (function update_point_position_BANG_(actor,point_obj){var bounds = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),defender_cljs.overlay.core.left_bound,new cljs.core.Keyword(null,"right","right",-452581833),defender_cljs.overlay.core.right_bound,new cljs.core.Keyword(null,"top","top",-1856271961),(defender_cljs.overlay.core.top_bound - defender_cljs.overlay.map.height_padding),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(defender_cljs.overlay.core.bottom_bound + defender_cljs.overlay.map.height_padding),new cljs.core.Keyword(null,"width","width",-384071477),(defender_cljs.overlay.core.right_bound - defender_cljs.overlay.core.left_bound),new cljs.core.Keyword(null,"height","height",1025178622),(defender_cljs.overlay.core.top_bound - defender_cljs.overlay.core.bottom_bound),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(((defender_cljs.overlay.core.right_bound - defender_cljs.overlay.core.left_bound) / (2)) + defender_cljs.overlay.core.left_bound),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(((defender_cljs.overlay.core.top_bound - defender_cljs.overlay.core.bottom_bound) / (2)) + defender_cljs.overlay.core.bottom_bound)], null);var camera_pos = defender_cljs.actor.get_position.call(null,defender_cljs.canvas.camera.main_camera);var actor_pos = defender_cljs.actor.get_position.call(null,actor);var relative_pos = cljs.core.map.call(null,cljs.core._,actor_pos,camera_pos);var vec__20609 = relative_pos;var relx = cljs.core.nth.call(null,vec__20609,(0),null);var rely = cljs.core.nth.call(null,vec__20609,(1),null);var _ = cljs.core.nth.call(null,vec__20609,(2),null);var rely__$1 = (rely - (defender_cljs.constants.view_height / (2)));var mapx = ((relx * (bounds.call(null,new cljs.core.Keyword(null,"width","width",-384071477)) / defender_cljs.constants.map_width)) + bounds.call(null,new cljs.core.Keyword(null,"center-x","center-x",2109659472)));var mapy = ((rely__$1 * (bounds.call(null,new cljs.core.Keyword(null,"height","height",1025178622)) / (defender_cljs.constants.view_height - defender_cljs.constants.top_overlay_height))) + bounds.call(null,new cljs.core.Keyword(null,"center-y","center-y",-233780987)));return defender_cljs.canvas.object.set_position_BANG_.call(null,point_obj,mapx,mapy,(-5));
});
defender_cljs.overlay.map.update_map_point_listing = (function update_map_point_listing(scene){var seq__20624_20638 = cljs.core.seq.call(null,defender_cljs.overlay.map.get_actor_list.call(null,defender_cljs.canvas.scene.main));var chunk__20625_20639 = null;var count__20626_20640 = (0);var i__20627_20641 = (0);while(true){
if((i__20627_20641 < count__20626_20640))
{var actor_20642 = cljs.core._nth.call(null,chunk__20625_20639,i__20627_20641);if((cljs.core.deref.call(null,defender_cljs.overlay.map.map_points).call(null,actor_20642) == null))
{defender_cljs.overlay.map.add_map_point_BANG_.call(null,actor_20642);
} else
{}
{
var G__20643 = seq__20624_20638;
var G__20644 = chunk__20625_20639;
var G__20645 = count__20626_20640;
var G__20646 = (i__20627_20641 + (1));
seq__20624_20638 = G__20643;
chunk__20625_20639 = G__20644;
count__20626_20640 = G__20645;
i__20627_20641 = G__20646;
continue;
}
} else
{var temp__4126__auto___20647 = cljs.core.seq.call(null,seq__20624_20638);if(temp__4126__auto___20647)
{var seq__20624_20648__$1 = temp__4126__auto___20647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20624_20648__$1))
{var c__13316__auto___20649 = cljs.core.chunk_first.call(null,seq__20624_20648__$1);{
var G__20650 = cljs.core.chunk_rest.call(null,seq__20624_20648__$1);
var G__20651 = c__13316__auto___20649;
var G__20652 = cljs.core.count.call(null,c__13316__auto___20649);
var G__20653 = (0);
seq__20624_20638 = G__20650;
chunk__20625_20639 = G__20651;
count__20626_20640 = G__20652;
i__20627_20641 = G__20653;
continue;
}
} else
{var actor_20654 = cljs.core.first.call(null,seq__20624_20648__$1);if((cljs.core.deref.call(null,defender_cljs.overlay.map.map_points).call(null,actor_20654) == null))
{defender_cljs.overlay.map.add_map_point_BANG_.call(null,actor_20654);
} else
{}
{
var G__20655 = cljs.core.next.call(null,seq__20624_20648__$1);
var G__20656 = null;
var G__20657 = (0);
var G__20658 = (0);
seq__20624_20638 = G__20655;
chunk__20625_20639 = G__20656;
count__20626_20640 = G__20657;
i__20627_20641 = G__20658;
continue;
}
}
} else
{}
}
break;
}
var map_actors_20659 = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,defender_cljs.overlay.map.map_points)));var scene_actors_20660 = cljs.core.set.call(null,defender_cljs.overlay.map.get_actor_list.call(null,defender_cljs.canvas.scene.main));var seq__20628_20661 = cljs.core.seq.call(null,clojure.set.difference.call(null,map_actors_20659,scene_actors_20660));var chunk__20629_20662 = null;var count__20630_20663 = (0);var i__20631_20664 = (0);while(true){
if((i__20631_20664 < count__20630_20663))
{var actor_20665 = cljs.core._nth.call(null,chunk__20629_20662,i__20631_20664);defender_cljs.overlay.map.remove_map_point_BANG_.call(null,actor_20665);
{
var G__20666 = seq__20628_20661;
var G__20667 = chunk__20629_20662;
var G__20668 = count__20630_20663;
var G__20669 = (i__20631_20664 + (1));
seq__20628_20661 = G__20666;
chunk__20629_20662 = G__20667;
count__20630_20663 = G__20668;
i__20631_20664 = G__20669;
continue;
}
} else
{var temp__4126__auto___20670 = cljs.core.seq.call(null,seq__20628_20661);if(temp__4126__auto___20670)
{var seq__20628_20671__$1 = temp__4126__auto___20670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20628_20671__$1))
{var c__13316__auto___20672 = cljs.core.chunk_first.call(null,seq__20628_20671__$1);{
var G__20673 = cljs.core.chunk_rest.call(null,seq__20628_20671__$1);
var G__20674 = c__13316__auto___20672;
var G__20675 = cljs.core.count.call(null,c__13316__auto___20672);
var G__20676 = (0);
seq__20628_20661 = G__20673;
chunk__20629_20662 = G__20674;
count__20630_20663 = G__20675;
i__20631_20664 = G__20676;
continue;
}
} else
{var actor_20677 = cljs.core.first.call(null,seq__20628_20671__$1);defender_cljs.overlay.map.remove_map_point_BANG_.call(null,actor_20677);
{
var G__20678 = cljs.core.next.call(null,seq__20628_20671__$1);
var G__20679 = null;
var G__20680 = (0);
var G__20681 = (0);
seq__20628_20661 = G__20678;
chunk__20629_20662 = G__20679;
count__20630_20663 = G__20680;
i__20631_20664 = G__20681;
continue;
}
}
} else
{}
}
break;
}
var seq__20632 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.overlay.map.map_points));var chunk__20633 = null;var count__20634 = (0);var i__20635 = (0);while(true){
if((i__20635 < count__20634))
{var vec__20636 = cljs.core._nth.call(null,chunk__20633,i__20635);var actor = cljs.core.nth.call(null,vec__20636,(0),null);var point_obj = cljs.core.nth.call(null,vec__20636,(1),null);defender_cljs.overlay.map.update_point_position_BANG_.call(null,actor,point_obj);
{
var G__20682 = seq__20632;
var G__20683 = chunk__20633;
var G__20684 = count__20634;
var G__20685 = (i__20635 + (1));
seq__20632 = G__20682;
chunk__20633 = G__20683;
count__20634 = G__20684;
i__20635 = G__20685;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20632);if(temp__4126__auto__)
{var seq__20632__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20632__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__20632__$1);{
var G__20686 = cljs.core.chunk_rest.call(null,seq__20632__$1);
var G__20687 = c__13316__auto__;
var G__20688 = cljs.core.count.call(null,c__13316__auto__);
var G__20689 = (0);
seq__20632 = G__20686;
chunk__20633 = G__20687;
count__20634 = G__20688;
i__20635 = G__20689;
continue;
}
} else
{var vec__20637 = cljs.core.first.call(null,seq__20632__$1);var actor = cljs.core.nth.call(null,vec__20637,(0),null);var point_obj = cljs.core.nth.call(null,vec__20637,(1),null);defender_cljs.overlay.map.update_point_position_BANG_.call(null,actor,point_obj);
{
var G__20690 = cljs.core.next.call(null,seq__20632__$1);
var G__20691 = null;
var G__20692 = (0);
var G__20693 = (0);
seq__20632 = G__20690;
chunk__20633 = G__20691;
count__20634 = G__20692;
i__20635 = G__20693;
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
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"map-updater","map-updater",1613880974),(function (){if(typeof defender_cljs.overlay.map.t20694 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.overlay.map.t20694 = (function (meta20695){
this.meta20695 = meta20695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.overlay.map.t20694.cljs$lang$type = true;
defender_cljs.overlay.map.t20694.cljs$lang$ctorStr = "defender-cljs.overlay.map/t20694";
defender_cljs.overlay.map.t20694.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"defender-cljs.overlay.map/t20694");
});
defender_cljs.overlay.map.t20694.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.overlay.map.t20694.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;return defender_cljs.overlay.map.update_map_point_listing.call(null,defender_cljs.canvas.scene.main);
});
defender_cljs.overlay.map.t20694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20696){var self__ = this;
var _20696__$1 = this;return self__.meta20695;
});
defender_cljs.overlay.map.t20694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20696,meta20695__$1){var self__ = this;
var _20696__$1 = this;return (new defender_cljs.overlay.map.t20694(meta20695__$1));
});
defender_cljs.overlay.map.__GT_t20694 = (function __GT_t20694(meta20695){return (new defender_cljs.overlay.map.t20694(meta20695));
});
}
return (new defender_cljs.overlay.map.t20694(null));
})());

//# sourceMappingURL=map.js.map