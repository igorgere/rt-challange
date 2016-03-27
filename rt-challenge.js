'use strict';

var helpers = require('./helpers');
var input = require('./input');

let array = input.arrayB;

//  Solution of problem.
/**
  Solution path is in format [0,0,1,0] (binary) where
  children choice is represented as:
   - 0 means left choice
   - 1 means right choice
*/
let solutionPath = [];
let solutionSum = 0;

//  Traversal
let path = helpers.initialPath(array);
while (path) {
  let sum = helpers.sumPath(path, array)

  if (sum > solutionSum) {
    solutionPath = path.slice();
    solutionSum = sum;
  }

  path = helpers.nextPath(path);
}

console.log('Solution :', solutionPath, solutionSum);
