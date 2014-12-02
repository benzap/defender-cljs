(ns defender-cljs.canvas.object
  "Wraps over the Three.js Object3D class, which makes up most
  entities in the game. The code has also been simplified to work in
  2d.")

(defn translate!
  "Translate Object3D"
  [obj x y]
  (.translateX obj x)
  (.translateY obj y))

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
