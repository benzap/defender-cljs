// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.enemies.lander');
goog.require('cljs.core');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.actor');
goog.require('defender_cljs.canvas.sprite');
goog.require('defender_cljs.canvas.sprite');
goog.require('defender_cljs.enemy');
goog.require('defender_cljs.enemy');
defender_cljs.canvas.sprite.load_texture.call(null,new cljs.core.Keyword(null,"lander","lander",439860228),"enemy-lander.png");
defender_cljs.enemies.lander.main_material = defender_cljs.canvas.sprite.make_sprite_material.call(null,new cljs.core.Keyword(null,"lander","lander",439860228));
defender_cljs.enemies.lander.make_lander = (function make_lander(){var sprite = defender_cljs.canvas.sprite.make_sprite.call(null,defender_cljs.enemies.lander.main_material,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null));var enemy_actor = defender_cljs.enemy.create_enemy.call(null,sprite,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"lander","lander",439860228),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"enemy","enemy",-956472047));defender_cljs.actor.set_collision_BANG_.call(null,enemy_actor,new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16));
return enemy_actor;
});

//# sourceMappingURL=lander.js.map