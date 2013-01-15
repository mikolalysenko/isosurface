console.log(require("../index.js").surfaceNets([32,32,32],
  function(x,y,z) {
    return Math.sqrt(x*x+y*y+z*z) - 7;
  }, [[-10,-10,-10],[10,10,10]]))
