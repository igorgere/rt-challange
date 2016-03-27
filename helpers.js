'use strict';

/**
  Returns initial path for given array.
*/
exports.initialPath = function(array) {
  let path = []
  array.forEach(p => {
    path.push(0);
  })
  return path;
}

/**
  Returns new path.
*/
exports.nextPath = function(path) {
  for (let a = path.length - 1; a > 0; a--) {
    path[a]++;

    if (path[a] == 1) {
      return path;
    } else {
      path[a] = 0;
    }
  }

  //  If all possibilities are reached return no path.
  return null;
}

/**
  Returns the sum on passed path.
*/
exports.sumPath = function(path, array) {
  let sum = 0;
  let position = 0;
  for (let a = 0; a < path.length; a++) {
    if (path[a]) {
      position ++;
    }

    sum += array[a][position];
  }

  return sum;
}
