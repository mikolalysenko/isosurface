isosurface
==========

Isosurface polygonizer algorithms in JavaScript.  For more details, see the following blog posts:

http://0fps.wordpress.com/2012/07/10/smooth-voxel-terrain-part-1/

http://0fps.wordpress.com/2012/07/12/smooth-voxel-terrain-part-2/

Usage
=====

First, install the library via npm:

    npm install isosurface
    

`require("isosurface").surfaceNets(dims, potential[, bounds])`
--------------------------------------------------------------

Extracts an isosurface from `potential` using surface nets with resolution given by `dims`.

Params:
* `dims`: A 3D vector of integers representing the resolution of the isosurface
* `potential(x,y,z)`: A scalar valued potential function taking 3 coordinates as arguments returning a scalar.
* `bounds`: A pair of 3D vectors `[lo, hi]` giving bounds on the potential to sample.  If not specified, default is `[[0,0,0], dims]`.

Returns: A mesh object with the following members:
* `positions`: The coordinates of the vertices of the mesh
* `faces`: The faces of the mesh.

`require("isosurface").marchingCubes(dims, potential[, bounds])`
--------------------------------------------------------------

Same as above, except uses marching cubes instead of surface nets to extract the isosurface.

`require("isosurface").marchingTetrahedra(dims, potential[, bounds])`
--------------------------------------------------------------

Same as above, except uses marching tetrahedra instead of surface nets to extract the isosurface.


Acknowledgements
================

(c) 2012-2013 Mikola Lysenko.  MIT License
