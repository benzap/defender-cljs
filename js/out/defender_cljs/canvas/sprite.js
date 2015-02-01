// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.sprite');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.canvas.object');
goog.require('defender_cljs.utils');
defender_cljs.canvas.sprite.texture_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Loads the given texture asset, and returns a map to it
*/
defender_cljs.canvas.sprite.load_texture = (function load_texture(texture_name,texture_file){var texture = THREE.ImageUtils.loadTexture(("assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(texture_file)));cljs.core.swap_BANG_.call(null,defender_cljs.canvas.sprite.texture_map,cljs.core.assoc,texture_name,texture);
return texture;
});
defender_cljs.utils.log.call(null,"texture",cljs.core.deref.call(null,defender_cljs.canvas.sprite.texture_map));
/**
* @param {...*} var_args
*/
defender_cljs.canvas.sprite.make_sprite_material = (function() { 
var make_sprite_material__delegate = function (texture_name,p__28400){var map__28402 = p__28400;var map__28402__$1 = ((cljs.core.seq_QMARK_.call(null,map__28402))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402):map__28402);var color = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));var texture = cljs.core.deref.call(null,defender_cljs.canvas.sprite.texture_map).call(null,texture_name);return (new THREE.SpriteMaterial({"fog": true, "color": color, "map": texture}));
};
var make_sprite_material = function (texture_name,var_args){
var p__28400 = null;if (arguments.length > 1) {
  p__28400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_sprite_material__delegate.call(this,texture_name,p__28400);};
make_sprite_material.cljs$lang$maxFixedArity = 1;
make_sprite_material.cljs$lang$applyTo = (function (arglist__28403){
var texture_name = cljs.core.first(arglist__28403);
var p__28400 = cljs.core.rest(arglist__28403);
return make_sprite_material__delegate(texture_name,p__28400);
});
make_sprite_material.cljs$core$IFn$_invoke$arity$variadic = make_sprite_material__delegate;
return make_sprite_material;
})()
;
/**
* makes a sprite from a given texture-url. The url is based on the
* root folder /assets/
* @param {...*} var_args
*/
defender_cljs.canvas.sprite.make_sprite = (function() { 
var make_sprite__delegate = function (sprite_material,p__28404){var map__28406 = p__28404;var map__28406__$1 = ((cljs.core.seq_QMARK_.call(null,map__28406))?cljs.core.apply.call(null,cljs.core.hash_map,map__28406):map__28406);var scale = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(64)], null));var sprite = (new THREE.Sprite(sprite_material));defender_cljs.canvas.object.set_scale_BANG_.call(null,sprite,cljs.core.first.call(null,scale),cljs.core.second.call(null,scale));
return sprite;
};
var make_sprite = function (sprite_material,var_args){
var p__28404 = null;if (arguments.length > 1) {
  p__28404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_sprite__delegate.call(this,sprite_material,p__28404);};
make_sprite.cljs$lang$maxFixedArity = 1;
make_sprite.cljs$lang$applyTo = (function (arglist__28407){
var sprite_material = cljs.core.first(arglist__28407);
var p__28404 = cljs.core.rest(arglist__28407);
return make_sprite__delegate(sprite_material,p__28404);
});
make_sprite.cljs$core$IFn$_invoke$arity$variadic = make_sprite__delegate;
return make_sprite;
})()
;
defender_cljs.canvas.sprite.set_sprite_material_BANG_ = (function set_sprite_material_BANG_(obj){return null;
});

//# sourceMappingURL=sprite.js.map