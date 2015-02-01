// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.systems.scene_bounds');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.constants');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.utils');
defender_cljs.systems.scene_bounds.get_top_bound = (function (){var method_table__13426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__13427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__13428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__13429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__13430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("get-top-bound",((function (method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__){
return (function (actor){return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));
});})(method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13430__auto__,method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__));
})();
defender_cljs.systems.scene_bounds.get_bottom_bound = (function (){var method_table__13426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__13427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__13428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__13429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__13430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("get-bottom-bound",((function (method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__){
return (function (actor){return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));
});})(method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13430__auto__,method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__));
})();
cljs.core._add_method.call(null,defender_cljs.systems.scene_bounds.get_top_bound,new cljs.core.Keyword(null,"aabb","aabb",-772432582),(function (actor){var map__21158 = cljs.core.deref.call(null,actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508)));var map__21158__$1 = ((cljs.core.seq_QMARK_.call(null,map__21158))?cljs.core.apply.call(null,cljs.core.hash_map,map__21158):map__21158);var height = cljs.core.get.call(null,map__21158__$1,new cljs.core.Keyword(null,"height","height",1025178622));var vec__21159 = defender_cljs.actor.get_position.call(null,actor);var _ = cljs.core.nth.call(null,vec__21159,(0),null);var y = cljs.core.nth.call(null,vec__21159,(1),null);var ___$1 = cljs.core.nth.call(null,vec__21159,(2),null);return (y + (height / (2)));
}));
cljs.core._add_method.call(null,defender_cljs.systems.scene_bounds.get_bottom_bound,new cljs.core.Keyword(null,"aabb","aabb",-772432582),(function (actor){var map__21160 = cljs.core.deref.call(null,actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508)));var map__21160__$1 = ((cljs.core.seq_QMARK_.call(null,map__21160))?cljs.core.apply.call(null,cljs.core.hash_map,map__21160):map__21160);var height = cljs.core.get.call(null,map__21160__$1,new cljs.core.Keyword(null,"height","height",1025178622));var vec__21161 = defender_cljs.actor.get_position.call(null,actor);var _ = cljs.core.nth.call(null,vec__21161,(0),null);var y = cljs.core.nth.call(null,vec__21161,(1),null);var ___$1 = cljs.core.nth.call(null,vec__21161,(2),null);return (y - (height / (2)));
}));
defender_cljs.systems.scene_bounds.correct_actor_bounds = (function correct_actor_bounds(actor){if((defender_cljs.systems.scene_bounds.get_top_bound.call(null,actor) > ((defender_cljs.constants.view_height - defender_cljs.constants.top_overlay_height) - (5))))
{defender_cljs.utils.log.call(null,"past top bound!",actor,defender_cljs.systems.scene_bounds.get_top_bound.call(null,actor));
return defender_cljs.actor.add_force_BANG_.call(null,actor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-100),(0)], null));
} else
{if((defender_cljs.systems.scene_bounds.get_bottom_bound.call(null,actor) < (0)))
{defender_cljs.utils.log.call(null,"past bottom bound!",actor,defender_cljs.systems.scene_bounds.get_bottom_bound.call(null,actor));
return defender_cljs.actor.add_force_BANG_.call(null,actor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(0)], null));
} else
{return null;
}
}
});
defender_cljs.systems.scene_bounds.maintain_actor_bounds = (function maintain_actor_bounds(){var actors = cljs.core.deref.call(null,defender_cljs.canvas.scene.main.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565)));var actors__$1 = cljs.core.filter.call(null,((function (actors){
return (function (p1__21162_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__21162_SHARP_),"camera");
});})(actors))
,actors);var seq__21167 = cljs.core.seq.call(null,actors__$1);var chunk__21168 = null;var count__21169 = (0);var i__21170 = (0);while(true){
if((i__21170 < count__21169))
{var actor = cljs.core._nth.call(null,chunk__21168,i__21170);defender_cljs.systems.scene_bounds.correct_actor_bounds.call(null,actor);
{
var G__21171 = seq__21167;
var G__21172 = chunk__21168;
var G__21173 = count__21169;
var G__21174 = (i__21170 + (1));
seq__21167 = G__21171;
chunk__21168 = G__21172;
count__21169 = G__21173;
i__21170 = G__21174;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21167);if(temp__4126__auto__)
{var seq__21167__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21167__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__21167__$1);{
var G__21175 = cljs.core.chunk_rest.call(null,seq__21167__$1);
var G__21176 = c__13316__auto__;
var G__21177 = cljs.core.count.call(null,c__13316__auto__);
var G__21178 = (0);
seq__21167 = G__21175;
chunk__21168 = G__21176;
count__21169 = G__21177;
i__21170 = G__21178;
continue;
}
} else
{var actor = cljs.core.first.call(null,seq__21167__$1);defender_cljs.systems.scene_bounds.correct_actor_bounds.call(null,actor);
{
var G__21179 = cljs.core.next.call(null,seq__21167__$1);
var G__21180 = null;
var G__21181 = (0);
var G__21182 = (0);
seq__21167 = G__21179;
chunk__21168 = G__21180;
count__21169 = G__21181;
i__21170 = G__21182;
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

//# sourceMappingURL=scene_bounds.js.map