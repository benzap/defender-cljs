// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.object');
goog.require('cljs.core');
/**
* Translate Object3D
* @param {...*} var_args
*/
defender_cljs.canvas.object.translate_BANG_ = (function() { 
var translate_BANG___delegate = function (obj,x,y,p__28379){var vec__28381 = p__28379;var z = cljs.core.nth.call(null,vec__28381,(0),null);obj.translateX(x);
obj.translateY(y);
return obj.translateZ((function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})());
};
var translate_BANG_ = function (obj,x,y,var_args){
var p__28379 = null;if (arguments.length > 3) {
  p__28379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return translate_BANG___delegate.call(this,obj,x,y,p__28379);};
translate_BANG_.cljs$lang$maxFixedArity = 3;
translate_BANG_.cljs$lang$applyTo = (function (arglist__28382){
var obj = cljs.core.first(arglist__28382);
arglist__28382 = cljs.core.next(arglist__28382);
var x = cljs.core.first(arglist__28382);
arglist__28382 = cljs.core.next(arglist__28382);
var y = cljs.core.first(arglist__28382);
var p__28379 = cljs.core.rest(arglist__28382);
return translate_BANG___delegate(obj,x,y,p__28379);
});
translate_BANG_.cljs$core$IFn$_invoke$arity$variadic = translate_BANG___delegate;
return translate_BANG_;
})()
;
/**
* Set the position of the Object3D
* @param {...*} var_args
*/
defender_cljs.canvas.object.set_position_BANG_ = (function() { 
var set_position_BANG___delegate = function (obj,x,y,p__28383){var vec__28385 = p__28383;var z = cljs.core.nth.call(null,vec__28385,(0),null);(obj.position["x"] = x);
(obj.position["y"] = y);
(obj.position["z"] = (function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (0);
}
})());
return obj;
};
var set_position_BANG_ = function (obj,x,y,var_args){
var p__28383 = null;if (arguments.length > 3) {
  p__28383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return set_position_BANG___delegate.call(this,obj,x,y,p__28383);};
set_position_BANG_.cljs$lang$maxFixedArity = 3;
set_position_BANG_.cljs$lang$applyTo = (function (arglist__28386){
var obj = cljs.core.first(arglist__28386);
arglist__28386 = cljs.core.next(arglist__28386);
var x = cljs.core.first(arglist__28386);
arglist__28386 = cljs.core.next(arglist__28386);
var y = cljs.core.first(arglist__28386);
var p__28383 = cljs.core.rest(arglist__28386);
return set_position_BANG___delegate(obj,x,y,p__28383);
});
set_position_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_position_BANG___delegate;
return set_position_BANG_;
})()
;
/**
* Rotate Object3D, on z-axis
*/
defender_cljs.canvas.object.rotate_BANG_ = (function rotate_BANG_(obj,ang){obj.rotateOnAxis((new THREE.Vector3((0),(0),(1))),ang);
return obj;
});
/**
* Sets the rotation of the object. Rotations are done on the z-axis
* with x and y rotations set to zero
*/
defender_cljs.canvas.object.set_rotation_BANG_ = (function set_rotation_BANG_(obj,ang){(obj.rotation["x"] = (0));
(obj.rotation["y"] = (0));
(obj.rotation["z"] = ang);
return obj;
});
/**
* Sets the modified scale multiplicative to it's current scale.
* @param {...*} var_args
*/
defender_cljs.canvas.object.scale_BANG_ = (function() { 
var scale_BANG___delegate = function (obj,x,y,p__28387){var vec__28389 = p__28387;var z = cljs.core.nth.call(null,vec__28389,(0),null);var scale = (obj["scale"]);var sc_x = (scale["x"]);var sc_y = (scale["y"]);var sc_z = (scale["z"]);(scale["x"] = (sc_x * x));
(scale["y"] = (sc_y * y));
return (scale["z"] = (sc_z * (function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (1);
}
})()));
};
var scale_BANG_ = function (obj,x,y,var_args){
var p__28387 = null;if (arguments.length > 3) {
  p__28387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return scale_BANG___delegate.call(this,obj,x,y,p__28387);};
scale_BANG_.cljs$lang$maxFixedArity = 3;
scale_BANG_.cljs$lang$applyTo = (function (arglist__28390){
var obj = cljs.core.first(arglist__28390);
arglist__28390 = cljs.core.next(arglist__28390);
var x = cljs.core.first(arglist__28390);
arglist__28390 = cljs.core.next(arglist__28390);
var y = cljs.core.first(arglist__28390);
var p__28387 = cljs.core.rest(arglist__28390);
return scale_BANG___delegate(obj,x,y,p__28387);
});
scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = scale_BANG___delegate;
return scale_BANG_;
})()
;
/**
* Sets the current scale of the object
* @param {...*} var_args
*/
defender_cljs.canvas.object.set_scale_BANG_ = (function() { 
var set_scale_BANG___delegate = function (obj,x,y,p__28391){var vec__28393 = p__28391;var z = cljs.core.nth.call(null,vec__28393,(0),null);(obj.scale["x"] = x);
(obj.scale["y"] = y);
return (obj.scale["z"] = (function (){var or__12586__auto__ = z;if(cljs.core.truth_(or__12586__auto__))
{return or__12586__auto__;
} else
{return (1);
}
})());
};
var set_scale_BANG_ = function (obj,x,y,var_args){
var p__28391 = null;if (arguments.length > 3) {
  p__28391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return set_scale_BANG___delegate.call(this,obj,x,y,p__28391);};
set_scale_BANG_.cljs$lang$maxFixedArity = 3;
set_scale_BANG_.cljs$lang$applyTo = (function (arglist__28394){
var obj = cljs.core.first(arglist__28394);
arglist__28394 = cljs.core.next(arglist__28394);
var x = cljs.core.first(arglist__28394);
arglist__28394 = cljs.core.next(arglist__28394);
var y = cljs.core.first(arglist__28394);
var p__28391 = cljs.core.rest(arglist__28394);
return set_scale_BANG___delegate(obj,x,y,p__28391);
});
set_scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_scale_BANG___delegate;
return set_scale_BANG_;
})()
;

//# sourceMappingURL=object.js.map