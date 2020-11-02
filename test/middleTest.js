// test/middleTest.js
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

//TEST CODE
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), [1] )// => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2] //odd
assertArraysEqual(middle([1, 2, 3, 4]), [2]) // => [2, 3] //even