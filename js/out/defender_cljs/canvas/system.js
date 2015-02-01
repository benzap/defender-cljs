// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.system');
goog.require('cljs.core');
defender_cljs.canvas.system.System = (function (){var obj28409 = {};return obj28409;
})();
defender_cljs.canvas.system.run = (function run(this$,props){if((function (){var and__12574__auto__ = this$;if(and__12574__auto__)
{return this$.defender_cljs$canvas$system$System$run$arity$2;
} else
{return and__12574__auto__;
}
})())
{return this$.defender_cljs$canvas$system$System$run$arity$2(this$,props);
} else
{var x__13223__auto__ = (((this$ == null))?null:this$);return (function (){var or__12586__auto__ = (defender_cljs.canvas.system.run[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (defender_cljs.canvas.system.run["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"System.run",this$);
}
}
})().call(null,this$,props);
}
});
defender_cljs.canvas.system.systems = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
defender_cljs.canvas.system.add_system_BANG_ = (function add_system_BANG_(name,system){return cljs.core.swap_BANG_.call(null,defender_cljs.canvas.system.systems,cljs.core.assoc,name,system);
});
defender_cljs.canvas.system.remove_system_BANG_ = (function remove_system_BANG_(name){return cljs.core.swap_BANG_.call(null,defender_cljs.canvas.system.systems,cljs.core.dissoc,name);
});
/**
* @param {...*} var_args
*/
defender_cljs.canvas.system.run_systems = (function() { 
var run_systems__delegate = function (p__28410){var vec__28416 = p__28410;var props = cljs.core.nth.call(null,vec__28416,(0),null);var seq__28417 = cljs.core.seq.call(null,cljs.core.deref.call(null,defender_cljs.canvas.system.systems));var chunk__28418 = null;var count__28419 = (0);var i__28420 = (0);while(true){
if((i__28420 < count__28419))
{var system = cljs.core._nth.call(null,chunk__28418,i__28420);defender_cljs.canvas.system.run.call(null,cljs.core.second.call(null,system),(function (){var or__12586__auto__ = props;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
{
var G__28421 = seq__28417;
var G__28422 = chunk__28418;
var G__28423 = count__28419;
var G__28424 = (i__28420 + (1));
seq__28417 = G__28421;
chunk__28418 = G__28422;
count__28419 = G__28423;
i__28420 = G__28424;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28417);if(temp__4126__auto__)
{var seq__28417__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28417__$1))
{var c__13356__auto__ = cljs.core.chunk_first.call(null,seq__28417__$1);{
var G__28425 = cljs.core.chunk_rest.call(null,seq__28417__$1);
var G__28426 = c__13356__auto__;
var G__28427 = cljs.core.count.call(null,c__13356__auto__);
var G__28428 = (0);
seq__28417 = G__28425;
chunk__28418 = G__28426;
count__28419 = G__28427;
i__28420 = G__28428;
continue;
}
} else
{var system = cljs.core.first.call(null,seq__28417__$1);defender_cljs.canvas.system.run.call(null,cljs.core.second.call(null,system),(function (){var or__12586__auto__ = props;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
{
var G__28429 = cljs.core.next.call(null,seq__28417__$1);
var G__28430 = null;
var G__28431 = (0);
var G__28432 = (0);
seq__28417 = G__28429;
chunk__28418 = G__28430;
count__28419 = G__28431;
i__28420 = G__28432;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var run_systems = function (var_args){
var p__28410 = null;if (arguments.length > 0) {
  p__28410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_systems__delegate.call(this,p__28410);};
run_systems.cljs$lang$maxFixedArity = 0;
run_systems.cljs$lang$applyTo = (function (arglist__28433){
var p__28410 = cljs.core.seq(arglist__28433);
return run_systems__delegate(p__28410);
});
run_systems.cljs$core$IFn$_invoke$arity$variadic = run_systems__delegate;
return run_systems;
})()
;

/**
* @constructor
* @param {*} msg
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
defender_cljs.canvas.system.Test = (function (msg,__meta,__extmap){
this.msg = msg;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
defender_cljs.canvas.system.Test.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13182__auto__,k__13183__auto__){var self__ = this;
var this__13182__auto____$1 = this;return cljs.core._lookup.call(null,this__13182__auto____$1,k__13183__auto__,null);
});
defender_cljs.canvas.system.Test.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13184__auto__,k28435,else__13185__auto__){var self__ = this;
var this__13184__auto____$1 = this;var G__28437 = (((k28435 instanceof cljs.core.Keyword))?k28435.fqn:null);switch (G__28437) {
case "msg":
return self__.msg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28435,else__13185__auto__);

}
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13196__auto__,writer__13197__auto__,opts__13198__auto__){var self__ = this;
var this__13196__auto____$1 = this;var pr_pair__13199__auto__ = ((function (this__13196__auto____$1){
return (function (keyval__13200__auto__){return cljs.core.pr_sequential_writer.call(null,writer__13197__auto__,cljs.core.pr_writer,""," ","",opts__13198__auto__,keyval__13200__auto__);
});})(this__13196__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__13197__auto__,pr_pair__13199__auto__,"#defender-cljs.canvas.system.Test{",", ","}",opts__13198__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13180__auto__){var self__ = this;
var this__13180__auto____$1 = this;return self__.__meta;
});
defender_cljs.canvas.system.Test.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13176__auto__){var self__ = this;
var this__13176__auto____$1 = this;return (new defender_cljs.canvas.system.Test(self__.msg,self__.__meta,self__.__extmap,self__.__hash));
});
defender_cljs.canvas.system.Test.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13186__auto__){var self__ = this;
var this__13186__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13177__auto__){var self__ = this;
var this__13177__auto____$1 = this;var h__12997__auto__ = self__.__hash;if(!((h__12997__auto__ == null)))
{return h__12997__auto__;
} else
{var h__12997__auto____$1 = cljs.core.hash_imap.call(null,this__13177__auto____$1);self__.__hash = h__12997__auto____$1;
return h__12997__auto____$1;
}
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13178__auto__,other__13179__auto__){var self__ = this;
var this__13178__auto____$1 = this;if(cljs.core.truth_((function (){var and__12574__auto__ = other__13179__auto__;if(cljs.core.truth_(and__12574__auto__))
{return ((this__13178__auto____$1.constructor === other__13179__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13178__auto____$1,other__13179__auto__));
} else
{return and__12574__auto__;
}
})()))
{return true;
} else
{return false;
}
});
defender_cljs.canvas.system.Test.prototype.defender_cljs$canvas$system$System$ = true;
defender_cljs.canvas.system.Test.prototype.defender_cljs$canvas$system$System$run$arity$2 = (function (_,props){var self__ = this;
var ___$1 = this;return console.log(self__.msg);
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13191__auto__,k__13192__auto__){var self__ = this;
var this__13191__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),null], null), null),k__13192__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13191__auto____$1),self__.__meta),k__13192__auto__);
} else
{return (new defender_cljs.canvas.system.Test(self__.msg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13192__auto__)),null));
}
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13189__auto__,k__13190__auto__,G__28434){var self__ = this;
var this__13189__auto____$1 = this;var pred__28438 = cljs.core.keyword_identical_QMARK_;var expr__28439 = k__13190__auto__;if(cljs.core.truth_(pred__28438.call(null,new cljs.core.Keyword(null,"msg","msg",-1386103444),expr__28439)))
{return (new defender_cljs.canvas.system.Test(G__28434,self__.__meta,self__.__extmap,null));
} else
{return (new defender_cljs.canvas.system.Test(self__.msg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13190__auto__,G__28434),null));
}
});
defender_cljs.canvas.system.Test.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13194__auto__){var self__ = this;
var this__13194__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg","msg",-1386103444),self__.msg],null))], null),self__.__extmap));
});
defender_cljs.canvas.system.Test.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13181__auto__,G__28434){var self__ = this;
var this__13181__auto____$1 = this;return (new defender_cljs.canvas.system.Test(self__.msg,G__28434,self__.__extmap,self__.__hash));
});
defender_cljs.canvas.system.Test.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13187__auto__,entry__13188__auto__){var self__ = this;
var this__13187__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__13188__auto__))
{return cljs.core._assoc.call(null,this__13187__auto____$1,cljs.core._nth.call(null,entry__13188__auto__,(0)),cljs.core._nth.call(null,entry__13188__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__13187__auto____$1,entry__13188__auto__);
}
});
defender_cljs.canvas.system.Test.cljs$lang$type = true;
defender_cljs.canvas.system.Test.cljs$lang$ctorPrSeq = (function (this__13216__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"defender-cljs.canvas.system/Test");
});
defender_cljs.canvas.system.Test.cljs$lang$ctorPrWriter = (function (this__13216__auto__,writer__13217__auto__){return cljs.core._write.call(null,writer__13217__auto__,"defender-cljs.canvas.system/Test");
});
defender_cljs.canvas.system.__GT_Test = (function __GT_Test(msg){return (new defender_cljs.canvas.system.Test(msg));
});
defender_cljs.canvas.system.map__GT_Test = (function map__GT_Test(G__28436){return (new defender_cljs.canvas.system.Test(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(G__28436),null,cljs.core.dissoc.call(null,G__28436,new cljs.core.Keyword(null,"msg","msg",-1386103444))));
});

//# sourceMappingURL=system.js.map