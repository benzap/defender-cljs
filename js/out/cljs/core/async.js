// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30458 = (function (f,fn_handler,meta30459){
this.f = f;
this.fn_handler = fn_handler;
this.meta30459 = meta30459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30458.cljs$lang$type = true;
cljs.core.async.t30458.cljs$lang$ctorStr = "cljs.core.async/t30458";
cljs.core.async.t30458.cljs$lang$ctorPrWriter = (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t30458");
});
cljs.core.async.t30458.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30460){var self__ = this;
var _30460__$1 = this;return self__.meta30459;
});
cljs.core.async.t30458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30460,meta30459__$1){var self__ = this;
var _30460__$1 = this;return (new cljs.core.async.t30458(self__.f,self__.fn_handler,meta30459__$1));
});
cljs.core.async.__GT_t30458 = (function __GT_t30458(f__$1,fn_handler__$1,meta30459){return (new cljs.core.async.t30458(f__$1,fn_handler__$1,meta30459));
});
}
return (new cljs.core.async.t30458(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30462 = buff;if(G__30462)
{var bit__13250__auto__ = null;if(cljs.core.truth_((function (){var or__12586__auto__ = bit__13250__auto__;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return G__30462.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30462.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30462);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30462);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_30463 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30463);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_30463,ret){
return (function (){return fn1.call(null,val_30463);
});})(val_30463,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13456__auto___30464 = n;var x_30465 = (0);while(true){
if((x_30465 < n__13456__auto___30464))
{(a[x_30465] = (0));
{
var G__30466 = (x_30465 + (1));
x_30465 = G__30466;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__30467 = (i + (1));
i = G__30467;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30471 = (function (flag,alt_flag,meta30472){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30472 = meta30472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30471.cljs$lang$type = true;
cljs.core.async.t30471.cljs$lang$ctorStr = "cljs.core.async/t30471";
cljs.core.async.t30471.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t30471");
});})(flag))
;
cljs.core.async.t30471.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t30471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t30471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30473){var self__ = this;
var _30473__$1 = this;return self__.meta30472;
});})(flag))
;
cljs.core.async.t30471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30473,meta30472__$1){var self__ = this;
var _30473__$1 = this;return (new cljs.core.async.t30471(self__.flag,self__.alt_flag,meta30472__$1));
});})(flag))
;
cljs.core.async.__GT_t30471 = ((function (flag){
return (function __GT_t30471(flag__$1,alt_flag__$1,meta30472){return (new cljs.core.async.t30471(flag__$1,alt_flag__$1,meta30472));
});})(flag))
;
}
return (new cljs.core.async.t30471(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30477 = (function (cb,flag,alt_handler,meta30478){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30478 = meta30478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30477.cljs$lang$type = true;
cljs.core.async.t30477.cljs$lang$ctorStr = "cljs.core.async/t30477";
cljs.core.async.t30477.cljs$lang$ctorPrWriter = (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t30477");
});
cljs.core.async.t30477.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30479){var self__ = this;
var _30479__$1 = this;return self__.meta30478;
});
cljs.core.async.t30477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30479,meta30478__$1){var self__ = this;
var _30479__$1 = this;return (new cljs.core.async.t30477(self__.cb,self__.flag,self__.alt_handler,meta30478__$1));
});
cljs.core.async.__GT_t30477 = (function __GT_t30477(cb__$1,flag__$1,alt_handler__$1,meta30478){return (new cljs.core.async.t30477(cb__$1,flag__$1,alt_handler__$1,meta30478));
});
}
return (new cljs.core.async.t30477(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30480_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30480_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30481_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30481_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12586__auto__ = wport;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__30482 = (i + (1));
i = G__30482;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12586__auto__ = ret;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__12574__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12574__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12574__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30483){var map__30485 = p__30483;var map__30485__$1 = ((cljs.core.seq_QMARK_.call(null,map__30485))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);var opts = map__30485__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30483 = null;if (arguments.length > 1) {
  p__30483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30483);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30486){
var ports = cljs.core.first(arglist__30486);
var p__30483 = cljs.core.rest(arglist__30486);
return alts_BANG___delegate(ports,p__30483);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__16444__auto___30581 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___30581){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___30581){
return (function (state_30557){var state_val_30558 = (state_30557[(1)]);if((state_val_30558 === (7)))
{var inst_30553 = (state_30557[(2)]);var state_30557__$1 = state_30557;var statearr_30559_30582 = state_30557__$1;(statearr_30559_30582[(2)] = inst_30553);
(statearr_30559_30582[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (1)))
{var state_30557__$1 = state_30557;var statearr_30560_30583 = state_30557__$1;(statearr_30560_30583[(2)] = null);
(statearr_30560_30583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (4)))
{var inst_30536 = (state_30557[(7)]);var inst_30536__$1 = (state_30557[(2)]);var inst_30537 = (inst_30536__$1 == null);var state_30557__$1 = (function (){var statearr_30561 = state_30557;(statearr_30561[(7)] = inst_30536__$1);
return statearr_30561;
})();if(cljs.core.truth_(inst_30537))
{var statearr_30562_30584 = state_30557__$1;(statearr_30562_30584[(1)] = (5));
} else
{var statearr_30563_30585 = state_30557__$1;(statearr_30563_30585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (13)))
{var state_30557__$1 = state_30557;var statearr_30564_30586 = state_30557__$1;(statearr_30564_30586[(2)] = null);
(statearr_30564_30586[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (6)))
{var inst_30536 = (state_30557[(7)]);var state_30557__$1 = state_30557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30557__$1,(11),to,inst_30536);
} else
{if((state_val_30558 === (3)))
{var inst_30555 = (state_30557[(2)]);var state_30557__$1 = state_30557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30557__$1,inst_30555);
} else
{if((state_val_30558 === (12)))
{var state_30557__$1 = state_30557;var statearr_30565_30587 = state_30557__$1;(statearr_30565_30587[(2)] = null);
(statearr_30565_30587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (2)))
{var state_30557__$1 = state_30557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30557__$1,(4),from);
} else
{if((state_val_30558 === (11)))
{var inst_30546 = (state_30557[(2)]);var state_30557__$1 = state_30557;if(cljs.core.truth_(inst_30546))
{var statearr_30566_30588 = state_30557__$1;(statearr_30566_30588[(1)] = (12));
} else
{var statearr_30567_30589 = state_30557__$1;(statearr_30567_30589[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (9)))
{var state_30557__$1 = state_30557;var statearr_30568_30590 = state_30557__$1;(statearr_30568_30590[(2)] = null);
(statearr_30568_30590[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (5)))
{var state_30557__$1 = state_30557;if(cljs.core.truth_(close_QMARK_))
{var statearr_30569_30591 = state_30557__$1;(statearr_30569_30591[(1)] = (8));
} else
{var statearr_30570_30592 = state_30557__$1;(statearr_30570_30592[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (14)))
{var inst_30551 = (state_30557[(2)]);var state_30557__$1 = state_30557;var statearr_30571_30593 = state_30557__$1;(statearr_30571_30593[(2)] = inst_30551);
(statearr_30571_30593[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (10)))
{var inst_30543 = (state_30557[(2)]);var state_30557__$1 = state_30557;var statearr_30572_30594 = state_30557__$1;(statearr_30572_30594[(2)] = inst_30543);
(statearr_30572_30594[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30558 === (8)))
{var inst_30540 = cljs.core.async.close_BANG_.call(null,to);var state_30557__$1 = state_30557;var statearr_30573_30595 = state_30557__$1;(statearr_30573_30595[(2)] = inst_30540);
(statearr_30573_30595[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___30581))
;return ((function (switch__16388__auto__,c__16444__auto___30581){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30577 = [null,null,null,null,null,null,null,null];(statearr_30577[(0)] = state_machine__16389__auto__);
(statearr_30577[(1)] = (1));
return statearr_30577;
});
var state_machine__16389__auto____1 = (function (state_30557){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30557);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30578){if((e30578 instanceof Object))
{var ex__16392__auto__ = e30578;var statearr_30579_30596 = state_30557;(statearr_30579_30596[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30578;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30597 = state_30557;
state_30557 = G__30597;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___30581))
})();var state__16446__auto__ = (function (){var statearr_30580 = f__16445__auto__.call(null);(statearr_30580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___30581);
return statearr_30580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___30581))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__30781){var vec__30782 = p__30781;var v = cljs.core.nth.call(null,vec__30782,(0),null);var p = cljs.core.nth.call(null,vec__30782,(1),null);var job = vec__30782;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__16444__auto___30964 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results){
return (function (state_30787){var state_val_30788 = (state_30787[(1)]);if((state_val_30788 === (2)))
{var inst_30784 = (state_30787[(2)]);var inst_30785 = cljs.core.async.close_BANG_.call(null,res);var state_30787__$1 = (function (){var statearr_30789 = state_30787;(statearr_30789[(7)] = inst_30784);
return statearr_30789;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30787__$1,inst_30785);
} else
{if((state_val_30788 === (1)))
{var state_30787__$1 = state_30787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30787__$1,(2),res,v);
} else
{return null;
}
}
});})(c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results))
;return ((function (switch__16388__auto__,c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30793 = [null,null,null,null,null,null,null,null];(statearr_30793[(0)] = state_machine__16389__auto__);
(statearr_30793[(1)] = (1));
return statearr_30793;
});
var state_machine__16389__auto____1 = (function (state_30787){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30787);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30794){if((e30794 instanceof Object))
{var ex__16392__auto__ = e30794;var statearr_30795_30965 = state_30787;(statearr_30795_30965[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30787);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30794;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30966 = state_30787;
state_30787 = G__30966;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30787){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results))
})();var state__16446__auto__ = (function (){var statearr_30796 = f__16445__auto__.call(null);(statearr_30796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___30964);
return statearr_30796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___30964,res,vec__30782,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__30797){var vec__30798 = p__30797;var v = cljs.core.nth.call(null,vec__30798,(0),null);var p = cljs.core.nth.call(null,vec__30798,(1),null);var job = vec__30798;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13456__auto___30967 = n;var __30968 = (0);while(true){
if((__30968 < n__13456__auto___30967))
{var G__30799_30969 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__30799_30969) {
case "async":
var c__16444__auto___30971 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__30968,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (__30968,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function (state_30812){var state_val_30813 = (state_30812[(1)]);if((state_val_30813 === (7)))
{var inst_30808 = (state_30812[(2)]);var state_30812__$1 = state_30812;var statearr_30814_30972 = state_30812__$1;(statearr_30814_30972[(2)] = inst_30808);
(statearr_30814_30972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30813 === (6)))
{var state_30812__$1 = state_30812;var statearr_30815_30973 = state_30812__$1;(statearr_30815_30973[(2)] = null);
(statearr_30815_30973[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30813 === (5)))
{var state_30812__$1 = state_30812;var statearr_30816_30974 = state_30812__$1;(statearr_30816_30974[(2)] = null);
(statearr_30816_30974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30813 === (4)))
{var inst_30802 = (state_30812[(2)]);var inst_30803 = async.call(null,inst_30802);var state_30812__$1 = state_30812;if(cljs.core.truth_(inst_30803))
{var statearr_30817_30975 = state_30812__$1;(statearr_30817_30975[(1)] = (5));
} else
{var statearr_30818_30976 = state_30812__$1;(statearr_30818_30976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30813 === (3)))
{var inst_30810 = (state_30812[(2)]);var state_30812__$1 = state_30812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30812__$1,inst_30810);
} else
{if((state_val_30813 === (2)))
{var state_30812__$1 = state_30812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30812__$1,(4),jobs);
} else
{if((state_val_30813 === (1)))
{var state_30812__$1 = state_30812;var statearr_30819_30977 = state_30812__$1;(statearr_30819_30977[(2)] = null);
(statearr_30819_30977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__30968,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
;return ((function (__30968,switch__16388__auto__,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30823 = [null,null,null,null,null,null,null];(statearr_30823[(0)] = state_machine__16389__auto__);
(statearr_30823[(1)] = (1));
return statearr_30823;
});
var state_machine__16389__auto____1 = (function (state_30812){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30812);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object))
{var ex__16392__auto__ = e30824;var statearr_30825_30978 = state_30812;(statearr_30825_30978[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30812);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30979 = state_30812;
state_30812 = G__30979;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(__30968,switch__16388__auto__,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
})();var state__16446__auto__ = (function (){var statearr_30826 = f__16445__auto__.call(null);(statearr_30826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___30971);
return statearr_30826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(__30968,c__16444__auto___30971,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
);

break;
case "compute":
var c__16444__auto___30980 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__30968,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (__30968,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function (state_30839){var state_val_30840 = (state_30839[(1)]);if((state_val_30840 === (7)))
{var inst_30835 = (state_30839[(2)]);var state_30839__$1 = state_30839;var statearr_30841_30981 = state_30839__$1;(statearr_30841_30981[(2)] = inst_30835);
(statearr_30841_30981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30840 === (6)))
{var state_30839__$1 = state_30839;var statearr_30842_30982 = state_30839__$1;(statearr_30842_30982[(2)] = null);
(statearr_30842_30982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30840 === (5)))
{var state_30839__$1 = state_30839;var statearr_30843_30983 = state_30839__$1;(statearr_30843_30983[(2)] = null);
(statearr_30843_30983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30840 === (4)))
{var inst_30829 = (state_30839[(2)]);var inst_30830 = process.call(null,inst_30829);var state_30839__$1 = state_30839;if(cljs.core.truth_(inst_30830))
{var statearr_30844_30984 = state_30839__$1;(statearr_30844_30984[(1)] = (5));
} else
{var statearr_30845_30985 = state_30839__$1;(statearr_30845_30985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30840 === (3)))
{var inst_30837 = (state_30839[(2)]);var state_30839__$1 = state_30839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else
{if((state_val_30840 === (2)))
{var state_30839__$1 = state_30839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30839__$1,(4),jobs);
} else
{if((state_val_30840 === (1)))
{var state_30839__$1 = state_30839;var statearr_30846_30986 = state_30839__$1;(statearr_30846_30986[(2)] = null);
(statearr_30846_30986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__30968,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
;return ((function (__30968,switch__16388__auto__,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30850 = [null,null,null,null,null,null,null];(statearr_30850[(0)] = state_machine__16389__auto__);
(statearr_30850[(1)] = (1));
return statearr_30850;
});
var state_machine__16389__auto____1 = (function (state_30839){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30839);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30851){if((e30851 instanceof Object))
{var ex__16392__auto__ = e30851;var statearr_30852_30987 = state_30839;(statearr_30852_30987[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30851;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30988 = state_30839;
state_30839 = G__30988;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(__30968,switch__16388__auto__,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
})();var state__16446__auto__ = (function (){var statearr_30853 = f__16445__auto__.call(null);(statearr_30853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___30980);
return statearr_30853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(__30968,c__16444__auto___30980,G__30799_30969,n__13456__auto___30967,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__30989 = (__30968 + (1));
__30968 = G__30989;
continue;
}
} else
{}
break;
}
var c__16444__auto___30990 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___30990,jobs,results,process,async){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___30990,jobs,results,process,async){
return (function (state_30875){var state_val_30876 = (state_30875[(1)]);if((state_val_30876 === (9)))
{var inst_30868 = (state_30875[(2)]);var state_30875__$1 = (function (){var statearr_30877 = state_30875;(statearr_30877[(7)] = inst_30868);
return statearr_30877;
})();var statearr_30878_30991 = state_30875__$1;(statearr_30878_30991[(2)] = null);
(statearr_30878_30991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30876 === (8)))
{var inst_30861 = (state_30875[(8)]);var inst_30866 = (state_30875[(2)]);var state_30875__$1 = (function (){var statearr_30879 = state_30875;(statearr_30879[(9)] = inst_30866);
return statearr_30879;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,(9),results,inst_30861);
} else
{if((state_val_30876 === (7)))
{var inst_30871 = (state_30875[(2)]);var state_30875__$1 = state_30875;var statearr_30880_30992 = state_30875__$1;(statearr_30880_30992[(2)] = inst_30871);
(statearr_30880_30992[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30876 === (6)))
{var inst_30861 = (state_30875[(8)]);var inst_30856 = (state_30875[(10)]);var inst_30861__$1 = cljs.core.async.chan.call(null,(1));var inst_30862 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30863 = [inst_30856,inst_30861__$1];var inst_30864 = (new cljs.core.PersistentVector(null,2,(5),inst_30862,inst_30863,null));var state_30875__$1 = (function (){var statearr_30881 = state_30875;(statearr_30881[(8)] = inst_30861__$1);
return statearr_30881;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,(8),jobs,inst_30864);
} else
{if((state_val_30876 === (5)))
{var inst_30859 = cljs.core.async.close_BANG_.call(null,jobs);var state_30875__$1 = state_30875;var statearr_30882_30993 = state_30875__$1;(statearr_30882_30993[(2)] = inst_30859);
(statearr_30882_30993[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30876 === (4)))
{var inst_30856 = (state_30875[(10)]);var inst_30856__$1 = (state_30875[(2)]);var inst_30857 = (inst_30856__$1 == null);var state_30875__$1 = (function (){var statearr_30883 = state_30875;(statearr_30883[(10)] = inst_30856__$1);
return statearr_30883;
})();if(cljs.core.truth_(inst_30857))
{var statearr_30884_30994 = state_30875__$1;(statearr_30884_30994[(1)] = (5));
} else
{var statearr_30885_30995 = state_30875__$1;(statearr_30885_30995[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30876 === (3)))
{var inst_30873 = (state_30875[(2)]);var state_30875__$1 = state_30875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30875__$1,inst_30873);
} else
{if((state_val_30876 === (2)))
{var state_30875__$1 = state_30875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(4),from);
} else
{if((state_val_30876 === (1)))
{var state_30875__$1 = state_30875;var statearr_30886_30996 = state_30875__$1;(statearr_30886_30996[(2)] = null);
(statearr_30886_30996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___30990,jobs,results,process,async))
;return ((function (switch__16388__auto__,c__16444__auto___30990,jobs,results,process,async){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30890[(0)] = state_machine__16389__auto__);
(statearr_30890[(1)] = (1));
return statearr_30890;
});
var state_machine__16389__auto____1 = (function (state_30875){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30875);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30891){if((e30891 instanceof Object))
{var ex__16392__auto__ = e30891;var statearr_30892_30997 = state_30875;(statearr_30892_30997[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30998 = state_30875;
state_30875 = G__30998;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___30990,jobs,results,process,async))
})();var state__16446__auto__ = (function (){var statearr_30893 = f__16445__auto__.call(null);(statearr_30893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___30990);
return statearr_30893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___30990,jobs,results,process,async))
);
var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__,jobs,results,process,async){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__,jobs,results,process,async){
return (function (state_30931){var state_val_30932 = (state_30931[(1)]);if((state_val_30932 === (7)))
{var inst_30927 = (state_30931[(2)]);var state_30931__$1 = state_30931;var statearr_30933_30999 = state_30931__$1;(statearr_30933_30999[(2)] = inst_30927);
(statearr_30933_30999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (20)))
{var state_30931__$1 = state_30931;var statearr_30934_31000 = state_30931__$1;(statearr_30934_31000[(2)] = null);
(statearr_30934_31000[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (1)))
{var state_30931__$1 = state_30931;var statearr_30935_31001 = state_30931__$1;(statearr_30935_31001[(2)] = null);
(statearr_30935_31001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (4)))
{var inst_30896 = (state_30931[(7)]);var inst_30896__$1 = (state_30931[(2)]);var inst_30897 = (inst_30896__$1 == null);var state_30931__$1 = (function (){var statearr_30936 = state_30931;(statearr_30936[(7)] = inst_30896__$1);
return statearr_30936;
})();if(cljs.core.truth_(inst_30897))
{var statearr_30937_31002 = state_30931__$1;(statearr_30937_31002[(1)] = (5));
} else
{var statearr_30938_31003 = state_30931__$1;(statearr_30938_31003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (15)))
{var inst_30909 = (state_30931[(8)]);var state_30931__$1 = state_30931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30931__$1,(18),to,inst_30909);
} else
{if((state_val_30932 === (21)))
{var inst_30922 = (state_30931[(2)]);var state_30931__$1 = state_30931;var statearr_30939_31004 = state_30931__$1;(statearr_30939_31004[(2)] = inst_30922);
(statearr_30939_31004[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (13)))
{var inst_30924 = (state_30931[(2)]);var state_30931__$1 = (function (){var statearr_30940 = state_30931;(statearr_30940[(9)] = inst_30924);
return statearr_30940;
})();var statearr_30941_31005 = state_30931__$1;(statearr_30941_31005[(2)] = null);
(statearr_30941_31005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (6)))
{var inst_30896 = (state_30931[(7)]);var state_30931__$1 = state_30931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(11),inst_30896);
} else
{if((state_val_30932 === (17)))
{var inst_30917 = (state_30931[(2)]);var state_30931__$1 = state_30931;if(cljs.core.truth_(inst_30917))
{var statearr_30942_31006 = state_30931__$1;(statearr_30942_31006[(1)] = (19));
} else
{var statearr_30943_31007 = state_30931__$1;(statearr_30943_31007[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (3)))
{var inst_30929 = (state_30931[(2)]);var state_30931__$1 = state_30931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30931__$1,inst_30929);
} else
{if((state_val_30932 === (12)))
{var inst_30906 = (state_30931[(10)]);var state_30931__$1 = state_30931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(14),inst_30906);
} else
{if((state_val_30932 === (2)))
{var state_30931__$1 = state_30931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(4),results);
} else
{if((state_val_30932 === (19)))
{var state_30931__$1 = state_30931;var statearr_30944_31008 = state_30931__$1;(statearr_30944_31008[(2)] = null);
(statearr_30944_31008[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (11)))
{var inst_30906 = (state_30931[(2)]);var state_30931__$1 = (function (){var statearr_30945 = state_30931;(statearr_30945[(10)] = inst_30906);
return statearr_30945;
})();var statearr_30946_31009 = state_30931__$1;(statearr_30946_31009[(2)] = null);
(statearr_30946_31009[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (9)))
{var state_30931__$1 = state_30931;var statearr_30947_31010 = state_30931__$1;(statearr_30947_31010[(2)] = null);
(statearr_30947_31010[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (5)))
{var state_30931__$1 = state_30931;if(cljs.core.truth_(close_QMARK_))
{var statearr_30948_31011 = state_30931__$1;(statearr_30948_31011[(1)] = (8));
} else
{var statearr_30949_31012 = state_30931__$1;(statearr_30949_31012[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (14)))
{var inst_30911 = (state_30931[(11)]);var inst_30909 = (state_30931[(8)]);var inst_30909__$1 = (state_30931[(2)]);var inst_30910 = (inst_30909__$1 == null);var inst_30911__$1 = cljs.core.not.call(null,inst_30910);var state_30931__$1 = (function (){var statearr_30950 = state_30931;(statearr_30950[(11)] = inst_30911__$1);
(statearr_30950[(8)] = inst_30909__$1);
return statearr_30950;
})();if(inst_30911__$1)
{var statearr_30951_31013 = state_30931__$1;(statearr_30951_31013[(1)] = (15));
} else
{var statearr_30952_31014 = state_30931__$1;(statearr_30952_31014[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (16)))
{var inst_30911 = (state_30931[(11)]);var state_30931__$1 = state_30931;var statearr_30953_31015 = state_30931__$1;(statearr_30953_31015[(2)] = inst_30911);
(statearr_30953_31015[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (10)))
{var inst_30903 = (state_30931[(2)]);var state_30931__$1 = state_30931;var statearr_30954_31016 = state_30931__$1;(statearr_30954_31016[(2)] = inst_30903);
(statearr_30954_31016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (18)))
{var inst_30914 = (state_30931[(2)]);var state_30931__$1 = state_30931;var statearr_30955_31017 = state_30931__$1;(statearr_30955_31017[(2)] = inst_30914);
(statearr_30955_31017[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30932 === (8)))
{var inst_30900 = cljs.core.async.close_BANG_.call(null,to);var state_30931__$1 = state_30931;var statearr_30956_31018 = state_30931__$1;(statearr_30956_31018[(2)] = inst_30900);
(statearr_30956_31018[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto__,jobs,results,process,async))
;return ((function (switch__16388__auto__,c__16444__auto__,jobs,results,process,async){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_30960 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30960[(0)] = state_machine__16389__auto__);
(statearr_30960[(1)] = (1));
return statearr_30960;
});
var state_machine__16389__auto____1 = (function (state_30931){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_30931);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e30961){if((e30961 instanceof Object))
{var ex__16392__auto__ = e30961;var statearr_30962_31019 = state_30931;(statearr_30962_31019[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30961;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31020 = state_30931;
state_30931 = G__31020;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_30931){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_30931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__,jobs,results,process,async))
})();var state__16446__auto__ = (function (){var statearr_30963 = f__16445__auto__.call(null);(statearr_30963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_30963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__,jobs,results,process,async))
);
return c__16444__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16444__auto___31121 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___31121,tc,fc){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___31121,tc,fc){
return (function (state_31096){var state_val_31097 = (state_31096[(1)]);if((state_val_31097 === (7)))
{var inst_31092 = (state_31096[(2)]);var state_31096__$1 = state_31096;var statearr_31098_31122 = state_31096__$1;(statearr_31098_31122[(2)] = inst_31092);
(statearr_31098_31122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (1)))
{var state_31096__$1 = state_31096;var statearr_31099_31123 = state_31096__$1;(statearr_31099_31123[(2)] = null);
(statearr_31099_31123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (4)))
{var inst_31073 = (state_31096[(7)]);var inst_31073__$1 = (state_31096[(2)]);var inst_31074 = (inst_31073__$1 == null);var state_31096__$1 = (function (){var statearr_31100 = state_31096;(statearr_31100[(7)] = inst_31073__$1);
return statearr_31100;
})();if(cljs.core.truth_(inst_31074))
{var statearr_31101_31124 = state_31096__$1;(statearr_31101_31124[(1)] = (5));
} else
{var statearr_31102_31125 = state_31096__$1;(statearr_31102_31125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (13)))
{var state_31096__$1 = state_31096;var statearr_31103_31126 = state_31096__$1;(statearr_31103_31126[(2)] = null);
(statearr_31103_31126[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (6)))
{var inst_31073 = (state_31096[(7)]);var inst_31079 = p.call(null,inst_31073);var state_31096__$1 = state_31096;if(cljs.core.truth_(inst_31079))
{var statearr_31104_31127 = state_31096__$1;(statearr_31104_31127[(1)] = (9));
} else
{var statearr_31105_31128 = state_31096__$1;(statearr_31105_31128[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (3)))
{var inst_31094 = (state_31096[(2)]);var state_31096__$1 = state_31096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31096__$1,inst_31094);
} else
{if((state_val_31097 === (12)))
{var state_31096__$1 = state_31096;var statearr_31106_31129 = state_31096__$1;(statearr_31106_31129[(2)] = null);
(statearr_31106_31129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (2)))
{var state_31096__$1 = state_31096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31096__$1,(4),ch);
} else
{if((state_val_31097 === (11)))
{var inst_31073 = (state_31096[(7)]);var inst_31083 = (state_31096[(2)]);var state_31096__$1 = state_31096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31096__$1,(8),inst_31083,inst_31073);
} else
{if((state_val_31097 === (9)))
{var state_31096__$1 = state_31096;var statearr_31107_31130 = state_31096__$1;(statearr_31107_31130[(2)] = tc);
(statearr_31107_31130[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (5)))
{var inst_31076 = cljs.core.async.close_BANG_.call(null,tc);var inst_31077 = cljs.core.async.close_BANG_.call(null,fc);var state_31096__$1 = (function (){var statearr_31108 = state_31096;(statearr_31108[(8)] = inst_31076);
return statearr_31108;
})();var statearr_31109_31131 = state_31096__$1;(statearr_31109_31131[(2)] = inst_31077);
(statearr_31109_31131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (14)))
{var inst_31090 = (state_31096[(2)]);var state_31096__$1 = state_31096;var statearr_31110_31132 = state_31096__$1;(statearr_31110_31132[(2)] = inst_31090);
(statearr_31110_31132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (10)))
{var state_31096__$1 = state_31096;var statearr_31111_31133 = state_31096__$1;(statearr_31111_31133[(2)] = fc);
(statearr_31111_31133[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31097 === (8)))
{var inst_31085 = (state_31096[(2)]);var state_31096__$1 = state_31096;if(cljs.core.truth_(inst_31085))
{var statearr_31112_31134 = state_31096__$1;(statearr_31112_31134[(1)] = (12));
} else
{var statearr_31113_31135 = state_31096__$1;(statearr_31113_31135[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___31121,tc,fc))
;return ((function (switch__16388__auto__,c__16444__auto___31121,tc,fc){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_31117 = [null,null,null,null,null,null,null,null,null];(statearr_31117[(0)] = state_machine__16389__auto__);
(statearr_31117[(1)] = (1));
return statearr_31117;
});
var state_machine__16389__auto____1 = (function (state_31096){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_31096);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e31118){if((e31118 instanceof Object))
{var ex__16392__auto__ = e31118;var statearr_31119_31136 = state_31096;(statearr_31119_31136[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31137 = state_31096;
state_31096 = G__31137;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___31121,tc,fc))
})();var state__16446__auto__ = (function (){var statearr_31120 = f__16445__auto__.call(null);(statearr_31120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___31121);
return statearr_31120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___31121,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__){
return (function (state_31184){var state_val_31185 = (state_31184[(1)]);if((state_val_31185 === (7)))
{var inst_31180 = (state_31184[(2)]);var state_31184__$1 = state_31184;var statearr_31186_31202 = state_31184__$1;(statearr_31186_31202[(2)] = inst_31180);
(statearr_31186_31202[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31185 === (6)))
{var inst_31173 = (state_31184[(7)]);var inst_31170 = (state_31184[(8)]);var inst_31177 = f.call(null,inst_31170,inst_31173);var inst_31170__$1 = inst_31177;var state_31184__$1 = (function (){var statearr_31187 = state_31184;(statearr_31187[(8)] = inst_31170__$1);
return statearr_31187;
})();var statearr_31188_31203 = state_31184__$1;(statearr_31188_31203[(2)] = null);
(statearr_31188_31203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31185 === (5)))
{var inst_31170 = (state_31184[(8)]);var state_31184__$1 = state_31184;var statearr_31189_31204 = state_31184__$1;(statearr_31189_31204[(2)] = inst_31170);
(statearr_31189_31204[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31185 === (4)))
{var inst_31173 = (state_31184[(7)]);var inst_31173__$1 = (state_31184[(2)]);var inst_31174 = (inst_31173__$1 == null);var state_31184__$1 = (function (){var statearr_31190 = state_31184;(statearr_31190[(7)] = inst_31173__$1);
return statearr_31190;
})();if(cljs.core.truth_(inst_31174))
{var statearr_31191_31205 = state_31184__$1;(statearr_31191_31205[(1)] = (5));
} else
{var statearr_31192_31206 = state_31184__$1;(statearr_31192_31206[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31185 === (3)))
{var inst_31182 = (state_31184[(2)]);var state_31184__$1 = state_31184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31184__$1,inst_31182);
} else
{if((state_val_31185 === (2)))
{var state_31184__$1 = state_31184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(4),ch);
} else
{if((state_val_31185 === (1)))
{var inst_31170 = init;var state_31184__$1 = (function (){var statearr_31193 = state_31184;(statearr_31193[(8)] = inst_31170);
return statearr_31193;
})();var statearr_31194_31207 = state_31184__$1;(statearr_31194_31207[(2)] = null);
(statearr_31194_31207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__16444__auto__))
;return ((function (switch__16388__auto__,c__16444__auto__){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_31198 = [null,null,null,null,null,null,null,null,null];(statearr_31198[(0)] = state_machine__16389__auto__);
(statearr_31198[(1)] = (1));
return statearr_31198;
});
var state_machine__16389__auto____1 = (function (state_31184){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_31184);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e31199){if((e31199 instanceof Object))
{var ex__16392__auto__ = e31199;var statearr_31200_31208 = state_31184;(statearr_31200_31208[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31209 = state_31184;
state_31184 = G__31209;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_31184){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_31184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__))
})();var state__16446__auto__ = (function (){var statearr_31201 = f__16445__auto__.call(null);(statearr_31201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_31201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__))
);
return c__16444__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__){
return (function (state_31283){var state_val_31284 = (state_31283[(1)]);if((state_val_31284 === (7)))
{var inst_31265 = (state_31283[(2)]);var state_31283__$1 = state_31283;var statearr_31285_31308 = state_31283__$1;(statearr_31285_31308[(2)] = inst_31265);
(statearr_31285_31308[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (1)))
{var inst_31259 = cljs.core.seq.call(null,coll);var inst_31260 = inst_31259;var state_31283__$1 = (function (){var statearr_31286 = state_31283;(statearr_31286[(7)] = inst_31260);
return statearr_31286;
})();var statearr_31287_31309 = state_31283__$1;(statearr_31287_31309[(2)] = null);
(statearr_31287_31309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (4)))
{var inst_31260 = (state_31283[(7)]);var inst_31263 = cljs.core.first.call(null,inst_31260);var state_31283__$1 = state_31283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31283__$1,(7),ch,inst_31263);
} else
{if((state_val_31284 === (13)))
{var inst_31277 = (state_31283[(2)]);var state_31283__$1 = state_31283;var statearr_31288_31310 = state_31283__$1;(statearr_31288_31310[(2)] = inst_31277);
(statearr_31288_31310[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (6)))
{var inst_31268 = (state_31283[(2)]);var state_31283__$1 = state_31283;if(cljs.core.truth_(inst_31268))
{var statearr_31289_31311 = state_31283__$1;(statearr_31289_31311[(1)] = (8));
} else
{var statearr_31290_31312 = state_31283__$1;(statearr_31290_31312[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (3)))
{var inst_31281 = (state_31283[(2)]);var state_31283__$1 = state_31283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31283__$1,inst_31281);
} else
{if((state_val_31284 === (12)))
{var state_31283__$1 = state_31283;var statearr_31291_31313 = state_31283__$1;(statearr_31291_31313[(2)] = null);
(statearr_31291_31313[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (2)))
{var inst_31260 = (state_31283[(7)]);var state_31283__$1 = state_31283;if(cljs.core.truth_(inst_31260))
{var statearr_31292_31314 = state_31283__$1;(statearr_31292_31314[(1)] = (4));
} else
{var statearr_31293_31315 = state_31283__$1;(statearr_31293_31315[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (11)))
{var inst_31274 = cljs.core.async.close_BANG_.call(null,ch);var state_31283__$1 = state_31283;var statearr_31294_31316 = state_31283__$1;(statearr_31294_31316[(2)] = inst_31274);
(statearr_31294_31316[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (9)))
{var state_31283__$1 = state_31283;if(cljs.core.truth_(close_QMARK_))
{var statearr_31295_31317 = state_31283__$1;(statearr_31295_31317[(1)] = (11));
} else
{var statearr_31296_31318 = state_31283__$1;(statearr_31296_31318[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (5)))
{var inst_31260 = (state_31283[(7)]);var state_31283__$1 = state_31283;var statearr_31297_31319 = state_31283__$1;(statearr_31297_31319[(2)] = inst_31260);
(statearr_31297_31319[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (10)))
{var inst_31279 = (state_31283[(2)]);var state_31283__$1 = state_31283;var statearr_31298_31320 = state_31283__$1;(statearr_31298_31320[(2)] = inst_31279);
(statearr_31298_31320[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31284 === (8)))
{var inst_31260 = (state_31283[(7)]);var inst_31270 = cljs.core.next.call(null,inst_31260);var inst_31260__$1 = inst_31270;var state_31283__$1 = (function (){var statearr_31299 = state_31283;(statearr_31299[(7)] = inst_31260__$1);
return statearr_31299;
})();var statearr_31300_31321 = state_31283__$1;(statearr_31300_31321[(2)] = null);
(statearr_31300_31321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto__))
;return ((function (switch__16388__auto__,c__16444__auto__){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_31304 = [null,null,null,null,null,null,null,null];(statearr_31304[(0)] = state_machine__16389__auto__);
(statearr_31304[(1)] = (1));
return statearr_31304;
});
var state_machine__16389__auto____1 = (function (state_31283){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_31283);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e31305){if((e31305 instanceof Object))
{var ex__16392__auto__ = e31305;var statearr_31306_31322 = state_31283;(statearr_31306_31322[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31305;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31323 = state_31283;
state_31283 = G__31323;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_31283){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_31283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__))
})();var state__16446__auto__ = (function (){var statearr_31307 = f__16445__auto__.call(null);(statearr_31307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_31307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__))
);
return c__16444__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj31325 = {};return obj31325;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12574__auto__ = _;if(and__12574__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12574__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13223__auto__ = (((_ == null))?null:_);return (function (){var or__12586__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj31327 = {};return obj31327;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31549 = (function (cs,ch,mult,meta31550){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31550 = meta31550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31549.cljs$lang$type = true;
cljs.core.async.t31549.cljs$lang$ctorStr = "cljs.core.async/t31549";
cljs.core.async.t31549.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t31549");
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31549.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31551){var self__ = this;
var _31551__$1 = this;return self__.meta31550;
});})(cs))
;
cljs.core.async.t31549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31551,meta31550__$1){var self__ = this;
var _31551__$1 = this;return (new cljs.core.async.t31549(self__.cs,self__.ch,self__.mult,meta31550__$1));
});})(cs))
;
cljs.core.async.__GT_t31549 = ((function (cs){
return (function __GT_t31549(cs__$1,ch__$1,mult__$1,meta31550){return (new cljs.core.async.t31549(cs__$1,ch__$1,mult__$1,meta31550));
});})(cs))
;
}
return (new cljs.core.async.t31549(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16444__auto___31770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___31770,cs,m,dchan,dctr,done){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___31770,cs,m,dchan,dctr,done){
return (function (state_31682){var state_val_31683 = (state_31682[(1)]);if((state_val_31683 === (7)))
{var inst_31678 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31684_31771 = state_31682__$1;(statearr_31684_31771[(2)] = inst_31678);
(statearr_31684_31771[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (20)))
{var inst_31583 = (state_31682[(7)]);var inst_31593 = cljs.core.first.call(null,inst_31583);var inst_31594 = cljs.core.nth.call(null,inst_31593,(0),null);var inst_31595 = cljs.core.nth.call(null,inst_31593,(1),null);var state_31682__$1 = (function (){var statearr_31685 = state_31682;(statearr_31685[(8)] = inst_31594);
return statearr_31685;
})();if(cljs.core.truth_(inst_31595))
{var statearr_31686_31772 = state_31682__$1;(statearr_31686_31772[(1)] = (22));
} else
{var statearr_31687_31773 = state_31682__$1;(statearr_31687_31773[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (27)))
{var inst_31623 = (state_31682[(9)]);var inst_31554 = (state_31682[(10)]);var inst_31625 = (state_31682[(11)]);var inst_31630 = (state_31682[(12)]);var inst_31630__$1 = cljs.core._nth.call(null,inst_31623,inst_31625);var inst_31631 = cljs.core.async.put_BANG_.call(null,inst_31630__$1,inst_31554,done);var state_31682__$1 = (function (){var statearr_31688 = state_31682;(statearr_31688[(12)] = inst_31630__$1);
return statearr_31688;
})();if(cljs.core.truth_(inst_31631))
{var statearr_31689_31774 = state_31682__$1;(statearr_31689_31774[(1)] = (30));
} else
{var statearr_31690_31775 = state_31682__$1;(statearr_31690_31775[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (1)))
{var state_31682__$1 = state_31682;var statearr_31691_31776 = state_31682__$1;(statearr_31691_31776[(2)] = null);
(statearr_31691_31776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (24)))
{var inst_31583 = (state_31682[(7)]);var inst_31600 = (state_31682[(2)]);var inst_31601 = cljs.core.next.call(null,inst_31583);var inst_31563 = inst_31601;var inst_31564 = null;var inst_31565 = (0);var inst_31566 = (0);var state_31682__$1 = (function (){var statearr_31692 = state_31682;(statearr_31692[(13)] = inst_31563);
(statearr_31692[(14)] = inst_31565);
(statearr_31692[(15)] = inst_31566);
(statearr_31692[(16)] = inst_31600);
(statearr_31692[(17)] = inst_31564);
return statearr_31692;
})();var statearr_31693_31777 = state_31682__$1;(statearr_31693_31777[(2)] = null);
(statearr_31693_31777[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (39)))
{var state_31682__$1 = state_31682;var statearr_31697_31778 = state_31682__$1;(statearr_31697_31778[(2)] = null);
(statearr_31697_31778[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (4)))
{var inst_31554 = (state_31682[(10)]);var inst_31554__$1 = (state_31682[(2)]);var inst_31555 = (inst_31554__$1 == null);var state_31682__$1 = (function (){var statearr_31698 = state_31682;(statearr_31698[(10)] = inst_31554__$1);
return statearr_31698;
})();if(cljs.core.truth_(inst_31555))
{var statearr_31699_31779 = state_31682__$1;(statearr_31699_31779[(1)] = (5));
} else
{var statearr_31700_31780 = state_31682__$1;(statearr_31700_31780[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (15)))
{var inst_31563 = (state_31682[(13)]);var inst_31565 = (state_31682[(14)]);var inst_31566 = (state_31682[(15)]);var inst_31564 = (state_31682[(17)]);var inst_31579 = (state_31682[(2)]);var inst_31580 = (inst_31566 + (1));var tmp31694 = inst_31563;var tmp31695 = inst_31565;var tmp31696 = inst_31564;var inst_31563__$1 = tmp31694;var inst_31564__$1 = tmp31696;var inst_31565__$1 = tmp31695;var inst_31566__$1 = inst_31580;var state_31682__$1 = (function (){var statearr_31701 = state_31682;(statearr_31701[(13)] = inst_31563__$1);
(statearr_31701[(14)] = inst_31565__$1);
(statearr_31701[(15)] = inst_31566__$1);
(statearr_31701[(17)] = inst_31564__$1);
(statearr_31701[(18)] = inst_31579);
return statearr_31701;
})();var statearr_31702_31781 = state_31682__$1;(statearr_31702_31781[(2)] = null);
(statearr_31702_31781[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (21)))
{var inst_31604 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31706_31782 = state_31682__$1;(statearr_31706_31782[(2)] = inst_31604);
(statearr_31706_31782[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (31)))
{var inst_31630 = (state_31682[(12)]);var inst_31634 = done.call(null,null);var inst_31635 = cljs.core.async.untap_STAR_.call(null,m,inst_31630);var state_31682__$1 = (function (){var statearr_31707 = state_31682;(statearr_31707[(19)] = inst_31634);
return statearr_31707;
})();var statearr_31708_31783 = state_31682__$1;(statearr_31708_31783[(2)] = inst_31635);
(statearr_31708_31783[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (32)))
{var inst_31623 = (state_31682[(9)]);var inst_31622 = (state_31682[(20)]);var inst_31625 = (state_31682[(11)]);var inst_31624 = (state_31682[(21)]);var inst_31637 = (state_31682[(2)]);var inst_31638 = (inst_31625 + (1));var tmp31703 = inst_31623;var tmp31704 = inst_31622;var tmp31705 = inst_31624;var inst_31622__$1 = tmp31704;var inst_31623__$1 = tmp31703;var inst_31624__$1 = tmp31705;var inst_31625__$1 = inst_31638;var state_31682__$1 = (function (){var statearr_31709 = state_31682;(statearr_31709[(9)] = inst_31623__$1);
(statearr_31709[(20)] = inst_31622__$1);
(statearr_31709[(11)] = inst_31625__$1);
(statearr_31709[(21)] = inst_31624__$1);
(statearr_31709[(22)] = inst_31637);
return statearr_31709;
})();var statearr_31710_31784 = state_31682__$1;(statearr_31710_31784[(2)] = null);
(statearr_31710_31784[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (40)))
{var inst_31650 = (state_31682[(23)]);var inst_31654 = done.call(null,null);var inst_31655 = cljs.core.async.untap_STAR_.call(null,m,inst_31650);var state_31682__$1 = (function (){var statearr_31711 = state_31682;(statearr_31711[(24)] = inst_31654);
return statearr_31711;
})();var statearr_31712_31785 = state_31682__$1;(statearr_31712_31785[(2)] = inst_31655);
(statearr_31712_31785[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (33)))
{var inst_31641 = (state_31682[(25)]);var inst_31643 = cljs.core.chunked_seq_QMARK_.call(null,inst_31641);var state_31682__$1 = state_31682;if(inst_31643)
{var statearr_31713_31786 = state_31682__$1;(statearr_31713_31786[(1)] = (36));
} else
{var statearr_31714_31787 = state_31682__$1;(statearr_31714_31787[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (13)))
{var inst_31573 = (state_31682[(26)]);var inst_31576 = cljs.core.async.close_BANG_.call(null,inst_31573);var state_31682__$1 = state_31682;var statearr_31715_31788 = state_31682__$1;(statearr_31715_31788[(2)] = inst_31576);
(statearr_31715_31788[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (22)))
{var inst_31594 = (state_31682[(8)]);var inst_31597 = cljs.core.async.close_BANG_.call(null,inst_31594);var state_31682__$1 = state_31682;var statearr_31716_31789 = state_31682__$1;(statearr_31716_31789[(2)] = inst_31597);
(statearr_31716_31789[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (36)))
{var inst_31641 = (state_31682[(25)]);var inst_31645 = cljs.core.chunk_first.call(null,inst_31641);var inst_31646 = cljs.core.chunk_rest.call(null,inst_31641);var inst_31647 = cljs.core.count.call(null,inst_31645);var inst_31622 = inst_31646;var inst_31623 = inst_31645;var inst_31624 = inst_31647;var inst_31625 = (0);var state_31682__$1 = (function (){var statearr_31717 = state_31682;(statearr_31717[(9)] = inst_31623);
(statearr_31717[(20)] = inst_31622);
(statearr_31717[(11)] = inst_31625);
(statearr_31717[(21)] = inst_31624);
return statearr_31717;
})();var statearr_31718_31790 = state_31682__$1;(statearr_31718_31790[(2)] = null);
(statearr_31718_31790[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (41)))
{var inst_31641 = (state_31682[(25)]);var inst_31657 = (state_31682[(2)]);var inst_31658 = cljs.core.next.call(null,inst_31641);var inst_31622 = inst_31658;var inst_31623 = null;var inst_31624 = (0);var inst_31625 = (0);var state_31682__$1 = (function (){var statearr_31719 = state_31682;(statearr_31719[(27)] = inst_31657);
(statearr_31719[(9)] = inst_31623);
(statearr_31719[(20)] = inst_31622);
(statearr_31719[(11)] = inst_31625);
(statearr_31719[(21)] = inst_31624);
return statearr_31719;
})();var statearr_31720_31791 = state_31682__$1;(statearr_31720_31791[(2)] = null);
(statearr_31720_31791[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (43)))
{var state_31682__$1 = state_31682;var statearr_31721_31792 = state_31682__$1;(statearr_31721_31792[(2)] = null);
(statearr_31721_31792[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (29)))
{var inst_31666 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31722_31793 = state_31682__$1;(statearr_31722_31793[(2)] = inst_31666);
(statearr_31722_31793[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (44)))
{var inst_31675 = (state_31682[(2)]);var state_31682__$1 = (function (){var statearr_31723 = state_31682;(statearr_31723[(28)] = inst_31675);
return statearr_31723;
})();var statearr_31724_31794 = state_31682__$1;(statearr_31724_31794[(2)] = null);
(statearr_31724_31794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (6)))
{var inst_31614 = (state_31682[(29)]);var inst_31613 = cljs.core.deref.call(null,cs);var inst_31614__$1 = cljs.core.keys.call(null,inst_31613);var inst_31615 = cljs.core.count.call(null,inst_31614__$1);var inst_31616 = cljs.core.reset_BANG_.call(null,dctr,inst_31615);var inst_31621 = cljs.core.seq.call(null,inst_31614__$1);var inst_31622 = inst_31621;var inst_31623 = null;var inst_31624 = (0);var inst_31625 = (0);var state_31682__$1 = (function (){var statearr_31725 = state_31682;(statearr_31725[(9)] = inst_31623);
(statearr_31725[(20)] = inst_31622);
(statearr_31725[(29)] = inst_31614__$1);
(statearr_31725[(11)] = inst_31625);
(statearr_31725[(21)] = inst_31624);
(statearr_31725[(30)] = inst_31616);
return statearr_31725;
})();var statearr_31726_31795 = state_31682__$1;(statearr_31726_31795[(2)] = null);
(statearr_31726_31795[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (28)))
{var inst_31622 = (state_31682[(20)]);var inst_31641 = (state_31682[(25)]);var inst_31641__$1 = cljs.core.seq.call(null,inst_31622);var state_31682__$1 = (function (){var statearr_31727 = state_31682;(statearr_31727[(25)] = inst_31641__$1);
return statearr_31727;
})();if(inst_31641__$1)
{var statearr_31728_31796 = state_31682__$1;(statearr_31728_31796[(1)] = (33));
} else
{var statearr_31729_31797 = state_31682__$1;(statearr_31729_31797[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (25)))
{var inst_31625 = (state_31682[(11)]);var inst_31624 = (state_31682[(21)]);var inst_31627 = (inst_31625 < inst_31624);var inst_31628 = inst_31627;var state_31682__$1 = state_31682;if(cljs.core.truth_(inst_31628))
{var statearr_31730_31798 = state_31682__$1;(statearr_31730_31798[(1)] = (27));
} else
{var statearr_31731_31799 = state_31682__$1;(statearr_31731_31799[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (34)))
{var state_31682__$1 = state_31682;var statearr_31732_31800 = state_31682__$1;(statearr_31732_31800[(2)] = null);
(statearr_31732_31800[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (17)))
{var state_31682__$1 = state_31682;var statearr_31733_31801 = state_31682__$1;(statearr_31733_31801[(2)] = null);
(statearr_31733_31801[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (3)))
{var inst_31680 = (state_31682[(2)]);var state_31682__$1 = state_31682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31682__$1,inst_31680);
} else
{if((state_val_31683 === (12)))
{var inst_31609 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31734_31802 = state_31682__$1;(statearr_31734_31802[(2)] = inst_31609);
(statearr_31734_31802[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (2)))
{var state_31682__$1 = state_31682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31682__$1,(4),ch);
} else
{if((state_val_31683 === (23)))
{var state_31682__$1 = state_31682;var statearr_31735_31803 = state_31682__$1;(statearr_31735_31803[(2)] = null);
(statearr_31735_31803[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (35)))
{var inst_31664 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31736_31804 = state_31682__$1;(statearr_31736_31804[(2)] = inst_31664);
(statearr_31736_31804[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (19)))
{var inst_31583 = (state_31682[(7)]);var inst_31587 = cljs.core.chunk_first.call(null,inst_31583);var inst_31588 = cljs.core.chunk_rest.call(null,inst_31583);var inst_31589 = cljs.core.count.call(null,inst_31587);var inst_31563 = inst_31588;var inst_31564 = inst_31587;var inst_31565 = inst_31589;var inst_31566 = (0);var state_31682__$1 = (function (){var statearr_31737 = state_31682;(statearr_31737[(13)] = inst_31563);
(statearr_31737[(14)] = inst_31565);
(statearr_31737[(15)] = inst_31566);
(statearr_31737[(17)] = inst_31564);
return statearr_31737;
})();var statearr_31738_31805 = state_31682__$1;(statearr_31738_31805[(2)] = null);
(statearr_31738_31805[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (11)))
{var inst_31563 = (state_31682[(13)]);var inst_31583 = (state_31682[(7)]);var inst_31583__$1 = cljs.core.seq.call(null,inst_31563);var state_31682__$1 = (function (){var statearr_31739 = state_31682;(statearr_31739[(7)] = inst_31583__$1);
return statearr_31739;
})();if(inst_31583__$1)
{var statearr_31740_31806 = state_31682__$1;(statearr_31740_31806[(1)] = (16));
} else
{var statearr_31741_31807 = state_31682__$1;(statearr_31741_31807[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (9)))
{var inst_31611 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31742_31808 = state_31682__$1;(statearr_31742_31808[(2)] = inst_31611);
(statearr_31742_31808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (5)))
{var inst_31561 = cljs.core.deref.call(null,cs);var inst_31562 = cljs.core.seq.call(null,inst_31561);var inst_31563 = inst_31562;var inst_31564 = null;var inst_31565 = (0);var inst_31566 = (0);var state_31682__$1 = (function (){var statearr_31743 = state_31682;(statearr_31743[(13)] = inst_31563);
(statearr_31743[(14)] = inst_31565);
(statearr_31743[(15)] = inst_31566);
(statearr_31743[(17)] = inst_31564);
return statearr_31743;
})();var statearr_31744_31809 = state_31682__$1;(statearr_31744_31809[(2)] = null);
(statearr_31744_31809[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (14)))
{var state_31682__$1 = state_31682;var statearr_31745_31810 = state_31682__$1;(statearr_31745_31810[(2)] = null);
(statearr_31745_31810[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (45)))
{var inst_31672 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31746_31811 = state_31682__$1;(statearr_31746_31811[(2)] = inst_31672);
(statearr_31746_31811[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (26)))
{var inst_31614 = (state_31682[(29)]);var inst_31668 = (state_31682[(2)]);var inst_31669 = cljs.core.seq.call(null,inst_31614);var state_31682__$1 = (function (){var statearr_31747 = state_31682;(statearr_31747[(31)] = inst_31668);
return statearr_31747;
})();if(inst_31669)
{var statearr_31748_31812 = state_31682__$1;(statearr_31748_31812[(1)] = (42));
} else
{var statearr_31749_31813 = state_31682__$1;(statearr_31749_31813[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (16)))
{var inst_31583 = (state_31682[(7)]);var inst_31585 = cljs.core.chunked_seq_QMARK_.call(null,inst_31583);var state_31682__$1 = state_31682;if(inst_31585)
{var statearr_31750_31814 = state_31682__$1;(statearr_31750_31814[(1)] = (19));
} else
{var statearr_31751_31815 = state_31682__$1;(statearr_31751_31815[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (38)))
{var inst_31661 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31752_31816 = state_31682__$1;(statearr_31752_31816[(2)] = inst_31661);
(statearr_31752_31816[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (30)))
{var state_31682__$1 = state_31682;var statearr_31753_31817 = state_31682__$1;(statearr_31753_31817[(2)] = null);
(statearr_31753_31817[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (10)))
{var inst_31566 = (state_31682[(15)]);var inst_31564 = (state_31682[(17)]);var inst_31572 = cljs.core._nth.call(null,inst_31564,inst_31566);var inst_31573 = cljs.core.nth.call(null,inst_31572,(0),null);var inst_31574 = cljs.core.nth.call(null,inst_31572,(1),null);var state_31682__$1 = (function (){var statearr_31754 = state_31682;(statearr_31754[(26)] = inst_31573);
return statearr_31754;
})();if(cljs.core.truth_(inst_31574))
{var statearr_31755_31818 = state_31682__$1;(statearr_31755_31818[(1)] = (13));
} else
{var statearr_31756_31819 = state_31682__$1;(statearr_31756_31819[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (18)))
{var inst_31607 = (state_31682[(2)]);var state_31682__$1 = state_31682;var statearr_31757_31820 = state_31682__$1;(statearr_31757_31820[(2)] = inst_31607);
(statearr_31757_31820[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (42)))
{var state_31682__$1 = state_31682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31682__$1,(45),dchan);
} else
{if((state_val_31683 === (37)))
{var inst_31554 = (state_31682[(10)]);var inst_31650 = (state_31682[(23)]);var inst_31641 = (state_31682[(25)]);var inst_31650__$1 = cljs.core.first.call(null,inst_31641);var inst_31651 = cljs.core.async.put_BANG_.call(null,inst_31650__$1,inst_31554,done);var state_31682__$1 = (function (){var statearr_31758 = state_31682;(statearr_31758[(23)] = inst_31650__$1);
return statearr_31758;
})();if(cljs.core.truth_(inst_31651))
{var statearr_31759_31821 = state_31682__$1;(statearr_31759_31821[(1)] = (39));
} else
{var statearr_31760_31822 = state_31682__$1;(statearr_31760_31822[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31683 === (8)))
{var inst_31565 = (state_31682[(14)]);var inst_31566 = (state_31682[(15)]);var inst_31568 = (inst_31566 < inst_31565);var inst_31569 = inst_31568;var state_31682__$1 = state_31682;if(cljs.core.truth_(inst_31569))
{var statearr_31761_31823 = state_31682__$1;(statearr_31761_31823[(1)] = (10));
} else
{var statearr_31762_31824 = state_31682__$1;(statearr_31762_31824[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___31770,cs,m,dchan,dctr,done))
;return ((function (switch__16388__auto__,c__16444__auto___31770,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_31766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31766[(0)] = state_machine__16389__auto__);
(statearr_31766[(1)] = (1));
return statearr_31766;
});
var state_machine__16389__auto____1 = (function (state_31682){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_31682);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e31767){if((e31767 instanceof Object))
{var ex__16392__auto__ = e31767;var statearr_31768_31825 = state_31682;(statearr_31768_31825[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31826 = state_31682;
state_31682 = G__31826;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_31682){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_31682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___31770,cs,m,dchan,dctr,done))
})();var state__16446__auto__ = (function (){var statearr_31769 = f__16445__auto__.call(null);(statearr_31769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___31770);
return statearr_31769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___31770,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj31828 = {};return obj31828;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12574__auto__ = m;if(and__12574__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__13223__auto__ = (((m == null))?null:m);return (function (){var or__12586__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31829){var map__31834 = p__31829;var map__31834__$1 = ((cljs.core.seq_QMARK_.call(null,map__31834))?cljs.core.apply.call(null,cljs.core.hash_map,map__31834):map__31834);var opts = map__31834__$1;var statearr_31835_31838 = state;(statearr_31835_31838[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31834,map__31834__$1,opts){
return (function (val){var statearr_31836_31839 = state;(statearr_31836_31839[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31834,map__31834__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_31837_31840 = state;(statearr_31837_31840[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31829 = null;if (arguments.length > 3) {
  p__31829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31829);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31841){
var state = cljs.core.first(arglist__31841);
arglist__31841 = cljs.core.next(arglist__31841);
var cont_block = cljs.core.first(arglist__31841);
arglist__31841 = cljs.core.next(arglist__31841);
var ports = cljs.core.first(arglist__31841);
var p__31829 = cljs.core.rest(arglist__31841);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31829);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t31961 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31961 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31962){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31962 = meta31962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31961.cljs$lang$type = true;
cljs.core.async.t31961.cljs$lang$ctorStr = "cljs.core.async/t31961";
cljs.core.async.t31961.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t31961");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31963){var self__ = this;
var _31963__$1 = this;return self__.meta31962;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31963,meta31962__$1){var self__ = this;
var _31963__$1 = this;return (new cljs.core.async.t31961(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31962__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31961 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31961(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31962){return (new cljs.core.async.t31961(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31962));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31961(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__16444__auto___32080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32033){var state_val_32034 = (state_32033[(1)]);if((state_val_32034 === (7)))
{var inst_31977 = (state_32033[(7)]);var inst_31982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31977);var state_32033__$1 = state_32033;var statearr_32035_32081 = state_32033__$1;(statearr_32035_32081[(2)] = inst_31982);
(statearr_32035_32081[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (20)))
{var inst_31992 = (state_32033[(8)]);var state_32033__$1 = state_32033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32033__$1,(23),out,inst_31992);
} else
{if((state_val_32034 === (1)))
{var inst_31967 = (state_32033[(9)]);var inst_31967__$1 = calc_state.call(null);var inst_31968 = cljs.core.seq_QMARK_.call(null,inst_31967__$1);var state_32033__$1 = (function (){var statearr_32036 = state_32033;(statearr_32036[(9)] = inst_31967__$1);
return statearr_32036;
})();if(inst_31968)
{var statearr_32037_32082 = state_32033__$1;(statearr_32037_32082[(1)] = (2));
} else
{var statearr_32038_32083 = state_32033__$1;(statearr_32038_32083[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (24)))
{var inst_31985 = (state_32033[(10)]);var inst_31977 = inst_31985;var state_32033__$1 = (function (){var statearr_32039 = state_32033;(statearr_32039[(7)] = inst_31977);
return statearr_32039;
})();var statearr_32040_32084 = state_32033__$1;(statearr_32040_32084[(2)] = null);
(statearr_32040_32084[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (4)))
{var inst_31967 = (state_32033[(9)]);var inst_31973 = (state_32033[(2)]);var inst_31974 = cljs.core.get.call(null,inst_31973,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_31975 = cljs.core.get.call(null,inst_31973,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_31976 = cljs.core.get.call(null,inst_31973,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_31977 = inst_31967;var state_32033__$1 = (function (){var statearr_32041 = state_32033;(statearr_32041[(11)] = inst_31975);
(statearr_32041[(12)] = inst_31976);
(statearr_32041[(7)] = inst_31977);
(statearr_32041[(13)] = inst_31974);
return statearr_32041;
})();var statearr_32042_32085 = state_32033__$1;(statearr_32042_32085[(2)] = null);
(statearr_32042_32085[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (15)))
{var state_32033__$1 = state_32033;var statearr_32043_32086 = state_32033__$1;(statearr_32043_32086[(2)] = null);
(statearr_32043_32086[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (21)))
{var inst_31985 = (state_32033[(10)]);var inst_31977 = inst_31985;var state_32033__$1 = (function (){var statearr_32044 = state_32033;(statearr_32044[(7)] = inst_31977);
return statearr_32044;
})();var statearr_32045_32087 = state_32033__$1;(statearr_32045_32087[(2)] = null);
(statearr_32045_32087[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (13)))
{var inst_32029 = (state_32033[(2)]);var state_32033__$1 = state_32033;var statearr_32046_32088 = state_32033__$1;(statearr_32046_32088[(2)] = inst_32029);
(statearr_32046_32088[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (22)))
{var inst_32027 = (state_32033[(2)]);var state_32033__$1 = state_32033;var statearr_32047_32089 = state_32033__$1;(statearr_32047_32089[(2)] = inst_32027);
(statearr_32047_32089[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (6)))
{var inst_32031 = (state_32033[(2)]);var state_32033__$1 = state_32033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32033__$1,inst_32031);
} else
{if((state_val_32034 === (25)))
{var state_32033__$1 = state_32033;var statearr_32048_32090 = state_32033__$1;(statearr_32048_32090[(2)] = null);
(statearr_32048_32090[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (17)))
{var inst_32007 = (state_32033[(14)]);var state_32033__$1 = state_32033;var statearr_32049_32091 = state_32033__$1;(statearr_32049_32091[(2)] = inst_32007);
(statearr_32049_32091[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (3)))
{var inst_31967 = (state_32033[(9)]);var state_32033__$1 = state_32033;var statearr_32050_32092 = state_32033__$1;(statearr_32050_32092[(2)] = inst_31967);
(statearr_32050_32092[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (12)))
{var inst_31988 = (state_32033[(15)]);var inst_32007 = (state_32033[(14)]);var inst_31993 = (state_32033[(16)]);var inst_32007__$1 = inst_31988.call(null,inst_31993);var state_32033__$1 = (function (){var statearr_32051 = state_32033;(statearr_32051[(14)] = inst_32007__$1);
return statearr_32051;
})();if(cljs.core.truth_(inst_32007__$1))
{var statearr_32052_32093 = state_32033__$1;(statearr_32052_32093[(1)] = (17));
} else
{var statearr_32053_32094 = state_32033__$1;(statearr_32053_32094[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (2)))
{var inst_31967 = (state_32033[(9)]);var inst_31970 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31967);var state_32033__$1 = state_32033;var statearr_32054_32095 = state_32033__$1;(statearr_32054_32095[(2)] = inst_31970);
(statearr_32054_32095[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (23)))
{var inst_32018 = (state_32033[(2)]);var state_32033__$1 = state_32033;if(cljs.core.truth_(inst_32018))
{var statearr_32055_32096 = state_32033__$1;(statearr_32055_32096[(1)] = (24));
} else
{var statearr_32056_32097 = state_32033__$1;(statearr_32056_32097[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (19)))
{var inst_32015 = (state_32033[(2)]);var state_32033__$1 = state_32033;if(cljs.core.truth_(inst_32015))
{var statearr_32057_32098 = state_32033__$1;(statearr_32057_32098[(1)] = (20));
} else
{var statearr_32058_32099 = state_32033__$1;(statearr_32058_32099[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (11)))
{var inst_31992 = (state_32033[(8)]);var inst_31998 = (inst_31992 == null);var state_32033__$1 = state_32033;if(cljs.core.truth_(inst_31998))
{var statearr_32059_32100 = state_32033__$1;(statearr_32059_32100[(1)] = (14));
} else
{var statearr_32060_32101 = state_32033__$1;(statearr_32060_32101[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (9)))
{var inst_31985 = (state_32033[(10)]);var inst_31985__$1 = (state_32033[(2)]);var inst_31986 = cljs.core.get.call(null,inst_31985__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_31987 = cljs.core.get.call(null,inst_31985__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_31988 = cljs.core.get.call(null,inst_31985__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_32033__$1 = (function (){var statearr_32061 = state_32033;(statearr_32061[(15)] = inst_31988);
(statearr_32061[(17)] = inst_31987);
(statearr_32061[(10)] = inst_31985__$1);
return statearr_32061;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_32033__$1,(10),inst_31986);
} else
{if((state_val_32034 === (5)))
{var inst_31977 = (state_32033[(7)]);var inst_31980 = cljs.core.seq_QMARK_.call(null,inst_31977);var state_32033__$1 = state_32033;if(inst_31980)
{var statearr_32062_32102 = state_32033__$1;(statearr_32062_32102[(1)] = (7));
} else
{var statearr_32063_32103 = state_32033__$1;(statearr_32063_32103[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (14)))
{var inst_31993 = (state_32033[(16)]);var inst_32000 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31993);var state_32033__$1 = state_32033;var statearr_32064_32104 = state_32033__$1;(statearr_32064_32104[(2)] = inst_32000);
(statearr_32064_32104[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (26)))
{var inst_32023 = (state_32033[(2)]);var state_32033__$1 = state_32033;var statearr_32065_32105 = state_32033__$1;(statearr_32065_32105[(2)] = inst_32023);
(statearr_32065_32105[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (16)))
{var inst_32003 = (state_32033[(2)]);var inst_32004 = calc_state.call(null);var inst_31977 = inst_32004;var state_32033__$1 = (function (){var statearr_32066 = state_32033;(statearr_32066[(18)] = inst_32003);
(statearr_32066[(7)] = inst_31977);
return statearr_32066;
})();var statearr_32067_32106 = state_32033__$1;(statearr_32067_32106[(2)] = null);
(statearr_32067_32106[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (10)))
{var inst_31992 = (state_32033[(8)]);var inst_31993 = (state_32033[(16)]);var inst_31991 = (state_32033[(2)]);var inst_31992__$1 = cljs.core.nth.call(null,inst_31991,(0),null);var inst_31993__$1 = cljs.core.nth.call(null,inst_31991,(1),null);var inst_31994 = (inst_31992__$1 == null);var inst_31995 = cljs.core._EQ_.call(null,inst_31993__$1,change);var inst_31996 = (inst_31994) || (inst_31995);var state_32033__$1 = (function (){var statearr_32068 = state_32033;(statearr_32068[(8)] = inst_31992__$1);
(statearr_32068[(16)] = inst_31993__$1);
return statearr_32068;
})();if(cljs.core.truth_(inst_31996))
{var statearr_32069_32107 = state_32033__$1;(statearr_32069_32107[(1)] = (11));
} else
{var statearr_32070_32108 = state_32033__$1;(statearr_32070_32108[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (18)))
{var inst_31988 = (state_32033[(15)]);var inst_31987 = (state_32033[(17)]);var inst_31993 = (state_32033[(16)]);var inst_32010 = cljs.core.empty_QMARK_.call(null,inst_31988);var inst_32011 = inst_31987.call(null,inst_31993);var inst_32012 = cljs.core.not.call(null,inst_32011);var inst_32013 = (inst_32010) && (inst_32012);var state_32033__$1 = state_32033;var statearr_32071_32109 = state_32033__$1;(statearr_32071_32109[(2)] = inst_32013);
(statearr_32071_32109[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32034 === (8)))
{var inst_31977 = (state_32033[(7)]);var state_32033__$1 = state_32033;var statearr_32072_32110 = state_32033__$1;(statearr_32072_32110[(2)] = inst_31977);
(statearr_32072_32110[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__16388__auto__,c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32076[(0)] = state_machine__16389__auto__);
(statearr_32076[(1)] = (1));
return statearr_32076;
});
var state_machine__16389__auto____1 = (function (state_32033){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32033);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32077){if((e32077 instanceof Object))
{var ex__16392__auto__ = e32077;var statearr_32078_32111 = state_32033;(statearr_32078_32111[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32077;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32112 = state_32033;
state_32033 = G__32112;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__16446__auto__ = (function (){var statearr_32079 = f__16445__auto__.call(null);(statearr_32079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32080);
return statearr_32079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj32114 = {};return obj32114;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12574__auto__ = p;if(and__12574__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12574__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13223__auto__ = (((p == null))?null:p);return (function (){var or__12586__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12574__auto__ = p;if(and__12574__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12574__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__13223__auto__ = (((p == null))?null:p);return (function (){var or__12586__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12574__auto__ = p;if(and__12574__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12574__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__13223__auto__ = (((p == null))?null:p);return (function (){var or__12586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12574__auto__ = p;if(and__12574__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12574__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__13223__auto__ = (((p == null))?null:p);return (function (){var or__12586__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13223__auto__)]);if(or__12586__auto__)
{return or__12586__auto__;
} else
{var or__12586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12586__auto____$1)
{return or__12586__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__12586__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12586__auto__,mults){
return (function (p1__32115_SHARP_){if(cljs.core.truth_(p1__32115_SHARP_.call(null,topic)))
{return p1__32115_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32115_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12586__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32238 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32239){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32239 = meta32239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32238.cljs$lang$type = true;
cljs.core.async.t32238.cljs$lang$ctorStr = "cljs.core.async/t32238";
cljs.core.async.t32238.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t32238");
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32238.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32240){var self__ = this;
var _32240__$1 = this;return self__.meta32239;
});})(mults,ensure_mult))
;
cljs.core.async.t32238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32240,meta32239__$1){var self__ = this;
var _32240__$1 = this;return (new cljs.core.async.t32238(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32239__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32238 = ((function (mults,ensure_mult){
return (function __GT_t32238(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32239){return (new cljs.core.async.t32238(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32239));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32238(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16444__auto___32360 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32360,mults,ensure_mult,p){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32360,mults,ensure_mult,p){
return (function (state_32312){var state_val_32313 = (state_32312[(1)]);if((state_val_32313 === (7)))
{var inst_32308 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32314_32361 = state_32312__$1;(statearr_32314_32361[(2)] = inst_32308);
(statearr_32314_32361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (20)))
{var state_32312__$1 = state_32312;var statearr_32315_32362 = state_32312__$1;(statearr_32315_32362[(2)] = null);
(statearr_32315_32362[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (1)))
{var state_32312__$1 = state_32312;var statearr_32316_32363 = state_32312__$1;(statearr_32316_32363[(2)] = null);
(statearr_32316_32363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (24)))
{var inst_32291 = (state_32312[(7)]);var inst_32300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32291);var state_32312__$1 = state_32312;var statearr_32317_32364 = state_32312__$1;(statearr_32317_32364[(2)] = inst_32300);
(statearr_32317_32364[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (4)))
{var inst_32243 = (state_32312[(8)]);var inst_32243__$1 = (state_32312[(2)]);var inst_32244 = (inst_32243__$1 == null);var state_32312__$1 = (function (){var statearr_32318 = state_32312;(statearr_32318[(8)] = inst_32243__$1);
return statearr_32318;
})();if(cljs.core.truth_(inst_32244))
{var statearr_32319_32365 = state_32312__$1;(statearr_32319_32365[(1)] = (5));
} else
{var statearr_32320_32366 = state_32312__$1;(statearr_32320_32366[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (15)))
{var inst_32285 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32321_32367 = state_32312__$1;(statearr_32321_32367[(2)] = inst_32285);
(statearr_32321_32367[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (21)))
{var inst_32305 = (state_32312[(2)]);var state_32312__$1 = (function (){var statearr_32322 = state_32312;(statearr_32322[(9)] = inst_32305);
return statearr_32322;
})();var statearr_32323_32368 = state_32312__$1;(statearr_32323_32368[(2)] = null);
(statearr_32323_32368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (13)))
{var inst_32267 = (state_32312[(10)]);var inst_32269 = cljs.core.chunked_seq_QMARK_.call(null,inst_32267);var state_32312__$1 = state_32312;if(inst_32269)
{var statearr_32324_32369 = state_32312__$1;(statearr_32324_32369[(1)] = (16));
} else
{var statearr_32325_32370 = state_32312__$1;(statearr_32325_32370[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (22)))
{var inst_32297 = (state_32312[(2)]);var state_32312__$1 = state_32312;if(cljs.core.truth_(inst_32297))
{var statearr_32326_32371 = state_32312__$1;(statearr_32326_32371[(1)] = (23));
} else
{var statearr_32327_32372 = state_32312__$1;(statearr_32327_32372[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (6)))
{var inst_32291 = (state_32312[(7)]);var inst_32243 = (state_32312[(8)]);var inst_32293 = (state_32312[(11)]);var inst_32291__$1 = topic_fn.call(null,inst_32243);var inst_32292 = cljs.core.deref.call(null,mults);var inst_32293__$1 = cljs.core.get.call(null,inst_32292,inst_32291__$1);var state_32312__$1 = (function (){var statearr_32328 = state_32312;(statearr_32328[(7)] = inst_32291__$1);
(statearr_32328[(11)] = inst_32293__$1);
return statearr_32328;
})();if(cljs.core.truth_(inst_32293__$1))
{var statearr_32329_32373 = state_32312__$1;(statearr_32329_32373[(1)] = (19));
} else
{var statearr_32330_32374 = state_32312__$1;(statearr_32330_32374[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (25)))
{var inst_32302 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32331_32375 = state_32312__$1;(statearr_32331_32375[(2)] = inst_32302);
(statearr_32331_32375[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (17)))
{var inst_32267 = (state_32312[(10)]);var inst_32276 = cljs.core.first.call(null,inst_32267);var inst_32277 = cljs.core.async.muxch_STAR_.call(null,inst_32276);var inst_32278 = cljs.core.async.close_BANG_.call(null,inst_32277);var inst_32279 = cljs.core.next.call(null,inst_32267);var inst_32253 = inst_32279;var inst_32254 = null;var inst_32255 = (0);var inst_32256 = (0);var state_32312__$1 = (function (){var statearr_32332 = state_32312;(statearr_32332[(12)] = inst_32253);
(statearr_32332[(13)] = inst_32255);
(statearr_32332[(14)] = inst_32256);
(statearr_32332[(15)] = inst_32254);
(statearr_32332[(16)] = inst_32278);
return statearr_32332;
})();var statearr_32333_32376 = state_32312__$1;(statearr_32333_32376[(2)] = null);
(statearr_32333_32376[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (3)))
{var inst_32310 = (state_32312[(2)]);var state_32312__$1 = state_32312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32312__$1,inst_32310);
} else
{if((state_val_32313 === (12)))
{var inst_32287 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32334_32377 = state_32312__$1;(statearr_32334_32377[(2)] = inst_32287);
(statearr_32334_32377[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (2)))
{var state_32312__$1 = state_32312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32312__$1,(4),ch);
} else
{if((state_val_32313 === (23)))
{var state_32312__$1 = state_32312;var statearr_32335_32378 = state_32312__$1;(statearr_32335_32378[(2)] = null);
(statearr_32335_32378[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (19)))
{var inst_32243 = (state_32312[(8)]);var inst_32293 = (state_32312[(11)]);var inst_32295 = cljs.core.async.muxch_STAR_.call(null,inst_32293);var state_32312__$1 = state_32312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32312__$1,(22),inst_32295,inst_32243);
} else
{if((state_val_32313 === (11)))
{var inst_32253 = (state_32312[(12)]);var inst_32267 = (state_32312[(10)]);var inst_32267__$1 = cljs.core.seq.call(null,inst_32253);var state_32312__$1 = (function (){var statearr_32336 = state_32312;(statearr_32336[(10)] = inst_32267__$1);
return statearr_32336;
})();if(inst_32267__$1)
{var statearr_32337_32379 = state_32312__$1;(statearr_32337_32379[(1)] = (13));
} else
{var statearr_32338_32380 = state_32312__$1;(statearr_32338_32380[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (9)))
{var inst_32289 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32339_32381 = state_32312__$1;(statearr_32339_32381[(2)] = inst_32289);
(statearr_32339_32381[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (5)))
{var inst_32250 = cljs.core.deref.call(null,mults);var inst_32251 = cljs.core.vals.call(null,inst_32250);var inst_32252 = cljs.core.seq.call(null,inst_32251);var inst_32253 = inst_32252;var inst_32254 = null;var inst_32255 = (0);var inst_32256 = (0);var state_32312__$1 = (function (){var statearr_32340 = state_32312;(statearr_32340[(12)] = inst_32253);
(statearr_32340[(13)] = inst_32255);
(statearr_32340[(14)] = inst_32256);
(statearr_32340[(15)] = inst_32254);
return statearr_32340;
})();var statearr_32341_32382 = state_32312__$1;(statearr_32341_32382[(2)] = null);
(statearr_32341_32382[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (14)))
{var state_32312__$1 = state_32312;var statearr_32345_32383 = state_32312__$1;(statearr_32345_32383[(2)] = null);
(statearr_32345_32383[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (16)))
{var inst_32267 = (state_32312[(10)]);var inst_32271 = cljs.core.chunk_first.call(null,inst_32267);var inst_32272 = cljs.core.chunk_rest.call(null,inst_32267);var inst_32273 = cljs.core.count.call(null,inst_32271);var inst_32253 = inst_32272;var inst_32254 = inst_32271;var inst_32255 = inst_32273;var inst_32256 = (0);var state_32312__$1 = (function (){var statearr_32346 = state_32312;(statearr_32346[(12)] = inst_32253);
(statearr_32346[(13)] = inst_32255);
(statearr_32346[(14)] = inst_32256);
(statearr_32346[(15)] = inst_32254);
return statearr_32346;
})();var statearr_32347_32384 = state_32312__$1;(statearr_32347_32384[(2)] = null);
(statearr_32347_32384[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (10)))
{var inst_32253 = (state_32312[(12)]);var inst_32255 = (state_32312[(13)]);var inst_32256 = (state_32312[(14)]);var inst_32254 = (state_32312[(15)]);var inst_32261 = cljs.core._nth.call(null,inst_32254,inst_32256);var inst_32262 = cljs.core.async.muxch_STAR_.call(null,inst_32261);var inst_32263 = cljs.core.async.close_BANG_.call(null,inst_32262);var inst_32264 = (inst_32256 + (1));var tmp32342 = inst_32253;var tmp32343 = inst_32255;var tmp32344 = inst_32254;var inst_32253__$1 = tmp32342;var inst_32254__$1 = tmp32344;var inst_32255__$1 = tmp32343;var inst_32256__$1 = inst_32264;var state_32312__$1 = (function (){var statearr_32348 = state_32312;(statearr_32348[(12)] = inst_32253__$1);
(statearr_32348[(13)] = inst_32255__$1);
(statearr_32348[(17)] = inst_32263);
(statearr_32348[(14)] = inst_32256__$1);
(statearr_32348[(15)] = inst_32254__$1);
return statearr_32348;
})();var statearr_32349_32385 = state_32312__$1;(statearr_32349_32385[(2)] = null);
(statearr_32349_32385[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (18)))
{var inst_32282 = (state_32312[(2)]);var state_32312__$1 = state_32312;var statearr_32350_32386 = state_32312__$1;(statearr_32350_32386[(2)] = inst_32282);
(statearr_32350_32386[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32313 === (8)))
{var inst_32255 = (state_32312[(13)]);var inst_32256 = (state_32312[(14)]);var inst_32258 = (inst_32256 < inst_32255);var inst_32259 = inst_32258;var state_32312__$1 = state_32312;if(cljs.core.truth_(inst_32259))
{var statearr_32351_32387 = state_32312__$1;(statearr_32351_32387[(1)] = (10));
} else
{var statearr_32352_32388 = state_32312__$1;(statearr_32352_32388[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32360,mults,ensure_mult,p))
;return ((function (switch__16388__auto__,c__16444__auto___32360,mults,ensure_mult,p){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32356[(0)] = state_machine__16389__auto__);
(statearr_32356[(1)] = (1));
return statearr_32356;
});
var state_machine__16389__auto____1 = (function (state_32312){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32312);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object))
{var ex__16392__auto__ = e32357;var statearr_32358_32389 = state_32312;(statearr_32358_32389[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32357;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32390 = state_32312;
state_32312 = G__32390;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32360,mults,ensure_mult,p))
})();var state__16446__auto__ = (function (){var statearr_32359 = f__16445__auto__.call(null);(statearr_32359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32360);
return statearr_32359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32360,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__16444__auto___32527 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32497){var state_val_32498 = (state_32497[(1)]);if((state_val_32498 === (7)))
{var state_32497__$1 = state_32497;var statearr_32499_32528 = state_32497__$1;(statearr_32499_32528[(2)] = null);
(statearr_32499_32528[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (1)))
{var state_32497__$1 = state_32497;var statearr_32500_32529 = state_32497__$1;(statearr_32500_32529[(2)] = null);
(statearr_32500_32529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (4)))
{var inst_32461 = (state_32497[(7)]);var inst_32463 = (inst_32461 < cnt);var state_32497__$1 = state_32497;if(cljs.core.truth_(inst_32463))
{var statearr_32501_32530 = state_32497__$1;(statearr_32501_32530[(1)] = (6));
} else
{var statearr_32502_32531 = state_32497__$1;(statearr_32502_32531[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (15)))
{var inst_32493 = (state_32497[(2)]);var state_32497__$1 = state_32497;var statearr_32503_32532 = state_32497__$1;(statearr_32503_32532[(2)] = inst_32493);
(statearr_32503_32532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (13)))
{var inst_32486 = cljs.core.async.close_BANG_.call(null,out);var state_32497__$1 = state_32497;var statearr_32504_32533 = state_32497__$1;(statearr_32504_32533[(2)] = inst_32486);
(statearr_32504_32533[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (6)))
{var state_32497__$1 = state_32497;var statearr_32505_32534 = state_32497__$1;(statearr_32505_32534[(2)] = null);
(statearr_32505_32534[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (3)))
{var inst_32495 = (state_32497[(2)]);var state_32497__$1 = state_32497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32497__$1,inst_32495);
} else
{if((state_val_32498 === (12)))
{var inst_32483 = (state_32497[(8)]);var inst_32483__$1 = (state_32497[(2)]);var inst_32484 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32483__$1);var state_32497__$1 = (function (){var statearr_32506 = state_32497;(statearr_32506[(8)] = inst_32483__$1);
return statearr_32506;
})();if(cljs.core.truth_(inst_32484))
{var statearr_32507_32535 = state_32497__$1;(statearr_32507_32535[(1)] = (13));
} else
{var statearr_32508_32536 = state_32497__$1;(statearr_32508_32536[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (2)))
{var inst_32460 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32461 = (0);var state_32497__$1 = (function (){var statearr_32509 = state_32497;(statearr_32509[(9)] = inst_32460);
(statearr_32509[(7)] = inst_32461);
return statearr_32509;
})();var statearr_32510_32537 = state_32497__$1;(statearr_32510_32537[(2)] = null);
(statearr_32510_32537[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (11)))
{var inst_32461 = (state_32497[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32497,(10),Object,null,(9));var inst_32470 = chs__$1.call(null,inst_32461);var inst_32471 = done.call(null,inst_32461);var inst_32472 = cljs.core.async.take_BANG_.call(null,inst_32470,inst_32471);var state_32497__$1 = state_32497;var statearr_32511_32538 = state_32497__$1;(statearr_32511_32538[(2)] = inst_32472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32497__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (9)))
{var inst_32461 = (state_32497[(7)]);var inst_32474 = (state_32497[(2)]);var inst_32475 = (inst_32461 + (1));var inst_32461__$1 = inst_32475;var state_32497__$1 = (function (){var statearr_32512 = state_32497;(statearr_32512[(10)] = inst_32474);
(statearr_32512[(7)] = inst_32461__$1);
return statearr_32512;
})();var statearr_32513_32539 = state_32497__$1;(statearr_32513_32539[(2)] = null);
(statearr_32513_32539[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (5)))
{var inst_32481 = (state_32497[(2)]);var state_32497__$1 = (function (){var statearr_32514 = state_32497;(statearr_32514[(11)] = inst_32481);
return statearr_32514;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32497__$1,(12),dchan);
} else
{if((state_val_32498 === (14)))
{var inst_32483 = (state_32497[(8)]);var inst_32488 = cljs.core.apply.call(null,f,inst_32483);var state_32497__$1 = state_32497;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32497__$1,(16),out,inst_32488);
} else
{if((state_val_32498 === (16)))
{var inst_32490 = (state_32497[(2)]);var state_32497__$1 = (function (){var statearr_32515 = state_32497;(statearr_32515[(12)] = inst_32490);
return statearr_32515;
})();var statearr_32516_32540 = state_32497__$1;(statearr_32516_32540[(2)] = null);
(statearr_32516_32540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (10)))
{var inst_32465 = (state_32497[(2)]);var inst_32466 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32497__$1 = (function (){var statearr_32517 = state_32497;(statearr_32517[(13)] = inst_32465);
return statearr_32517;
})();var statearr_32518_32541 = state_32497__$1;(statearr_32518_32541[(2)] = inst_32466);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32497__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32498 === (8)))
{var inst_32479 = (state_32497[(2)]);var state_32497__$1 = state_32497;var statearr_32519_32542 = state_32497__$1;(statearr_32519_32542[(2)] = inst_32479);
(statearr_32519_32542[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__16388__auto__,c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32523[(0)] = state_machine__16389__auto__);
(statearr_32523[(1)] = (1));
return statearr_32523;
});
var state_machine__16389__auto____1 = (function (state_32497){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32497);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32524){if((e32524 instanceof Object))
{var ex__16392__auto__ = e32524;var statearr_32525_32543 = state_32497;(statearr_32525_32543[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32544 = state_32497;
state_32497 = G__32544;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32497){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__16446__auto__ = (function (){var statearr_32526 = f__16445__auto__.call(null);(statearr_32526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32527);
return statearr_32526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32527,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___32652 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32652,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32652,out){
return (function (state_32628){var state_val_32629 = (state_32628[(1)]);if((state_val_32629 === (7)))
{var inst_32608 = (state_32628[(7)]);var inst_32607 = (state_32628[(8)]);var inst_32607__$1 = (state_32628[(2)]);var inst_32608__$1 = cljs.core.nth.call(null,inst_32607__$1,(0),null);var inst_32609 = cljs.core.nth.call(null,inst_32607__$1,(1),null);var inst_32610 = (inst_32608__$1 == null);var state_32628__$1 = (function (){var statearr_32630 = state_32628;(statearr_32630[(9)] = inst_32609);
(statearr_32630[(7)] = inst_32608__$1);
(statearr_32630[(8)] = inst_32607__$1);
return statearr_32630;
})();if(cljs.core.truth_(inst_32610))
{var statearr_32631_32653 = state_32628__$1;(statearr_32631_32653[(1)] = (8));
} else
{var statearr_32632_32654 = state_32628__$1;(statearr_32632_32654[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (1)))
{var inst_32599 = cljs.core.vec.call(null,chs);var inst_32600 = inst_32599;var state_32628__$1 = (function (){var statearr_32633 = state_32628;(statearr_32633[(10)] = inst_32600);
return statearr_32633;
})();var statearr_32634_32655 = state_32628__$1;(statearr_32634_32655[(2)] = null);
(statearr_32634_32655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (4)))
{var inst_32600 = (state_32628[(10)]);var state_32628__$1 = state_32628;return cljs.core.async.ioc_alts_BANG_.call(null,state_32628__$1,(7),inst_32600);
} else
{if((state_val_32629 === (6)))
{var inst_32624 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32635_32656 = state_32628__$1;(statearr_32635_32656[(2)] = inst_32624);
(statearr_32635_32656[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (3)))
{var inst_32626 = (state_32628[(2)]);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32628__$1,inst_32626);
} else
{if((state_val_32629 === (2)))
{var inst_32600 = (state_32628[(10)]);var inst_32602 = cljs.core.count.call(null,inst_32600);var inst_32603 = (inst_32602 > (0));var state_32628__$1 = state_32628;if(cljs.core.truth_(inst_32603))
{var statearr_32637_32657 = state_32628__$1;(statearr_32637_32657[(1)] = (4));
} else
{var statearr_32638_32658 = state_32628__$1;(statearr_32638_32658[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (11)))
{var inst_32600 = (state_32628[(10)]);var inst_32617 = (state_32628[(2)]);var tmp32636 = inst_32600;var inst_32600__$1 = tmp32636;var state_32628__$1 = (function (){var statearr_32639 = state_32628;(statearr_32639[(11)] = inst_32617);
(statearr_32639[(10)] = inst_32600__$1);
return statearr_32639;
})();var statearr_32640_32659 = state_32628__$1;(statearr_32640_32659[(2)] = null);
(statearr_32640_32659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (9)))
{var inst_32608 = (state_32628[(7)]);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32628__$1,(11),out,inst_32608);
} else
{if((state_val_32629 === (5)))
{var inst_32622 = cljs.core.async.close_BANG_.call(null,out);var state_32628__$1 = state_32628;var statearr_32641_32660 = state_32628__$1;(statearr_32641_32660[(2)] = inst_32622);
(statearr_32641_32660[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (10)))
{var inst_32620 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32642_32661 = state_32628__$1;(statearr_32642_32661[(2)] = inst_32620);
(statearr_32642_32661[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32629 === (8)))
{var inst_32609 = (state_32628[(9)]);var inst_32608 = (state_32628[(7)]);var inst_32607 = (state_32628[(8)]);var inst_32600 = (state_32628[(10)]);var inst_32612 = (function (){var c = inst_32609;var v = inst_32608;var vec__32605 = inst_32607;var cs = inst_32600;return ((function (c,v,vec__32605,cs,inst_32609,inst_32608,inst_32607,inst_32600,state_val_32629,c__16444__auto___32652,out){
return (function (p1__32545_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32545_SHARP_);
});
;})(c,v,vec__32605,cs,inst_32609,inst_32608,inst_32607,inst_32600,state_val_32629,c__16444__auto___32652,out))
})();var inst_32613 = cljs.core.filterv.call(null,inst_32612,inst_32600);var inst_32600__$1 = inst_32613;var state_32628__$1 = (function (){var statearr_32643 = state_32628;(statearr_32643[(10)] = inst_32600__$1);
return statearr_32643;
})();var statearr_32644_32662 = state_32628__$1;(statearr_32644_32662[(2)] = null);
(statearr_32644_32662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32652,out))
;return ((function (switch__16388__auto__,c__16444__auto___32652,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32648 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32648[(0)] = state_machine__16389__auto__);
(statearr_32648[(1)] = (1));
return statearr_32648;
});
var state_machine__16389__auto____1 = (function (state_32628){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32628);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32649){if((e32649 instanceof Object))
{var ex__16392__auto__ = e32649;var statearr_32650_32663 = state_32628;(statearr_32650_32663[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32664 = state_32628;
state_32628 = G__32664;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32652,out))
})();var state__16446__auto__ = (function (){var statearr_32651 = f__16445__auto__.call(null);(statearr_32651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32652);
return statearr_32651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32652,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___32757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32757,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32757,out){
return (function (state_32734){var state_val_32735 = (state_32734[(1)]);if((state_val_32735 === (7)))
{var inst_32716 = (state_32734[(7)]);var inst_32716__$1 = (state_32734[(2)]);var inst_32717 = (inst_32716__$1 == null);var inst_32718 = cljs.core.not.call(null,inst_32717);var state_32734__$1 = (function (){var statearr_32736 = state_32734;(statearr_32736[(7)] = inst_32716__$1);
return statearr_32736;
})();if(inst_32718)
{var statearr_32737_32758 = state_32734__$1;(statearr_32737_32758[(1)] = (8));
} else
{var statearr_32738_32759 = state_32734__$1;(statearr_32738_32759[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (1)))
{var inst_32711 = (0);var state_32734__$1 = (function (){var statearr_32739 = state_32734;(statearr_32739[(8)] = inst_32711);
return statearr_32739;
})();var statearr_32740_32760 = state_32734__$1;(statearr_32740_32760[(2)] = null);
(statearr_32740_32760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (4)))
{var state_32734__$1 = state_32734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32734__$1,(7),ch);
} else
{if((state_val_32735 === (6)))
{var inst_32729 = (state_32734[(2)]);var state_32734__$1 = state_32734;var statearr_32741_32761 = state_32734__$1;(statearr_32741_32761[(2)] = inst_32729);
(statearr_32741_32761[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (3)))
{var inst_32731 = (state_32734[(2)]);var inst_32732 = cljs.core.async.close_BANG_.call(null,out);var state_32734__$1 = (function (){var statearr_32742 = state_32734;(statearr_32742[(9)] = inst_32731);
return statearr_32742;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32734__$1,inst_32732);
} else
{if((state_val_32735 === (2)))
{var inst_32711 = (state_32734[(8)]);var inst_32713 = (inst_32711 < n);var state_32734__$1 = state_32734;if(cljs.core.truth_(inst_32713))
{var statearr_32743_32762 = state_32734__$1;(statearr_32743_32762[(1)] = (4));
} else
{var statearr_32744_32763 = state_32734__$1;(statearr_32744_32763[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (11)))
{var inst_32711 = (state_32734[(8)]);var inst_32721 = (state_32734[(2)]);var inst_32722 = (inst_32711 + (1));var inst_32711__$1 = inst_32722;var state_32734__$1 = (function (){var statearr_32745 = state_32734;(statearr_32745[(8)] = inst_32711__$1);
(statearr_32745[(10)] = inst_32721);
return statearr_32745;
})();var statearr_32746_32764 = state_32734__$1;(statearr_32746_32764[(2)] = null);
(statearr_32746_32764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (9)))
{var state_32734__$1 = state_32734;var statearr_32747_32765 = state_32734__$1;(statearr_32747_32765[(2)] = null);
(statearr_32747_32765[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (5)))
{var state_32734__$1 = state_32734;var statearr_32748_32766 = state_32734__$1;(statearr_32748_32766[(2)] = null);
(statearr_32748_32766[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (10)))
{var inst_32726 = (state_32734[(2)]);var state_32734__$1 = state_32734;var statearr_32749_32767 = state_32734__$1;(statearr_32749_32767[(2)] = inst_32726);
(statearr_32749_32767[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32735 === (8)))
{var inst_32716 = (state_32734[(7)]);var state_32734__$1 = state_32734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32734__$1,(11),out,inst_32716);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32757,out))
;return ((function (switch__16388__auto__,c__16444__auto___32757,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32753 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32753[(0)] = state_machine__16389__auto__);
(statearr_32753[(1)] = (1));
return statearr_32753;
});
var state_machine__16389__auto____1 = (function (state_32734){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32734);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32754){if((e32754 instanceof Object))
{var ex__16392__auto__ = e32754;var statearr_32755_32768 = state_32734;(statearr_32755_32768[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32769 = state_32734;
state_32734 = G__32769;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32734){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32757,out))
})();var state__16446__auto__ = (function (){var statearr_32756 = f__16445__auto__.call(null);(statearr_32756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32757);
return statearr_32756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32757,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32777 = (function (ch,f,map_LT_,meta32778){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32778 = meta32778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32777.cljs$lang$type = true;
cljs.core.async.t32777.cljs$lang$ctorStr = "cljs.core.async/t32777";
cljs.core.async.t32777.cljs$lang$ctorPrWriter = (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t32777");
});
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32780 = (function (fn1,_,meta32778,ch,f,map_LT_,meta32781){
this.fn1 = fn1;
this._ = _;
this.meta32778 = meta32778;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32781 = meta32781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32780.cljs$lang$type = true;
cljs.core.async.t32780.cljs$lang$ctorStr = "cljs.core.async/t32780";
cljs.core.async.t32780.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t32780");
});})(___$1))
;
cljs.core.async.t32780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t32780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__32770_SHARP_){return f1.call(null,(((p1__32770_SHARP_ == null))?null:self__.f.call(null,p1__32770_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t32780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32782){var self__ = this;
var _32782__$1 = this;return self__.meta32781;
});})(___$1))
;
cljs.core.async.t32780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32782,meta32781__$1){var self__ = this;
var _32782__$1 = this;return (new cljs.core.async.t32780(self__.fn1,self__._,self__.meta32778,self__.ch,self__.f,self__.map_LT_,meta32781__$1));
});})(___$1))
;
cljs.core.async.__GT_t32780 = ((function (___$1){
return (function __GT_t32780(fn1__$1,___$2,meta32778__$1,ch__$2,f__$2,map_LT___$2,meta32781){return (new cljs.core.async.t32780(fn1__$1,___$2,meta32778__$1,ch__$2,f__$2,map_LT___$2,meta32781));
});})(___$1))
;
}
return (new cljs.core.async.t32780(fn1,___$1,self__.meta32778,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12574__auto__ = ret;if(cljs.core.truth_(and__12574__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12574__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t32777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32779){var self__ = this;
var _32779__$1 = this;return self__.meta32778;
});
cljs.core.async.t32777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32779,meta32778__$1){var self__ = this;
var _32779__$1 = this;return (new cljs.core.async.t32777(self__.ch,self__.f,self__.map_LT_,meta32778__$1));
});
cljs.core.async.__GT_t32777 = (function __GT_t32777(ch__$1,f__$1,map_LT___$1,meta32778){return (new cljs.core.async.t32777(ch__$1,f__$1,map_LT___$1,meta32778));
});
}
return (new cljs.core.async.t32777(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32786 = (function (ch,f,map_GT_,meta32787){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32787 = meta32787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32786.cljs$lang$type = true;
cljs.core.async.t32786.cljs$lang$ctorStr = "cljs.core.async/t32786";
cljs.core.async.t32786.cljs$lang$ctorPrWriter = (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t32786");
});
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32788){var self__ = this;
var _32788__$1 = this;return self__.meta32787;
});
cljs.core.async.t32786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32788,meta32787__$1){var self__ = this;
var _32788__$1 = this;return (new cljs.core.async.t32786(self__.ch,self__.f,self__.map_GT_,meta32787__$1));
});
cljs.core.async.__GT_t32786 = (function __GT_t32786(ch__$1,f__$1,map_GT___$1,meta32787){return (new cljs.core.async.t32786(ch__$1,f__$1,map_GT___$1,meta32787));
});
}
return (new cljs.core.async.t32786(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32792 = (function (ch,p,filter_GT_,meta32793){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32793 = meta32793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32792.cljs$lang$type = true;
cljs.core.async.t32792.cljs$lang$ctorStr = "cljs.core.async/t32792";
cljs.core.async.t32792.cljs$lang$ctorPrWriter = (function (this__13163__auto__,writer__13164__auto__,opt__13165__auto__){return cljs.core._write.call(null,writer__13164__auto__,"cljs.core.async/t32792");
});
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t32792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32794){var self__ = this;
var _32794__$1 = this;return self__.meta32793;
});
cljs.core.async.t32792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32794,meta32793__$1){var self__ = this;
var _32794__$1 = this;return (new cljs.core.async.t32792(self__.ch,self__.p,self__.filter_GT_,meta32793__$1));
});
cljs.core.async.__GT_t32792 = (function __GT_t32792(ch__$1,p__$1,filter_GT___$1,meta32793){return (new cljs.core.async.t32792(ch__$1,p__$1,filter_GT___$1,meta32793));
});
}
return (new cljs.core.async.t32792(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___32877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___32877,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___32877,out){
return (function (state_32856){var state_val_32857 = (state_32856[(1)]);if((state_val_32857 === (7)))
{var inst_32852 = (state_32856[(2)]);var state_32856__$1 = state_32856;var statearr_32858_32878 = state_32856__$1;(statearr_32858_32878[(2)] = inst_32852);
(statearr_32858_32878[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (1)))
{var state_32856__$1 = state_32856;var statearr_32859_32879 = state_32856__$1;(statearr_32859_32879[(2)] = null);
(statearr_32859_32879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (4)))
{var inst_32838 = (state_32856[(7)]);var inst_32838__$1 = (state_32856[(2)]);var inst_32839 = (inst_32838__$1 == null);var state_32856__$1 = (function (){var statearr_32860 = state_32856;(statearr_32860[(7)] = inst_32838__$1);
return statearr_32860;
})();if(cljs.core.truth_(inst_32839))
{var statearr_32861_32880 = state_32856__$1;(statearr_32861_32880[(1)] = (5));
} else
{var statearr_32862_32881 = state_32856__$1;(statearr_32862_32881[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (6)))
{var inst_32838 = (state_32856[(7)]);var inst_32843 = p.call(null,inst_32838);var state_32856__$1 = state_32856;if(cljs.core.truth_(inst_32843))
{var statearr_32863_32882 = state_32856__$1;(statearr_32863_32882[(1)] = (8));
} else
{var statearr_32864_32883 = state_32856__$1;(statearr_32864_32883[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (3)))
{var inst_32854 = (state_32856[(2)]);var state_32856__$1 = state_32856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32856__$1,inst_32854);
} else
{if((state_val_32857 === (2)))
{var state_32856__$1 = state_32856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32856__$1,(4),ch);
} else
{if((state_val_32857 === (11)))
{var inst_32846 = (state_32856[(2)]);var state_32856__$1 = state_32856;var statearr_32865_32884 = state_32856__$1;(statearr_32865_32884[(2)] = inst_32846);
(statearr_32865_32884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (9)))
{var state_32856__$1 = state_32856;var statearr_32866_32885 = state_32856__$1;(statearr_32866_32885[(2)] = null);
(statearr_32866_32885[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (5)))
{var inst_32841 = cljs.core.async.close_BANG_.call(null,out);var state_32856__$1 = state_32856;var statearr_32867_32886 = state_32856__$1;(statearr_32867_32886[(2)] = inst_32841);
(statearr_32867_32886[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (10)))
{var inst_32849 = (state_32856[(2)]);var state_32856__$1 = (function (){var statearr_32868 = state_32856;(statearr_32868[(8)] = inst_32849);
return statearr_32868;
})();var statearr_32869_32887 = state_32856__$1;(statearr_32869_32887[(2)] = null);
(statearr_32869_32887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32857 === (8)))
{var inst_32838 = (state_32856[(7)]);var state_32856__$1 = state_32856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32856__$1,(11),out,inst_32838);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___32877,out))
;return ((function (switch__16388__auto__,c__16444__auto___32877,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_32873 = [null,null,null,null,null,null,null,null,null];(statearr_32873[(0)] = state_machine__16389__auto__);
(statearr_32873[(1)] = (1));
return statearr_32873;
});
var state_machine__16389__auto____1 = (function (state_32856){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_32856);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e32874){if((e32874 instanceof Object))
{var ex__16392__auto__ = e32874;var statearr_32875_32888 = state_32856;(statearr_32875_32888[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32889 = state_32856;
state_32856 = G__32889;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_32856){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_32856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___32877,out))
})();var state__16446__auto__ = (function (){var statearr_32876 = f__16445__auto__.call(null);(statearr_32876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___32877);
return statearr_32876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___32877,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__){
return (function (state_33055){var state_val_33056 = (state_33055[(1)]);if((state_val_33056 === (7)))
{var inst_33051 = (state_33055[(2)]);var state_33055__$1 = state_33055;var statearr_33057_33098 = state_33055__$1;(statearr_33057_33098[(2)] = inst_33051);
(statearr_33057_33098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (20)))
{var inst_33021 = (state_33055[(7)]);var inst_33032 = (state_33055[(2)]);var inst_33033 = cljs.core.next.call(null,inst_33021);var inst_33007 = inst_33033;var inst_33008 = null;var inst_33009 = (0);var inst_33010 = (0);var state_33055__$1 = (function (){var statearr_33058 = state_33055;(statearr_33058[(8)] = inst_33032);
(statearr_33058[(9)] = inst_33008);
(statearr_33058[(10)] = inst_33009);
(statearr_33058[(11)] = inst_33010);
(statearr_33058[(12)] = inst_33007);
return statearr_33058;
})();var statearr_33059_33099 = state_33055__$1;(statearr_33059_33099[(2)] = null);
(statearr_33059_33099[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (1)))
{var state_33055__$1 = state_33055;var statearr_33060_33100 = state_33055__$1;(statearr_33060_33100[(2)] = null);
(statearr_33060_33100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (4)))
{var inst_32996 = (state_33055[(13)]);var inst_32996__$1 = (state_33055[(2)]);var inst_32997 = (inst_32996__$1 == null);var state_33055__$1 = (function (){var statearr_33061 = state_33055;(statearr_33061[(13)] = inst_32996__$1);
return statearr_33061;
})();if(cljs.core.truth_(inst_32997))
{var statearr_33062_33101 = state_33055__$1;(statearr_33062_33101[(1)] = (5));
} else
{var statearr_33063_33102 = state_33055__$1;(statearr_33063_33102[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (15)))
{var state_33055__$1 = state_33055;var statearr_33067_33103 = state_33055__$1;(statearr_33067_33103[(2)] = null);
(statearr_33067_33103[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (21)))
{var state_33055__$1 = state_33055;var statearr_33068_33104 = state_33055__$1;(statearr_33068_33104[(2)] = null);
(statearr_33068_33104[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (13)))
{var inst_33008 = (state_33055[(9)]);var inst_33009 = (state_33055[(10)]);var inst_33010 = (state_33055[(11)]);var inst_33007 = (state_33055[(12)]);var inst_33017 = (state_33055[(2)]);var inst_33018 = (inst_33010 + (1));var tmp33064 = inst_33008;var tmp33065 = inst_33009;var tmp33066 = inst_33007;var inst_33007__$1 = tmp33066;var inst_33008__$1 = tmp33064;var inst_33009__$1 = tmp33065;var inst_33010__$1 = inst_33018;var state_33055__$1 = (function (){var statearr_33069 = state_33055;(statearr_33069[(9)] = inst_33008__$1);
(statearr_33069[(10)] = inst_33009__$1);
(statearr_33069[(11)] = inst_33010__$1);
(statearr_33069[(14)] = inst_33017);
(statearr_33069[(12)] = inst_33007__$1);
return statearr_33069;
})();var statearr_33070_33105 = state_33055__$1;(statearr_33070_33105[(2)] = null);
(statearr_33070_33105[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (22)))
{var state_33055__$1 = state_33055;var statearr_33071_33106 = state_33055__$1;(statearr_33071_33106[(2)] = null);
(statearr_33071_33106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (6)))
{var inst_32996 = (state_33055[(13)]);var inst_33005 = f.call(null,inst_32996);var inst_33006 = cljs.core.seq.call(null,inst_33005);var inst_33007 = inst_33006;var inst_33008 = null;var inst_33009 = (0);var inst_33010 = (0);var state_33055__$1 = (function (){var statearr_33072 = state_33055;(statearr_33072[(9)] = inst_33008);
(statearr_33072[(10)] = inst_33009);
(statearr_33072[(11)] = inst_33010);
(statearr_33072[(12)] = inst_33007);
return statearr_33072;
})();var statearr_33073_33107 = state_33055__$1;(statearr_33073_33107[(2)] = null);
(statearr_33073_33107[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (17)))
{var inst_33021 = (state_33055[(7)]);var inst_33025 = cljs.core.chunk_first.call(null,inst_33021);var inst_33026 = cljs.core.chunk_rest.call(null,inst_33021);var inst_33027 = cljs.core.count.call(null,inst_33025);var inst_33007 = inst_33026;var inst_33008 = inst_33025;var inst_33009 = inst_33027;var inst_33010 = (0);var state_33055__$1 = (function (){var statearr_33074 = state_33055;(statearr_33074[(9)] = inst_33008);
(statearr_33074[(10)] = inst_33009);
(statearr_33074[(11)] = inst_33010);
(statearr_33074[(12)] = inst_33007);
return statearr_33074;
})();var statearr_33075_33108 = state_33055__$1;(statearr_33075_33108[(2)] = null);
(statearr_33075_33108[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (3)))
{var inst_33053 = (state_33055[(2)]);var state_33055__$1 = state_33055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33055__$1,inst_33053);
} else
{if((state_val_33056 === (12)))
{var inst_33041 = (state_33055[(2)]);var state_33055__$1 = state_33055;var statearr_33076_33109 = state_33055__$1;(statearr_33076_33109[(2)] = inst_33041);
(statearr_33076_33109[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (2)))
{var state_33055__$1 = state_33055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33055__$1,(4),in$);
} else
{if((state_val_33056 === (23)))
{var inst_33049 = (state_33055[(2)]);var state_33055__$1 = state_33055;var statearr_33077_33110 = state_33055__$1;(statearr_33077_33110[(2)] = inst_33049);
(statearr_33077_33110[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (19)))
{var inst_33036 = (state_33055[(2)]);var state_33055__$1 = state_33055;var statearr_33078_33111 = state_33055__$1;(statearr_33078_33111[(2)] = inst_33036);
(statearr_33078_33111[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (11)))
{var inst_33021 = (state_33055[(7)]);var inst_33007 = (state_33055[(12)]);var inst_33021__$1 = cljs.core.seq.call(null,inst_33007);var state_33055__$1 = (function (){var statearr_33079 = state_33055;(statearr_33079[(7)] = inst_33021__$1);
return statearr_33079;
})();if(inst_33021__$1)
{var statearr_33080_33112 = state_33055__$1;(statearr_33080_33112[(1)] = (14));
} else
{var statearr_33081_33113 = state_33055__$1;(statearr_33081_33113[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (9)))
{var inst_33043 = (state_33055[(2)]);var inst_33044 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_33055__$1 = (function (){var statearr_33082 = state_33055;(statearr_33082[(15)] = inst_33043);
return statearr_33082;
})();if(cljs.core.truth_(inst_33044))
{var statearr_33083_33114 = state_33055__$1;(statearr_33083_33114[(1)] = (21));
} else
{var statearr_33084_33115 = state_33055__$1;(statearr_33084_33115[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (5)))
{var inst_32999 = cljs.core.async.close_BANG_.call(null,out);var state_33055__$1 = state_33055;var statearr_33085_33116 = state_33055__$1;(statearr_33085_33116[(2)] = inst_32999);
(statearr_33085_33116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (14)))
{var inst_33021 = (state_33055[(7)]);var inst_33023 = cljs.core.chunked_seq_QMARK_.call(null,inst_33021);var state_33055__$1 = state_33055;if(inst_33023)
{var statearr_33086_33117 = state_33055__$1;(statearr_33086_33117[(1)] = (17));
} else
{var statearr_33087_33118 = state_33055__$1;(statearr_33087_33118[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (16)))
{var inst_33039 = (state_33055[(2)]);var state_33055__$1 = state_33055;var statearr_33088_33119 = state_33055__$1;(statearr_33088_33119[(2)] = inst_33039);
(statearr_33088_33119[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33056 === (10)))
{var inst_33008 = (state_33055[(9)]);var inst_33010 = (state_33055[(11)]);var inst_33015 = cljs.core._nth.call(null,inst_33008,inst_33010);var state_33055__$1 = state_33055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33055__$1,(13),out,inst_33015);
} else
{if((state_val_33056 === (18)))
{var inst_33021 = (state_33055[(7)]);var inst_33030 = cljs.core.first.call(null,inst_33021);var state_33055__$1 = state_33055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33055__$1,(20),out,inst_33030);
} else
{if((state_val_33056 === (8)))
{var inst_33009 = (state_33055[(10)]);var inst_33010 = (state_33055[(11)]);var inst_33012 = (inst_33010 < inst_33009);var inst_33013 = inst_33012;var state_33055__$1 = state_33055;if(cljs.core.truth_(inst_33013))
{var statearr_33089_33120 = state_33055__$1;(statearr_33089_33120[(1)] = (10));
} else
{var statearr_33090_33121 = state_33055__$1;(statearr_33090_33121[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto__))
;return ((function (switch__16388__auto__,c__16444__auto__){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33094[(0)] = state_machine__16389__auto__);
(statearr_33094[(1)] = (1));
return statearr_33094;
});
var state_machine__16389__auto____1 = (function (state_33055){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33055);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33095){if((e33095 instanceof Object))
{var ex__16392__auto__ = e33095;var statearr_33096_33122 = state_33055;(statearr_33096_33122[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33123 = state_33055;
state_33055 = G__33123;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__))
})();var state__16446__auto__ = (function (){var statearr_33097 = f__16445__auto__.call(null);(statearr_33097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_33097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__))
);
return c__16444__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___33220 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___33220,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___33220,out){
return (function (state_33195){var state_val_33196 = (state_33195[(1)]);if((state_val_33196 === (7)))
{var inst_33190 = (state_33195[(2)]);var state_33195__$1 = state_33195;var statearr_33197_33221 = state_33195__$1;(statearr_33197_33221[(2)] = inst_33190);
(statearr_33197_33221[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (1)))
{var inst_33172 = null;var state_33195__$1 = (function (){var statearr_33198 = state_33195;(statearr_33198[(7)] = inst_33172);
return statearr_33198;
})();var statearr_33199_33222 = state_33195__$1;(statearr_33199_33222[(2)] = null);
(statearr_33199_33222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (4)))
{var inst_33175 = (state_33195[(8)]);var inst_33175__$1 = (state_33195[(2)]);var inst_33176 = (inst_33175__$1 == null);var inst_33177 = cljs.core.not.call(null,inst_33176);var state_33195__$1 = (function (){var statearr_33200 = state_33195;(statearr_33200[(8)] = inst_33175__$1);
return statearr_33200;
})();if(inst_33177)
{var statearr_33201_33223 = state_33195__$1;(statearr_33201_33223[(1)] = (5));
} else
{var statearr_33202_33224 = state_33195__$1;(statearr_33202_33224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (6)))
{var state_33195__$1 = state_33195;var statearr_33203_33225 = state_33195__$1;(statearr_33203_33225[(2)] = null);
(statearr_33203_33225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (3)))
{var inst_33192 = (state_33195[(2)]);var inst_33193 = cljs.core.async.close_BANG_.call(null,out);var state_33195__$1 = (function (){var statearr_33204 = state_33195;(statearr_33204[(9)] = inst_33192);
return statearr_33204;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33195__$1,inst_33193);
} else
{if((state_val_33196 === (2)))
{var state_33195__$1 = state_33195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33195__$1,(4),ch);
} else
{if((state_val_33196 === (11)))
{var inst_33175 = (state_33195[(8)]);var inst_33184 = (state_33195[(2)]);var inst_33172 = inst_33175;var state_33195__$1 = (function (){var statearr_33205 = state_33195;(statearr_33205[(7)] = inst_33172);
(statearr_33205[(10)] = inst_33184);
return statearr_33205;
})();var statearr_33206_33226 = state_33195__$1;(statearr_33206_33226[(2)] = null);
(statearr_33206_33226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (9)))
{var inst_33175 = (state_33195[(8)]);var state_33195__$1 = state_33195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33195__$1,(11),out,inst_33175);
} else
{if((state_val_33196 === (5)))
{var inst_33172 = (state_33195[(7)]);var inst_33175 = (state_33195[(8)]);var inst_33179 = cljs.core._EQ_.call(null,inst_33175,inst_33172);var state_33195__$1 = state_33195;if(inst_33179)
{var statearr_33208_33227 = state_33195__$1;(statearr_33208_33227[(1)] = (8));
} else
{var statearr_33209_33228 = state_33195__$1;(statearr_33209_33228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (10)))
{var inst_33187 = (state_33195[(2)]);var state_33195__$1 = state_33195;var statearr_33210_33229 = state_33195__$1;(statearr_33210_33229[(2)] = inst_33187);
(statearr_33210_33229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33196 === (8)))
{var inst_33172 = (state_33195[(7)]);var tmp33207 = inst_33172;var inst_33172__$1 = tmp33207;var state_33195__$1 = (function (){var statearr_33211 = state_33195;(statearr_33211[(7)] = inst_33172__$1);
return statearr_33211;
})();var statearr_33212_33230 = state_33195__$1;(statearr_33212_33230[(2)] = null);
(statearr_33212_33230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___33220,out))
;return ((function (switch__16388__auto__,c__16444__auto___33220,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33216 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33216[(0)] = state_machine__16389__auto__);
(statearr_33216[(1)] = (1));
return statearr_33216;
});
var state_machine__16389__auto____1 = (function (state_33195){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33195);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33217){if((e33217 instanceof Object))
{var ex__16392__auto__ = e33217;var statearr_33218_33231 = state_33195;(statearr_33218_33231[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33217;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33232 = state_33195;
state_33195 = G__33232;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33195){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___33220,out))
})();var state__16446__auto__ = (function (){var statearr_33219 = f__16445__auto__.call(null);(statearr_33219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___33220);
return statearr_33219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___33220,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___33367 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___33367,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___33367,out){
return (function (state_33337){var state_val_33338 = (state_33337[(1)]);if((state_val_33338 === (7)))
{var inst_33333 = (state_33337[(2)]);var state_33337__$1 = state_33337;var statearr_33339_33368 = state_33337__$1;(statearr_33339_33368[(2)] = inst_33333);
(statearr_33339_33368[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (1)))
{var inst_33300 = (new Array(n));var inst_33301 = inst_33300;var inst_33302 = (0);var state_33337__$1 = (function (){var statearr_33340 = state_33337;(statearr_33340[(7)] = inst_33302);
(statearr_33340[(8)] = inst_33301);
return statearr_33340;
})();var statearr_33341_33369 = state_33337__$1;(statearr_33341_33369[(2)] = null);
(statearr_33341_33369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (4)))
{var inst_33305 = (state_33337[(9)]);var inst_33305__$1 = (state_33337[(2)]);var inst_33306 = (inst_33305__$1 == null);var inst_33307 = cljs.core.not.call(null,inst_33306);var state_33337__$1 = (function (){var statearr_33342 = state_33337;(statearr_33342[(9)] = inst_33305__$1);
return statearr_33342;
})();if(inst_33307)
{var statearr_33343_33370 = state_33337__$1;(statearr_33343_33370[(1)] = (5));
} else
{var statearr_33344_33371 = state_33337__$1;(statearr_33344_33371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (15)))
{var inst_33327 = (state_33337[(2)]);var state_33337__$1 = state_33337;var statearr_33345_33372 = state_33337__$1;(statearr_33345_33372[(2)] = inst_33327);
(statearr_33345_33372[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (13)))
{var state_33337__$1 = state_33337;var statearr_33346_33373 = state_33337__$1;(statearr_33346_33373[(2)] = null);
(statearr_33346_33373[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (6)))
{var inst_33302 = (state_33337[(7)]);var inst_33323 = (inst_33302 > (0));var state_33337__$1 = state_33337;if(cljs.core.truth_(inst_33323))
{var statearr_33347_33374 = state_33337__$1;(statearr_33347_33374[(1)] = (12));
} else
{var statearr_33348_33375 = state_33337__$1;(statearr_33348_33375[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (3)))
{var inst_33335 = (state_33337[(2)]);var state_33337__$1 = state_33337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33337__$1,inst_33335);
} else
{if((state_val_33338 === (12)))
{var inst_33301 = (state_33337[(8)]);var inst_33325 = cljs.core.vec.call(null,inst_33301);var state_33337__$1 = state_33337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33337__$1,(15),out,inst_33325);
} else
{if((state_val_33338 === (2)))
{var state_33337__$1 = state_33337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33337__$1,(4),ch);
} else
{if((state_val_33338 === (11)))
{var inst_33317 = (state_33337[(2)]);var inst_33318 = (new Array(n));var inst_33301 = inst_33318;var inst_33302 = (0);var state_33337__$1 = (function (){var statearr_33349 = state_33337;(statearr_33349[(10)] = inst_33317);
(statearr_33349[(7)] = inst_33302);
(statearr_33349[(8)] = inst_33301);
return statearr_33349;
})();var statearr_33350_33376 = state_33337__$1;(statearr_33350_33376[(2)] = null);
(statearr_33350_33376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (9)))
{var inst_33301 = (state_33337[(8)]);var inst_33315 = cljs.core.vec.call(null,inst_33301);var state_33337__$1 = state_33337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33337__$1,(11),out,inst_33315);
} else
{if((state_val_33338 === (5)))
{var inst_33302 = (state_33337[(7)]);var inst_33310 = (state_33337[(11)]);var inst_33305 = (state_33337[(9)]);var inst_33301 = (state_33337[(8)]);var inst_33309 = (inst_33301[inst_33302] = inst_33305);var inst_33310__$1 = (inst_33302 + (1));var inst_33311 = (inst_33310__$1 < n);var state_33337__$1 = (function (){var statearr_33351 = state_33337;(statearr_33351[(12)] = inst_33309);
(statearr_33351[(11)] = inst_33310__$1);
return statearr_33351;
})();if(cljs.core.truth_(inst_33311))
{var statearr_33352_33377 = state_33337__$1;(statearr_33352_33377[(1)] = (8));
} else
{var statearr_33353_33378 = state_33337__$1;(statearr_33353_33378[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (14)))
{var inst_33330 = (state_33337[(2)]);var inst_33331 = cljs.core.async.close_BANG_.call(null,out);var state_33337__$1 = (function (){var statearr_33355 = state_33337;(statearr_33355[(13)] = inst_33330);
return statearr_33355;
})();var statearr_33356_33379 = state_33337__$1;(statearr_33356_33379[(2)] = inst_33331);
(statearr_33356_33379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (10)))
{var inst_33321 = (state_33337[(2)]);var state_33337__$1 = state_33337;var statearr_33357_33380 = state_33337__$1;(statearr_33357_33380[(2)] = inst_33321);
(statearr_33357_33380[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33338 === (8)))
{var inst_33310 = (state_33337[(11)]);var inst_33301 = (state_33337[(8)]);var tmp33354 = inst_33301;var inst_33301__$1 = tmp33354;var inst_33302 = inst_33310;var state_33337__$1 = (function (){var statearr_33358 = state_33337;(statearr_33358[(7)] = inst_33302);
(statearr_33358[(8)] = inst_33301__$1);
return statearr_33358;
})();var statearr_33359_33381 = state_33337__$1;(statearr_33359_33381[(2)] = null);
(statearr_33359_33381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___33367,out))
;return ((function (switch__16388__auto__,c__16444__auto___33367,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33363[(0)] = state_machine__16389__auto__);
(statearr_33363[(1)] = (1));
return statearr_33363;
});
var state_machine__16389__auto____1 = (function (state_33337){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33337);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33364){if((e33364 instanceof Object))
{var ex__16392__auto__ = e33364;var statearr_33365_33382 = state_33337;(statearr_33365_33382[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33364;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33383 = state_33337;
state_33337 = G__33383;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33337){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___33367,out))
})();var state__16446__auto__ = (function (){var statearr_33366 = f__16445__auto__.call(null);(statearr_33366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___33367);
return statearr_33366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___33367,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16444__auto___33526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto___33526,out){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto___33526,out){
return (function (state_33496){var state_val_33497 = (state_33496[(1)]);if((state_val_33497 === (7)))
{var inst_33492 = (state_33496[(2)]);var state_33496__$1 = state_33496;var statearr_33498_33527 = state_33496__$1;(statearr_33498_33527[(2)] = inst_33492);
(statearr_33498_33527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (1)))
{var inst_33455 = [];var inst_33456 = inst_33455;var inst_33457 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_33496__$1 = (function (){var statearr_33499 = state_33496;(statearr_33499[(7)] = inst_33456);
(statearr_33499[(8)] = inst_33457);
return statearr_33499;
})();var statearr_33500_33528 = state_33496__$1;(statearr_33500_33528[(2)] = null);
(statearr_33500_33528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (4)))
{var inst_33460 = (state_33496[(9)]);var inst_33460__$1 = (state_33496[(2)]);var inst_33461 = (inst_33460__$1 == null);var inst_33462 = cljs.core.not.call(null,inst_33461);var state_33496__$1 = (function (){var statearr_33501 = state_33496;(statearr_33501[(9)] = inst_33460__$1);
return statearr_33501;
})();if(inst_33462)
{var statearr_33502_33529 = state_33496__$1;(statearr_33502_33529[(1)] = (5));
} else
{var statearr_33503_33530 = state_33496__$1;(statearr_33503_33530[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (15)))
{var inst_33486 = (state_33496[(2)]);var state_33496__$1 = state_33496;var statearr_33504_33531 = state_33496__$1;(statearr_33504_33531[(2)] = inst_33486);
(statearr_33504_33531[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (13)))
{var state_33496__$1 = state_33496;var statearr_33505_33532 = state_33496__$1;(statearr_33505_33532[(2)] = null);
(statearr_33505_33532[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (6)))
{var inst_33456 = (state_33496[(7)]);var inst_33481 = inst_33456.length;var inst_33482 = (inst_33481 > (0));var state_33496__$1 = state_33496;if(cljs.core.truth_(inst_33482))
{var statearr_33506_33533 = state_33496__$1;(statearr_33506_33533[(1)] = (12));
} else
{var statearr_33507_33534 = state_33496__$1;(statearr_33507_33534[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (3)))
{var inst_33494 = (state_33496[(2)]);var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33496__$1,inst_33494);
} else
{if((state_val_33497 === (12)))
{var inst_33456 = (state_33496[(7)]);var inst_33484 = cljs.core.vec.call(null,inst_33456);var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33496__$1,(15),out,inst_33484);
} else
{if((state_val_33497 === (2)))
{var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33496__$1,(4),ch);
} else
{if((state_val_33497 === (11)))
{var inst_33460 = (state_33496[(9)]);var inst_33464 = (state_33496[(10)]);var inst_33474 = (state_33496[(2)]);var inst_33475 = [];var inst_33476 = inst_33475.push(inst_33460);var inst_33456 = inst_33475;var inst_33457 = inst_33464;var state_33496__$1 = (function (){var statearr_33508 = state_33496;(statearr_33508[(11)] = inst_33474);
(statearr_33508[(7)] = inst_33456);
(statearr_33508[(8)] = inst_33457);
(statearr_33508[(12)] = inst_33476);
return statearr_33508;
})();var statearr_33509_33535 = state_33496__$1;(statearr_33509_33535[(2)] = null);
(statearr_33509_33535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (9)))
{var inst_33456 = (state_33496[(7)]);var inst_33472 = cljs.core.vec.call(null,inst_33456);var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33496__$1,(11),out,inst_33472);
} else
{if((state_val_33497 === (5)))
{var inst_33460 = (state_33496[(9)]);var inst_33457 = (state_33496[(8)]);var inst_33464 = (state_33496[(10)]);var inst_33464__$1 = f.call(null,inst_33460);var inst_33465 = cljs.core._EQ_.call(null,inst_33464__$1,inst_33457);var inst_33466 = cljs.core.keyword_identical_QMARK_.call(null,inst_33457,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_33467 = (inst_33465) || (inst_33466);var state_33496__$1 = (function (){var statearr_33510 = state_33496;(statearr_33510[(10)] = inst_33464__$1);
return statearr_33510;
})();if(cljs.core.truth_(inst_33467))
{var statearr_33511_33536 = state_33496__$1;(statearr_33511_33536[(1)] = (8));
} else
{var statearr_33512_33537 = state_33496__$1;(statearr_33512_33537[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (14)))
{var inst_33489 = (state_33496[(2)]);var inst_33490 = cljs.core.async.close_BANG_.call(null,out);var state_33496__$1 = (function (){var statearr_33514 = state_33496;(statearr_33514[(13)] = inst_33489);
return statearr_33514;
})();var statearr_33515_33538 = state_33496__$1;(statearr_33515_33538[(2)] = inst_33490);
(statearr_33515_33538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (10)))
{var inst_33479 = (state_33496[(2)]);var state_33496__$1 = state_33496;var statearr_33516_33539 = state_33496__$1;(statearr_33516_33539[(2)] = inst_33479);
(statearr_33516_33539[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33497 === (8)))
{var inst_33460 = (state_33496[(9)]);var inst_33456 = (state_33496[(7)]);var inst_33464 = (state_33496[(10)]);var inst_33469 = inst_33456.push(inst_33460);var tmp33513 = inst_33456;var inst_33456__$1 = tmp33513;var inst_33457 = inst_33464;var state_33496__$1 = (function (){var statearr_33517 = state_33496;(statearr_33517[(14)] = inst_33469);
(statearr_33517[(7)] = inst_33456__$1);
(statearr_33517[(8)] = inst_33457);
return statearr_33517;
})();var statearr_33518_33540 = state_33496__$1;(statearr_33518_33540[(2)] = null);
(statearr_33518_33540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16444__auto___33526,out))
;return ((function (switch__16388__auto__,c__16444__auto___33526,out){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33522[(0)] = state_machine__16389__auto__);
(statearr_33522[(1)] = (1));
return statearr_33522;
});
var state_machine__16389__auto____1 = (function (state_33496){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33496);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33523){if((e33523 instanceof Object))
{var ex__16392__auto__ = e33523;var statearr_33524_33541 = state_33496;(statearr_33524_33541[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33542 = state_33496;
state_33496 = G__33542;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33496){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto___33526,out))
})();var state__16446__auto__ = (function (){var statearr_33525 = f__16445__auto__.call(null);(statearr_33525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto___33526);
return statearr_33525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto___33526,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map