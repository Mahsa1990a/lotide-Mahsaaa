// test/middleTest.js
//const middle = require('../middle')
//const assertArraysEqual = require('../assertArraysEqual')

//TEST CODE
//assertArraysEqual(middle([1]), []) // => []
//assertArraysEqual(middle([1, 2]), [1] )// => []
//assertArraysEqual(middle([1, 2, 3]), [2]) // => [2] //odd
//assertArraysEqual(middle([1, 2, 3, 4]), [2]) // => [2, 3] //even

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2])", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for 1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  
});