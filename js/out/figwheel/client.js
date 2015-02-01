// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__33654,args){var map__33656 = p__33654;var map__33656__$1 = ((cljs.core.seq_QMARK_.call(null,map__33656))?cljs.core.apply.call(null,cljs.core.hash_map,map__33656):map__33656);var debug = cljs.core.get.call(null,map__33656__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__33654,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__33654,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__33657){
var p__33654 = cljs.core.first(arglist__33657);
var args = cljs.core.rest(arglist__33657);
return log__delegate(p__33654,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__33658){var map__33660 = p__33658;var map__33660__$1 = ((cljs.core.seq_QMARK_.call(null,map__33660))?cljs.core.apply.call(null,cljs.core.hash_map,map__33660):map__33660);var websocket_url = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__33661,callback){var map__33663 = p__33661;var map__33663__$1 = ((cljs.core.seq_QMARK_.call(null,map__33663))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);var msg = map__33663__$1;var dependency_file = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__33663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12586__auto__ = dependency_file;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__33663,map__33663__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__33663,map__33663__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__33664,p__33665){var map__33668 = p__33664;var map__33668__$1 = ((cljs.core.seq_QMARK_.call(null,map__33668))?cljs.core.apply.call(null,cljs.core.hash_map,map__33668):map__33668);var opts = map__33668__$1;var url_rewriter = cljs.core.get.call(null,map__33668__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__33669 = p__33665;var map__33669__$1 = ((cljs.core.seq_QMARK_.call(null,map__33669))?cljs.core.apply.call(null,cljs.core.hash_map,map__33669):map__33669);var d = map__33669__$1;var file = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__33670,p__33671){var map__33713 = p__33670;var map__33713__$1 = ((cljs.core.seq_QMARK_.call(null,map__33713))?cljs.core.apply.call(null,cljs.core.hash_map,map__33713):map__33713);var opts = map__33713__$1;var on_jsload = cljs.core.get.call(null,map__33713__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__33713__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__33714 = p__33671;var map__33714__$1 = ((cljs.core.seq_QMARK_.call(null,map__33714))?cljs.core.apply.call(null,cljs.core.hash_map,map__33714):map__33714);var files = cljs.core.get.call(null,map__33714__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files){
return (function (state_33737){var state_val_33738 = (state_33737[(1)]);if((state_val_33738 === (6)))
{var inst_33719 = (state_33737[(7)]);var inst_33728 = (state_33737[(2)]);var inst_33729 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33730 = [inst_33719];var inst_33731 = (new cljs.core.PersistentVector(null,1,(5),inst_33729,inst_33730,null));var inst_33732 = cljs.core.apply.call(null,on_jsload,inst_33731);var state_33737__$1 = (function (){var statearr_33739 = state_33737;(statearr_33739[(8)] = inst_33728);
return statearr_33739;
})();var statearr_33740_33754 = state_33737__$1;(statearr_33740_33754[(2)] = inst_33732);
(statearr_33740_33754[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33738 === (5)))
{var inst_33735 = (state_33737[(2)]);var state_33737__$1 = state_33737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33737__$1,inst_33735);
} else
{if((state_val_33738 === (4)))
{var state_33737__$1 = state_33737;var statearr_33741_33755 = state_33737__$1;(statearr_33741_33755[(2)] = null);
(statearr_33741_33755[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33738 === (3)))
{var inst_33719 = (state_33737[(7)]);var inst_33722 = console.debug("Figwheel: loaded these files");var inst_33723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33719);var inst_33724 = cljs.core.prn_str.call(null,inst_33723);var inst_33725 = console.log(inst_33724);var inst_33726 = cljs.core.async.timeout.call(null,(10));var state_33737__$1 = (function (){var statearr_33742 = state_33737;(statearr_33742[(9)] = inst_33722);
(statearr_33742[(10)] = inst_33725);
return statearr_33742;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(6),inst_33726);
} else
{if((state_val_33738 === (2)))
{var inst_33719 = (state_33737[(7)]);var inst_33719__$1 = (state_33737[(2)]);var inst_33720 = cljs.core.not_empty.call(null,inst_33719__$1);var state_33737__$1 = (function (){var statearr_33743 = state_33737;(statearr_33743[(7)] = inst_33719__$1);
return statearr_33743;
})();if(cljs.core.truth_(inst_33720))
{var statearr_33744_33756 = state_33737__$1;(statearr_33744_33756[(1)] = (3));
} else
{var statearr_33745_33757 = state_33737__$1;(statearr_33745_33757[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33738 === (1)))
{var inst_33715 = before_jsload.call(null,files);var inst_33716 = figwheel.client.add_request_urls.call(null,opts,files);var inst_33717 = figwheel.client.load_all_js_files.call(null,inst_33716);var state_33737__$1 = (function (){var statearr_33746 = state_33737;(statearr_33746[(11)] = inst_33715);
return statearr_33746;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(2),inst_33717);
} else
{return null;
}
}
}
}
}
}
});})(c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files))
;return ((function (switch__16388__auto__,c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33750 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33750[(0)] = state_machine__16389__auto__);
(statearr_33750[(1)] = (1));
return statearr_33750;
});
var state_machine__16389__auto____1 = (function (state_33737){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33737);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33751){if((e33751 instanceof Object))
{var ex__16392__auto__ = e33751;var statearr_33752_33758 = state_33737;(statearr_33752_33758[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33759 = state_33737;
state_33737 = G__33759;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files))
})();var state__16446__auto__ = (function (){var statearr_33753 = f__16445__auto__.call(null);(statearr_33753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_33753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__,map__33713,map__33713__$1,opts,on_jsload,before_jsload,map__33714,map__33714__$1,files))
);
return c__16444__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__33760,link_href){var map__33762 = p__33760;var map__33762__$1 = ((cljs.core.seq_QMARK_.call(null,map__33762))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);var request_url = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__,parent){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__,parent){
return (function (state_33783){var state_val_33784 = (state_33783[(1)]);if((state_val_33784 === (2)))
{var inst_33780 = (state_33783[(2)]);var inst_33781 = parent.removeChild(orig_link);var state_33783__$1 = (function (){var statearr_33785 = state_33783;(statearr_33785[(7)] = inst_33780);
return statearr_33785;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33783__$1,inst_33781);
} else
{if((state_val_33784 === (1)))
{var inst_33778 = cljs.core.async.timeout.call(null,(200));var state_33783__$1 = state_33783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33783__$1,(2),inst_33778);
} else
{return null;
}
}
});})(c__16444__auto__,parent))
;return ((function (switch__16388__auto__,c__16444__auto__,parent){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33789 = [null,null,null,null,null,null,null,null];(statearr_33789[(0)] = state_machine__16389__auto__);
(statearr_33789[(1)] = (1));
return statearr_33789;
});
var state_machine__16389__auto____1 = (function (state_33783){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33783);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33790){if((e33790 instanceof Object))
{var ex__16392__auto__ = e33790;var statearr_33791_33793 = state_33783;(statearr_33791_33793[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33794 = state_33783;
state_33783 = G__33794;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33783){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__,parent))
})();var state__16446__auto__ = (function (){var statearr_33792 = f__16445__auto__.call(null);(statearr_33792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_33792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__,parent))
);
return c__16444__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__33795){var map__33797 = p__33795;var map__33797__$1 = ((cljs.core.seq_QMARK_.call(null,map__33797))?cljs.core.apply.call(null,cljs.core.hash_map,map__33797):map__33797);var f_data = map__33797__$1;var request_url = cljs.core.get.call(null,map__33797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__33798,files_msg){var map__33820 = p__33798;var map__33820__$1 = ((cljs.core.seq_QMARK_.call(null,map__33820))?cljs.core.apply.call(null,cljs.core.hash_map,map__33820):map__33820);var opts = map__33820__$1;var on_cssload = cljs.core.get.call(null,map__33820__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__33821_33841 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__33822_33842 = null;var count__33823_33843 = (0);var i__33824_33844 = (0);while(true){
if((i__33824_33844 < count__33823_33843))
{var f_33845 = cljs.core._nth.call(null,chunk__33822_33842,i__33824_33844);figwheel.client.reload_css_file.call(null,f_33845);
{
var G__33846 = seq__33821_33841;
var G__33847 = chunk__33822_33842;
var G__33848 = count__33823_33843;
var G__33849 = (i__33824_33844 + (1));
seq__33821_33841 = G__33846;
chunk__33822_33842 = G__33847;
count__33823_33843 = G__33848;
i__33824_33844 = G__33849;
continue;
}
} else
{var temp__4126__auto___33850 = cljs.core.seq.call(null,seq__33821_33841);if(temp__4126__auto___33850)
{var seq__33821_33851__$1 = temp__4126__auto___33850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33821_33851__$1))
{var c__13356__auto___33852 = cljs.core.chunk_first.call(null,seq__33821_33851__$1);{
var G__33853 = cljs.core.chunk_rest.call(null,seq__33821_33851__$1);
var G__33854 = c__13356__auto___33852;
var G__33855 = cljs.core.count.call(null,c__13356__auto___33852);
var G__33856 = (0);
seq__33821_33841 = G__33853;
chunk__33822_33842 = G__33854;
count__33823_33843 = G__33855;
i__33824_33844 = G__33856;
continue;
}
} else
{var f_33857 = cljs.core.first.call(null,seq__33821_33851__$1);figwheel.client.reload_css_file.call(null,f_33857);
{
var G__33858 = cljs.core.next.call(null,seq__33821_33851__$1);
var G__33859 = null;
var G__33860 = (0);
var G__33861 = (0);
seq__33821_33841 = G__33858;
chunk__33822_33842 = G__33859;
count__33823_33843 = G__33860;
i__33824_33844 = G__33861;
continue;
}
}
} else
{}
}
break;
}
var c__16444__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload){
return (function (){var f__16445__auto__ = (function (){var switch__16388__auto__ = ((function (c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload){
return (function (state_33831){var state_val_33832 = (state_33831[(1)]);if((state_val_33832 === (2)))
{var inst_33827 = (state_33831[(2)]);var inst_33828 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_33829 = on_cssload.call(null,inst_33828);var state_33831__$1 = (function (){var statearr_33833 = state_33831;(statearr_33833[(7)] = inst_33827);
return statearr_33833;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33831__$1,inst_33829);
} else
{if((state_val_33832 === (1)))
{var inst_33825 = cljs.core.async.timeout.call(null,(100));var state_33831__$1 = state_33831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(2),inst_33825);
} else
{return null;
}
}
});})(c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload))
;return ((function (switch__16388__auto__,c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload){
return (function() {
var state_machine__16389__auto__ = null;
var state_machine__16389__auto____0 = (function (){var statearr_33837 = [null,null,null,null,null,null,null,null];(statearr_33837[(0)] = state_machine__16389__auto__);
(statearr_33837[(1)] = (1));
return statearr_33837;
});
var state_machine__16389__auto____1 = (function (state_33831){while(true){
var ret_value__16390__auto__ = (function (){try{while(true){
var result__16391__auto__ = switch__16388__auto__.call(null,state_33831);if(cljs.core.keyword_identical_QMARK_.call(null,result__16391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16391__auto__;
}
break;
}
}catch (e33838){if((e33838 instanceof Object))
{var ex__16392__auto__ = e33838;var statearr_33839_33862 = state_33831;(statearr_33839_33862[(5)] = ex__16392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33863 = state_33831;
state_33831 = G__33863;
continue;
}
} else
{return ret_value__16390__auto__;
}
break;
}
});
state_machine__16389__auto__ = function(state_33831){
switch(arguments.length){
case 0:
return state_machine__16389__auto____0.call(this);
case 1:
return state_machine__16389__auto____1.call(this,state_33831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16389__auto____0;
state_machine__16389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16389__auto____1;
return state_machine__16389__auto__;
})()
;})(switch__16388__auto__,c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload))
})();var state__16446__auto__ = (function (){var statearr_33840 = f__16445__auto__.call(null);(statearr_33840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16444__auto__);
return statearr_33840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16446__auto__);
});})(c__16444__auto__,map__33820,map__33820__$1,opts,on_cssload))
);
return c__16444__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__33864){var map__33869 = p__33864;var map__33869__$1 = ((cljs.core.seq_QMARK_.call(null,map__33869))?cljs.core.apply.call(null,cljs.core.hash_map,map__33869):map__33869);var opts = map__33869__$1;var on_compile_fail = cljs.core.get.call(null,map__33869__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__33869__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__33869__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__33869__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__33870 = cljs.core._EQ_;var expr__33871 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__33870.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__33871)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33870.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__33871)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33870.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33871)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__33869,map__33869__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj33876 = {"detail":url};return obj33876;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__33877){var map__33879 = p__33877;var map__33879__$1 = ((cljs.core.seq_QMARK_.call(null,map__33879))?cljs.core.apply.call(null,cljs.core.hash_map,map__33879):map__33879);var class$ = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__33880){var map__33886 = p__33880;var map__33886__$1 = ((cljs.core.seq_QMARK_.call(null,map__33886))?cljs.core.apply.call(null,cljs.core.hash_map,map__33886):map__33886);var ed = map__33886__$1;var exception_data = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__33887_33891 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__33888_33892 = null;var count__33889_33893 = (0);var i__33890_33894 = (0);while(true){
if((i__33890_33894 < count__33889_33893))
{var msg_33895 = cljs.core._nth.call(null,chunk__33888_33892,i__33890_33894);console.log(msg_33895);
{
var G__33896 = seq__33887_33891;
var G__33897 = chunk__33888_33892;
var G__33898 = count__33889_33893;
var G__33899 = (i__33890_33894 + (1));
seq__33887_33891 = G__33896;
chunk__33888_33892 = G__33897;
count__33889_33893 = G__33898;
i__33890_33894 = G__33899;
continue;
}
} else
{var temp__4126__auto___33900 = cljs.core.seq.call(null,seq__33887_33891);if(temp__4126__auto___33900)
{var seq__33887_33901__$1 = temp__4126__auto___33900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33887_33901__$1))
{var c__13356__auto___33902 = cljs.core.chunk_first.call(null,seq__33887_33901__$1);{
var G__33903 = cljs.core.chunk_rest.call(null,seq__33887_33901__$1);
var G__33904 = c__13356__auto___33902;
var G__33905 = cljs.core.count.call(null,c__13356__auto___33902);
var G__33906 = (0);
seq__33887_33891 = G__33903;
chunk__33888_33892 = G__33904;
count__33889_33893 = G__33905;
i__33890_33894 = G__33906;
continue;
}
} else
{var msg_33907 = cljs.core.first.call(null,seq__33887_33901__$1);console.log(msg_33907);
{
var G__33908 = cljs.core.next.call(null,seq__33887_33901__$1);
var G__33909 = null;
var G__33910 = (0);
var G__33911 = (0);
seq__33887_33891 = G__33908;
chunk__33888_33892 = G__33909;
count__33889_33893 = G__33910;
i__33890_33894 = G__33911;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__12586__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__33912){var map__33914 = p__33912;var map__33914__$1 = ((cljs.core.seq_QMARK_.call(null,map__33914))?cljs.core.apply.call(null,cljs.core.hash_map,map__33914):map__33914);var opts = map__33914__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__33912 = null;if (arguments.length > 0) {
  p__33912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__33912);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__33915){
var p__33912 = cljs.core.seq(arglist__33915);
return watch_and_reload__delegate(p__33912);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map