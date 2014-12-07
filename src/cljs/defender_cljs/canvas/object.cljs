(ns defender-cljs.canvas.object
  "Wraps over the Three.js Object3D class, which makes up most
  entities in the game. The code has also been simplified to work in
  2d.")

(defn translate!
  "Translate Object3D"
  [obj x y & [z]]
  (.translateX obj x)
  (.translateY obj y)
  (.translateZ obj (or z 0)))

(defn set-position!
  "Set the position of the Object3D"
  [obj x y & [z]]
  (aset (-> obj .-position) "x" x)
  (aset (-> obj .-position) "y" y)
  (aset (-> obj .-position) "z" (or z 0))
  obj)

(defn rotate!
  "Rotate Object3D, on z-axis"
  [obj ang]
  (.rotateOnAxis obj (THREE.Vector3. 0 0 1) ang)
  obj)

(defn set-rotation!
  "Sets the rotation of the object. Rotations are done on the z-axis
  with x and y rotations set to zero"
  [obj ang]
  (aset (-> obj .-rotation) "x" 0)
  (aset (-> obj .-rotation) "y" 0)
  (aset (-> obj .-rotation) "z" ang)
  obj)

(defn scale!
  "Sets the modified scale multiplicative to it's current scale."
  [obj x y & [z]]
  (let [scale (aget obj "scale")
        sc-x (aget scale "x")
        sc-y (aget scale "y")
        sc-z (aget scale "z")]
    (aset scale "x" (* sc-x x))
    (aset scale "y" (* sc-y y))
    (aset scale "z" (* sc-z (or z 1)))))

(defn set-scale!
  "Sets the current scale of the object"
  [obj x y & [z]]
  (aset (-> obj .-scale)  "x" x)
  (aset (-> obj .-scale)  "y" y)
  (aset (-> obj .-scale)  "z" (or z 1)))
