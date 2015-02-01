// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.canvas.text');
goog.require('cljs.core');
/**
* Creates a TextGeometry object with the given attributes
*/
defender_cljs.canvas.text.create_text_geometry = (function create_text_geometry(text,p__28442){var map__28444 = p__28442;var map__28444__$1 = ((cljs.core.seq_QMARK_.call(null,map__28444))?cljs.core.apply.call(null,cljs.core.hash_map,map__28444):map__28444);var size = cljs.core.get.call(null,map__28444__$1,new cljs.core.Keyword(null,"size","size",1098693007),(50));return (new THREE.TextGeometry(text,{"size": size, "style": "normal", "weight": "normal", "font": "arcade normal"}));
});
/**
* Creates a TextGeometry setup as a label
*/
defender_cljs.canvas.text.create_label = (function create_label(text,p__28445){var map__28447 = p__28445;var map__28447__$1 = ((cljs.core.seq_QMARK_.call(null,map__28447))?cljs.core.apply.call(null,cljs.core.hash_map,map__28447):map__28447);var attrs = map__28447__$1;var color = cljs.core.get.call(null,map__28447__$1,new cljs.core.Keyword(null,"color","color",1011675173),(11206570));var size = cljs.core.get.call(null,map__28447__$1,new cljs.core.Keyword(null,"size","size",1098693007));var geometry = defender_cljs.canvas.text.create_text_geometry.call(null,text,attrs);var material = (new THREE.MeshBasicMaterial({"color": color}));var mesh = (new THREE.Mesh(geometry,material));(mesh["textattributes"] = attrs);
return mesh;
});
defender_cljs.canvas.text.set_label_text_BANG_ = (function set_label_text_BANG_(label,text){var text_attributes = label.textattributes;var geometry = defender_cljs.canvas.text.create_text_geometry.call(null,text,text_attributes);(label["text"] = text);
(label["geometry"] = geometry);
return geometry;
});
defender_cljs.canvas.text.set_label_attrs_BANG_ = (function set_label_attrs_BANG_(label,attrs){var text = label.text;var text_attributes = label.textattributes;var geometry = defender_cljs.canvas.text.create_text_geometry.call(null,text,cljs.core.merge.call(null,text_attributes,attrs));(label["geometry"] = geometry);
return geometry;
});

//# sourceMappingURL=text.js.map