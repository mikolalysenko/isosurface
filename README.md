isosurface
==========

Isosurface polygonizer algorithms in JavaScript.  For more details, see the following blog posts:

* [What is a solid?](http://0fps.wordpress.com/2012/08/29/what-is-a-solid/)
* Smooth voxel terrain [Part 1](http://0fps.wordpress.com/2012/07/10/smooth-voxel-terrain-part-1/) [Part 2](http://0fps.wordpress.com/2012/07/12/smooth-voxel-terrain-part-2/)

[Or try out a live demo](http://mikolalysenko.github.com/Isosurface/)

# Example

```javascript
var isosurface = require("isosurface")

var mesh = isosurface.surfaceNets([64,64,64], function(x,y,z) {
  return x*x + y*y + z*z - 100
}, [[-11,-11,-11], [11,11,11]])

console.log(mesh)
```


# Install

```
npm install isosurface
```
    
# API

```javascript
var isosurface = require("isosurface")
```

#### `isosurface.surfaceNets(dims, potential[, bounds])`
Extracts an isosurface from `potential` using surface nets with resolution given by `dims`.

Params:
* `dims`: A 3D vector of integers representing the resolution of the isosurface
* `potential(x,y,z)`: A scalar valued potential function taking 3 coordinates as arguments returning a scalar.
* `bounds`: A pair of 3D vectors `[lo, hi]` giving bounds on the potential to sample.  If not specified, default is `[[0,0,0], dims]`.

Returns: A mesh object with the following members:
* `positions`: The coordinates of the vertices of the mesh
* `cells`: The faces of the mesh.

#### `isosurface..marchingCubes(dims, potential[, bounds])`

Same as above, except uses marching cubes instead of surface nets to extract the isosurface.

#### `isosurface.marchingTetrahedra(dims, potential[, bounds])`

Same as above, except uses marching tetrahedra instead of surface nets to extract the isosurface.


# Credits
(c) 2012-2014 Mikola Lysenko.  MIT License