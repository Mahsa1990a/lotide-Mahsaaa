// test/tailTest.js
//const tail = require('../tail')
//const assertEqual = require('../assertEqual')

//TEST CODE
//assertEqual(tail([1,5,6,7]), [5,6,7]);
//assertEqual(tail(['A', "Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("returns [5,6,7] for [1,5,6,7]", () => {
    assert.deepEqual(tail([1,5,6,7]), [5,6,7]);
  });

  it('returns ["Hello", "Lighthouse", "Labs"] for ["A", "Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(['A', "Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);
  });
  
});