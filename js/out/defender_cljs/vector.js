// Compiled by ClojureScript 0.0-2371
goog.provide('defender_cljs.vector');
goog.require('cljs.core');
goog.require('defender_cljs.utils');
goog.require('defender_cljs.utils');
defender_cljs.vector.mag = (function mag(v){return Math.sqrt.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6372_SHARP_){return (p1__6372_SHARP_ * p1__6372_SHARP_);
}),v)));
});
defender_cljs.vector.norm = (function norm(v){var magnitude = defender_cljs.vector.mag.call(null,v);if(cljs.core.not_EQ_.call(null,magnitude,(0)))
{return cljs.core.map.call(null,((function (magnitude){
return (function (p1__6373_SHARP_){return (p1__6373_SHARP_ / magnitude);
});})(magnitude))
,v);
} else
{return cljs.core.map.call(null,((function (magnitude){
return (function (_){return (0);
});})(magnitude))
,v);
}
});
defender_cljs.vector.clamp = (function clamp(v,max_value){return cljs.core.map.call(null,(function (elem){if(cljs.core.truth_(window.isNaN(elem)))
{return (0);
} else
{if((elem >= max_value))
{return max_value;
} else
{if((elem <= (- max_value)))
{return (- max_value);
} else
{return elem;

}
}
}
}),v);
});

//# sourceMappingURL=vector.js.map