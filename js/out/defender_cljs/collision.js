// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.collision');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.utils');
defender_cljs.collision.check_collision = (function (){var method_table__13426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__13427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__13428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__13429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__13430__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("check-collision",((function (method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__){
return (function (first_actor,second_actor){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,first_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508)))),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,second_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))))], null);
});})(method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__,hierarchy__13430__auto__))
,null,hierarchy__13430__auto__,method_table__13426__auto__,prefer_table__13427__auto__,method_cache__13428__auto__,cached_hierarchy__13429__auto__));
})();
cljs.core._add_method.call(null,defender_cljs.collision.check_collision,null,(function (first_actor,second_actor){return null;
}));
cljs.core._add_method.call(null,defender_cljs.collision.check_collision,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aabb","aabb",-772432582),new cljs.core.Keyword(null,"aabb","aabb",-772432582)], null),(function (first_actor,second_actor){var vec__20703 = defender_cljs.actor.get_position.call(null,first_actor);var cx1 = cljs.core.nth.call(null,vec__20703,(0),null);var cy1 = cljs.core.nth.call(null,vec__20703,(1),null);var _ = cljs.core.nth.call(null,vec__20703,(2),null);var w1 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,first_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));var h1 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,first_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));var x1 = (cx1 - (w1 / (2)));var y1 = (cy1 - (h1 / (2)));var vec__20704 = defender_cljs.actor.get_position.call(null,second_actor);var cx2 = cljs.core.nth.call(null,vec__20704,(0),null);var cy2 = cljs.core.nth.call(null,vec__20704,(1),null);var ___$1 = cljs.core.nth.call(null,vec__20704,(2),null);var w2 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,second_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));var h2 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,second_actor.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508))));var x2 = (cx2 - (w2 / (2)));var y2 = (cy2 - (h2 / (2)));if((cljs.core.not_EQ_.call(null,first_actor,second_actor)) && ((x1 < (x2 + w2))) && ((x2 < (x1 + w1))) && ((y1 < (y2 + h2))) && ((y2 < (y1 + h1))))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),first_actor,new cljs.core.Keyword(null,"second","second",-444702010),second_actor], null);
} else
{return null;
}
}));
defender_cljs.collision.generate_collision_listing = (function generate_collision_listing(from_list,to_list){return cljs.core.filter.call(null,cljs.core.some_QMARK_,(function (){var iter__13285__auto__ = (function iter__20711(s__20712){return (new cljs.core.LazySeq(null,(function (){var s__20712__$1 = s__20712;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20712__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var from = cljs.core.first.call(null,xs__4624__auto__);var iterys__13281__auto__ = ((function (s__20712__$1,from,xs__4624__auto__,temp__4126__auto__){
return (function iter__20713(s__20714){return (new cljs.core.LazySeq(null,((function (s__20712__$1,from,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__20714__$1 = s__20714;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20714__$1);if(temp__4126__auto____$1)
{var s__20714__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20714__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__20714__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__20716 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__20715 = (0);while(true){
if((i__20715 < size__13284__auto__))
{var to = cljs.core._nth.call(null,c__13283__auto__,i__20715);cljs.core.chunk_append.call(null,b__20716,defender_cljs.collision.check_collision.call(null,from,to));
{
var G__20717 = (i__20715 + (1));
i__20715 = G__20717;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20716),iter__20713.call(null,cljs.core.chunk_rest.call(null,s__20714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20716),null);
}
} else
{var to = cljs.core.first.call(null,s__20714__$2);return cljs.core.cons.call(null,defender_cljs.collision.check_collision.call(null,from,to),iter__20713.call(null,cljs.core.rest.call(null,s__20714__$2)));
}
} else
{return null;
}
break;
}
});})(s__20712__$1,from,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__20712__$1,from,xs__4624__auto__,temp__4126__auto__))
;var fs__13282__auto__ = cljs.core.seq.call(null,iterys__13281__auto__.call(null,to_list));if(fs__13282__auto__)
{return cljs.core.concat.call(null,fs__13282__auto__,iter__20711.call(null,cljs.core.rest.call(null,s__20712__$1)));
} else
{{
var G__20718 = cljs.core.rest.call(null,s__20712__$1);
s__20712__$1 = G__20718;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__13285__auto__.call(null,from_list);
})());
});

//# sourceMappingURL=collision.js.map