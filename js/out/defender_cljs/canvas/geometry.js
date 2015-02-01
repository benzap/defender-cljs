// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.geometry');
goog.require('cljs.core');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.canvas.object');
/**
* @param {...*} var_args
*/
defender_cljs.canvas.geometry.square = (function() { 
var square__delegate = function (p__28332){var map__28334 = p__28332;var map__28334__$1 = ((cljs.core.seq_QMARK_.call(null,map__28334))?cljs.core.apply.call(null,cljs.core.hash_map,map__28334):map__28334);var color = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"color","color",1011675173),(11206570));var depth = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(1));var height = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"width","width",-384071477));var geometry = (new THREE.BoxGeometry(width,height,(1)));var material = (new THREE.MeshBasicMaterial({"color": color}));var mesh = (new THREE.Mesh(geometry,material));return mesh;
};
var square = function (var_args){
var p__28332 = null;if (arguments.length > 0) {
  p__28332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return square__delegate.call(this,p__28332);};
square.cljs$lang$maxFixedArity = 0;
square.cljs$lang$applyTo = (function (arglist__28335){
var p__28332 = cljs.core.seq(arglist__28335);
return square__delegate(p__28332);
});
square.cljs$core$IFn$_invoke$arity$variadic = square__delegate;
return square;
})()
;
/**
* Forms a set of lines into a line segment
* @param {...*} var_args
*/
defender_cljs.canvas.geometry.draw_line = (function() { 
var draw_line__delegate = function (vertices,p__28336){var map__28344 = p__28336;var map__28344__$1 = ((cljs.core.seq_QMARK_.call(null,map__28344))?cljs.core.apply.call(null,cljs.core.hash_map,map__28344):map__28344);var line_width = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988),(1));var color = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16755370));var material = (new THREE.LineBasicMaterial({"linewidth": line_width, "color": color}));var geometry = (new THREE.Geometry());var line = (new THREE.Line(geometry,material));var seq__28345_28351 = cljs.core.seq.call(null,vertices);var chunk__28346_28352 = null;var count__28347_28353 = (0);var i__28348_28354 = (0);while(true){
if((i__28348_28354 < count__28347_28353))
{var vec__28349_28355 = cljs.core._nth.call(null,chunk__28346_28352,i__28348_28354);var x_28356 = cljs.core.nth.call(null,vec__28349_28355,(0),null);var y_28357 = cljs.core.nth.call(null,vec__28349_28355,(1),null);var z_28358 = cljs.core.nth.call(null,vec__28349_28355,(2),null);geometry.vertices.push((new THREE.Vector3(x_28356,y_28357,z_28358)));
{
var G__28359 = seq__28345_28351;
var G__28360 = chunk__28346_28352;
var G__28361 = count__28347_28353;
var G__28362 = (i__28348_28354 + (1));
seq__28345_28351 = G__28359;
chunk__28346_28352 = G__28360;
count__28347_28353 = G__28361;
i__28348_28354 = G__28362;
continue;
}
} else
{var temp__4126__auto___28363 = cljs.core.seq.call(null,seq__28345_28351);if(temp__4126__auto___28363)
{var seq__28345_28364__$1 = temp__4126__auto___28363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28345_28364__$1))
{var c__13356__auto___28365 = cljs.core.chunk_first.call(null,seq__28345_28364__$1);{
var G__28366 = cljs.core.chunk_rest.call(null,seq__28345_28364__$1);
var G__28367 = c__13356__auto___28365;
var G__28368 = cljs.core.count.call(null,c__13356__auto___28365);
var G__28369 = (0);
seq__28345_28351 = G__28366;
chunk__28346_28352 = G__28367;
count__28347_28353 = G__28368;
i__28348_28354 = G__28369;
continue;
}
} else
{var vec__28350_28370 = cljs.core.first.call(null,seq__28345_28364__$1);var x_28371 = cljs.core.nth.call(null,vec__28350_28370,(0),null);var y_28372 = cljs.core.nth.call(null,vec__28350_28370,(1),null);var z_28373 = cljs.core.nth.call(null,vec__28350_28370,(2),null);geometry.vertices.push((new THREE.Vector3(x_28371,y_28372,z_28373)));
{
var G__28374 = cljs.core.next.call(null,seq__28345_28364__$1);
var G__28375 = null;
var G__28376 = (0);
var G__28377 = (0);
seq__28345_28351 = G__28374;
chunk__28346_28352 = G__28375;
count__28347_28353 = G__28376;
i__28348_28354 = G__28377;
continue;
}
}
} else
{}
}
break;
}
return line;
};
var draw_line = function (vertices,var_args){
var p__28336 = null;if (arguments.length > 1) {
  p__28336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return draw_line__delegate.call(this,vertices,p__28336);};
draw_line.cljs$lang$maxFixedArity = 1;
draw_line.cljs$lang$applyTo = (function (arglist__28378){
var vertices = cljs.core.first(arglist__28378);
var p__28336 = cljs.core.rest(arglist__28378);
return draw_line__delegate(vertices,p__28336);
});
draw_line.cljs$core$IFn$_invoke$arity$variadic = draw_line__delegate;
return draw_line;
})()
;

//# sourceMappingURL=geometry.js.map