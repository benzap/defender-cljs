// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.events');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.canvas.scene');
goog.require('defender_cljs.collision');
goog.require('defender_cljs.collision');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.canvas.system');
goog.require('defender_cljs.utils');
defender_cljs.events.keycode_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"u","u",-1156634785)],[(89),(81),(40),(82),(32),(86),(79),(78),(87),(77),(69),(83),(76),(38),(75),(13),(90),(71),(67),(74),(72),(66),(39),(68),(70),(84),(88),(80),(73),(65),(37),(85)]);
defender_cljs.events.keys_pressed = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
defender_cljs.events.set_on_keydown = (function set_on_keydown(key,callback){var keycode = defender_cljs.events.keycode_map.call(null,key);var callback_wrapper = ((function (keycode){
return (function (event){var event_keycode = event.keyCode;if((cljs.core._EQ_.call(null,keycode,event_keycode)) && (cljs.core.not.call(null,key.call(null,cljs.core.deref.call(null,defender_cljs.events.keys_pressed)))))
{callback.call(null);
return cljs.core.swap_BANG_.call(null,defender_cljs.events.keys_pressed,cljs.core.conj,key);
} else
{return null;
}
});})(keycode))
;var keyup_listener = ((function (keycode,callback_wrapper){
return (function (event){var event_keycode = event.keyCode;if(cljs.core._EQ_.call(null,keycode,event_keycode))
{return cljs.core.swap_BANG_.call(null,defender_cljs.events.keys_pressed,cljs.core.disj,key);
} else
{return null;
}
});})(keycode,callback_wrapper))
;document.addEventListener("keydown",callback_wrapper);
return document.addEventListener("keyup",keyup_listener);
});
defender_cljs.events.set_on_keyup = (function set_on_keyup(key,callback){var keycode = defender_cljs.events.keycode_map.call(null,key);var callback_wrapper = ((function (keycode){
return (function (event){var event_keycode = event.keyCode;if(cljs.core._EQ_.call(null,keycode,event_keycode))
{return callback.call(null);
} else
{return null;
}
});})(keycode))
;return document.addEventListener("keyup",callback_wrapper);
});
defender_cljs.events.timed_events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
defender_cljs.events.timed_id = cljs.core.atom.call(null,(0));
defender_cljs.events.timer_clock = cljs.core.atom.call(null,0.0);
defender_cljs.events.add_timed_event_BANG_ = (function add_timed_event_BANG_(time,func){cljs.core.swap_BANG_.call(null,defender_cljs.events.timed_events,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,defender_cljs.events.timed_id),new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"time","time",1385887882),(cljs.core.deref.call(null,defender_cljs.events.timer_clock) + time)], null));
return cljs.core.swap_BANG_.call(null,defender_cljs.events.timed_id,cljs.core.inc);
});
defender_cljs.events.remove_timed_event_BANG_ = (function remove_timed_event_BANG_(id){var events = cljs.core.deref.call(null,defender_cljs.events.timed_events);return cljs.core.reset_BANG_.call(null,defender_cljs.events.timed_events,cljs.core.filter.call(null,((function (events){
return (function (p1__19862_SHARP_){return cljs.core.not_EQ_.call(null,id,p1__19862_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(events))
,events));
});
defender_cljs.events.set_on_timeout = (function set_on_timeout(time_sec,callback){return defender_cljs.events.add_timed_event_BANG_.call(null,time_sec,callback);
});
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"event-timer","event-timer",2147425007),(function (){if(typeof defender_cljs.events.t19863 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.events.t19863 = (function (meta19864){
this.meta19864 = meta19864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.events.t19863.cljs$lang$type = true;
defender_cljs.events.t19863.cljs$lang$ctorStr = "defender-cljs.events/t19863";
defender_cljs.events.t19863.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"defender-cljs.events/t19863");
});
defender_cljs.events.t19863.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.events.t19863.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;var delta = props.call(null,new cljs.core.Keyword(null,"delta","delta",108939957));cljs.core.swap_BANG_.call(null,defender_cljs.events.timer_clock,cljs.core._PLUS_,delta);
var seq__19866 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.events.timed_events));var chunk__19867 = null;var count__19868 = (0);var i__19869 = (0);while(true){
if((i__19869 < count__19868))
{var map__19870 = cljs.core._nth.call(null,chunk__19867,i__19869);var map__19870__$1 = ((cljs.core.seq_QMARK_.call(null,map__19870))?cljs.core.apply.call(null,cljs.core.hash_map,map__19870):map__19870);var time = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"time","time",1385887882));var func = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"func","func",-238706040));var id = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if((cljs.core.deref.call(null,defender_cljs.events.timer_clock) > time))
{func.call(null);
defender_cljs.events.remove_timed_event_BANG_.call(null,id);
} else
{}
{
var G__19872 = seq__19866;
var G__19873 = chunk__19867;
var G__19874 = count__19868;
var G__19875 = (i__19869 + (1));
seq__19866 = G__19872;
chunk__19867 = G__19873;
count__19868 = G__19874;
i__19869 = G__19875;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19866);if(temp__4126__auto__)
{var seq__19866__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19866__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__19866__$1);{
var G__19876 = cljs.core.chunk_rest.call(null,seq__19866__$1);
var G__19877 = c__13316__auto__;
var G__19878 = cljs.core.count.call(null,c__13316__auto__);
var G__19879 = (0);
seq__19866 = G__19876;
chunk__19867 = G__19877;
count__19868 = G__19878;
i__19869 = G__19879;
continue;
}
} else
{var map__19871 = cljs.core.first.call(null,seq__19866__$1);var map__19871__$1 = ((cljs.core.seq_QMARK_.call(null,map__19871))?cljs.core.apply.call(null,cljs.core.hash_map,map__19871):map__19871);var time = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"time","time",1385887882));var func = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"func","func",-238706040));var id = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if((cljs.core.deref.call(null,defender_cljs.events.timer_clock) > time))
{func.call(null);
defender_cljs.events.remove_timed_event_BANG_.call(null,id);
} else
{}
{
var G__19880 = cljs.core.next.call(null,seq__19866__$1);
var G__19881 = null;
var G__19882 = (0);
var G__19883 = (0);
seq__19866 = G__19880;
chunk__19867 = G__19881;
count__19868 = G__19882;
i__19869 = G__19883;
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
defender_cljs.events.t19863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19865){var self__ = this;
var _19865__$1 = this;return self__.meta19864;
});
defender_cljs.events.t19863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19865,meta19864__$1){var self__ = this;
var _19865__$1 = this;return (new defender_cljs.events.t19863(meta19864__$1));
});
defender_cljs.events.__GT_t19863 = (function __GT_t19863(meta19864){return (new defender_cljs.events.t19863(meta19864));
});
}
return (new defender_cljs.events.t19863(null));
})());
defender_cljs.events.collision_handlers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* adding callbacks from an actor trait to another actor
* trait. callback is of the form [first-actor second-actor]
* 
* An actor trait at the time of writing can be :type or :name
* 
* ex. (set-on-collision :from [:name :ship]
* :to [:type :enemy]
* ...
* 
* providing an actor trait of [:all] chooses all actors
* 
* @param {...*} var_args
*/
defender_cljs.events.set_on_collision = (function() { 
var set_on_collision__delegate = function (p__19884){var map__19886 = p__19884;var map__19886__$1 = ((cljs.core.seq_QMARK_.call(null,map__19886))?cljs.core.apply.call(null,cljs.core.hash_map,map__19886):map__19886);var callback = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));var to = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all","all",892129742));var from = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"all","all",892129742));var name = cljs.core.get.call(null,map__19886__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.swap_BANG_.call(null,defender_cljs.events.collision_handlers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"callback","callback",-705136228),callback], null));
};
var set_on_collision = function (var_args){
var p__19884 = null;if (arguments.length > 0) {
  p__19884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_on_collision__delegate.call(this,p__19884);};
set_on_collision.cljs$lang$maxFixedArity = 0;
set_on_collision.cljs$lang$applyTo = (function (arglist__19887){
var p__19884 = cljs.core.seq(arglist__19887);
return set_on_collision__delegate(p__19884);
});
set_on_collision.cljs$core$IFn$_invoke$arity$variadic = set_on_collision__delegate;
return set_on_collision;
})()
;
defender_cljs.events.has_trait_QMARK_ = (function has_trait_QMARK_(actor,p__19888){var vec__19890 = p__19888;var attribute = cljs.core.nth.call(null,vec__19890,(0),null);var value = cljs.core.nth.call(null,vec__19890,(1),null);if(cljs.core._EQ_.call(null,cljs.core.get.call(null,actor,attribute),value))
{return true;
} else
{return null;
}
});
defender_cljs.canvas.system.add_system_BANG_.call(null,new cljs.core.Keyword(null,"collision-system","collision-system",1560877877),(function (){if(typeof defender_cljs.events.t19891 !== 'undefined')
{} else
{
/**
* @constructor
*/
defender_cljs.events.t19891 = (function (meta19892){
this.meta19892 = meta19892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defender_cljs.events.t19891.cljs$lang$type = true;
defender_cljs.events.t19891.cljs$lang$ctorStr = "defender-cljs.events/t19891";
defender_cljs.events.t19891.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"defender-cljs.events/t19891");
});
defender_cljs.events.t19891.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.events.t19891.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;var from_actors = cljs.core.deref.call(null,new cljs.core.Keyword(null,"actor-list","actor-list",-1028074565).cljs$core$IFn$_invoke$arity$1(defender_cljs.canvas.scene.main));var to_actors = from_actors;var collision_listing = defender_cljs.collision.generate_collision_listing.call(null,from_actors,to_actors);var seq__19894 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.events.collision_handlers));var chunk__19899 = null;var count__19900 = (0);var i__19901 = (0);while(true){
if((i__19901 < count__19900))
{var map__19906 = cljs.core._nth.call(null,chunk__19899,i__19901);var map__19906__$1 = ((cljs.core.seq_QMARK_.call(null,map__19906))?cljs.core.apply.call(null,cljs.core.hash_map,map__19906):map__19906);var callback = cljs.core.get.call(null,map__19906__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));var to = cljs.core.get.call(null,map__19906__$1,new cljs.core.Keyword(null,"to","to",192099007));var from = cljs.core.get.call(null,map__19906__$1,new cljs.core.Keyword(null,"from","from",1815293044));var seq__19902_19912 = cljs.core.seq.call(null,collision_listing);var chunk__19903_19913 = null;var count__19904_19914 = (0);var i__19905_19915 = (0);while(true){
if((i__19905_19915 < count__19904_19914))
{var map__19907_19916 = cljs.core._nth.call(null,chunk__19903_19913,i__19905_19915);var map__19907_19917__$1 = ((cljs.core.seq_QMARK_.call(null,map__19907_19916))?cljs.core.apply.call(null,cljs.core.hash_map,map__19907_19916):map__19907_19916);var from_actor_19918 = cljs.core.get.call(null,map__19907_19917__$1,new cljs.core.Keyword(null,"first","first",-644103046));var to_actor_19919 = cljs.core.get.call(null,map__19907_19917__$1,new cljs.core.Keyword(null,"second","second",-444702010));if(cljs.core.truth_((function (){var and__12534__auto__ = defender_cljs.events.has_trait_QMARK_.call(null,from_actor_19918,from);if(cljs.core.truth_(and__12534__auto__))
{return defender_cljs.events.has_trait_QMARK_.call(null,to_actor_19919,to);
} else
{return and__12534__auto__;
}
})()))
{callback.call(null,from_actor_19918,to_actor_19919);
} else
{}
{
var G__19920 = seq__19902_19912;
var G__19921 = chunk__19903_19913;
var G__19922 = count__19904_19914;
var G__19923 = (i__19905_19915 + (1));
seq__19902_19912 = G__19920;
chunk__19903_19913 = G__19921;
count__19904_19914 = G__19922;
i__19905_19915 = G__19923;
continue;
}
} else
{var temp__4126__auto___19924 = cljs.core.seq.call(null,seq__19902_19912);if(temp__4126__auto___19924)
{var seq__19902_19925__$1 = temp__4126__auto___19924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19902_19925__$1))
{var c__13316__auto___19926 = cljs.core.chunk_first.call(null,seq__19902_19925__$1);{
var G__19927 = cljs.core.chunk_rest.call(null,seq__19902_19925__$1);
var G__19928 = c__13316__auto___19926;
var G__19929 = cljs.core.count.call(null,c__13316__auto___19926);
var G__19930 = (0);
seq__19902_19912 = G__19927;
chunk__19903_19913 = G__19928;
count__19904_19914 = G__19929;
i__19905_19915 = G__19930;
continue;
}
} else
{var map__19908_19931 = cljs.core.first.call(null,seq__19902_19925__$1);var map__19908_19932__$1 = ((cljs.core.seq_QMARK_.call(null,map__19908_19931))?cljs.core.apply.call(null,cljs.core.hash_map,map__19908_19931):map__19908_19931);var from_actor_19933 = cljs.core.get.call(null,map__19908_19932__$1,new cljs.core.Keyword(null,"first","first",-644103046));var to_actor_19934 = cljs.core.get.call(null,map__19908_19932__$1,new cljs.core.Keyword(null,"second","second",-444702010));if(cljs.core.truth_((function (){var and__12534__auto__ = defender_cljs.events.has_trait_QMARK_.call(null,from_actor_19933,from);if(cljs.core.truth_(and__12534__auto__))
{return defender_cljs.events.has_trait_QMARK_.call(null,to_actor_19934,to);
} else
{return and__12534__auto__;
}
})()))
{callback.call(null,from_actor_19933,to_actor_19934);
} else
{}
{
var G__19935 = cljs.core.next.call(null,seq__19902_19925__$1);
var G__19936 = null;
var G__19937 = (0);
var G__19938 = (0);
seq__19902_19912 = G__19935;
chunk__19903_19913 = G__19936;
count__19904_19914 = G__19937;
i__19905_19915 = G__19938;
continue;
}
}
} else
{}
}
break;
}
{
var G__19939 = seq__19894;
var G__19940 = chunk__19899;
var G__19941 = count__19900;
var G__19942 = (i__19901 + (1));
seq__19894 = G__19939;
chunk__19899 = G__19940;
count__19900 = G__19941;
i__19901 = G__19942;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19894);if(temp__4126__auto__)
{var seq__19894__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19894__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__19894__$1);{
var G__19943 = cljs.core.chunk_rest.call(null,seq__19894__$1);
var G__19944 = c__13316__auto__;
var G__19945 = cljs.core.count.call(null,c__13316__auto__);
var G__19946 = (0);
seq__19894 = G__19943;
chunk__19899 = G__19944;
count__19900 = G__19945;
i__19901 = G__19946;
continue;
}
} else
{var map__19909 = cljs.core.first.call(null,seq__19894__$1);var map__19909__$1 = ((cljs.core.seq_QMARK_.call(null,map__19909))?cljs.core.apply.call(null,cljs.core.hash_map,map__19909):map__19909);var callback = cljs.core.get.call(null,map__19909__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));var to = cljs.core.get.call(null,map__19909__$1,new cljs.core.Keyword(null,"to","to",192099007));var from = cljs.core.get.call(null,map__19909__$1,new cljs.core.Keyword(null,"from","from",1815293044));var seq__19895_19947 = cljs.core.seq.call(null,collision_listing);var chunk__19896_19948 = null;var count__19897_19949 = (0);var i__19898_19950 = (0);while(true){
if((i__19898_19950 < count__19897_19949))
{var map__19910_19951 = cljs.core._nth.call(null,chunk__19896_19948,i__19898_19950);var map__19910_19952__$1 = ((cljs.core.seq_QMARK_.call(null,map__19910_19951))?cljs.core.apply.call(null,cljs.core.hash_map,map__19910_19951):map__19910_19951);var from_actor_19953 = cljs.core.get.call(null,map__19910_19952__$1,new cljs.core.Keyword(null,"first","first",-644103046));var to_actor_19954 = cljs.core.get.call(null,map__19910_19952__$1,new cljs.core.Keyword(null,"second","second",-444702010));if(cljs.core.truth_((function (){var and__12534__auto__ = defender_cljs.events.has_trait_QMARK_.call(null,from_actor_19953,from);if(cljs.core.truth_(and__12534__auto__))
{return defender_cljs.events.has_trait_QMARK_.call(null,to_actor_19954,to);
} else
{return and__12534__auto__;
}
})()))
{callback.call(null,from_actor_19953,to_actor_19954);
} else
{}
{
var G__19955 = seq__19895_19947;
var G__19956 = chunk__19896_19948;
var G__19957 = count__19897_19949;
var G__19958 = (i__19898_19950 + (1));
seq__19895_19947 = G__19955;
chunk__19896_19948 = G__19956;
count__19897_19949 = G__19957;
i__19898_19950 = G__19958;
continue;
}
} else
{var temp__4126__auto___19959__$1 = cljs.core.seq.call(null,seq__19895_19947);if(temp__4126__auto___19959__$1)
{var seq__19895_19960__$1 = temp__4126__auto___19959__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19895_19960__$1))
{var c__13316__auto___19961 = cljs.core.chunk_first.call(null,seq__19895_19960__$1);{
var G__19962 = cljs.core.chunk_rest.call(null,seq__19895_19960__$1);
var G__19963 = c__13316__auto___19961;
var G__19964 = cljs.core.count.call(null,c__13316__auto___19961);
var G__19965 = (0);
seq__19895_19947 = G__19962;
chunk__19896_19948 = G__19963;
count__19897_19949 = G__19964;
i__19898_19950 = G__19965;
continue;
}
} else
{var map__19911_19966 = cljs.core.first.call(null,seq__19895_19960__$1);var map__19911_19967__$1 = ((cljs.core.seq_QMARK_.call(null,map__19911_19966))?cljs.core.apply.call(null,cljs.core.hash_map,map__19911_19966):map__19911_19966);var from_actor_19968 = cljs.core.get.call(null,map__19911_19967__$1,new cljs.core.Keyword(null,"first","first",-644103046));var to_actor_19969 = cljs.core.get.call(null,map__19911_19967__$1,new cljs.core.Keyword(null,"second","second",-444702010));if(cljs.core.truth_((function (){var and__12534__auto__ = defender_cljs.events.has_trait_QMARK_.call(null,from_actor_19968,from);if(cljs.core.truth_(and__12534__auto__))
{return defender_cljs.events.has_trait_QMARK_.call(null,to_actor_19969,to);
} else
{return and__12534__auto__;
}
})()))
{callback.call(null,from_actor_19968,to_actor_19969);
} else
{}
{
var G__19970 = cljs.core.next.call(null,seq__19895_19960__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__19895_19947 = G__19970;
chunk__19896_19948 = G__19971;
count__19897_19949 = G__19972;
i__19898_19950 = G__19973;
continue;
}
}
} else
{}
}
break;
}
{
var G__19974 = cljs.core.next.call(null,seq__19894__$1);
var G__19975 = null;
var G__19976 = (0);
var G__19977 = (0);
seq__19894 = G__19974;
chunk__19899 = G__19975;
count__19900 = G__19976;
i__19901 = G__19977;
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
defender_cljs.events.t19891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19893){var self__ = this;
var _19893__$1 = this;return self__.meta19892;
});
defender_cljs.events.t19891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19893,meta19892__$1){var self__ = this;
var _19893__$1 = this;return (new defender_cljs.events.t19891(meta19892__$1));
});
defender_cljs.events.__GT_t19891 = (function __GT_t19891(meta19892){return (new defender_cljs.events.t19891(meta19892));
});
}
return (new defender_cljs.events.t19891(null));
})());
defender_cljs.events.set_on_collision.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"phasor","phasor",1818286796)], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (from,to){defender_cljs.utils.log.call(null,"hit!");
return defender_cljs.canvas.scene.remove_actor_BANG_.call(null,defender_cljs.canvas.scene.main,to);
}));

//# sourceMappingURL=events.js.map