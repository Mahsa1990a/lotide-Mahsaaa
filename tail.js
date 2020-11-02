// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `);
  }
};
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const tail = function(array2){
  //returtn array without index0 means first value
  return array2.slice(1);
};
let result = tail([1,2,3])
console.log(result)
assertEqual(result[0], 2)
assertEqual(result[1], 2)
assertEqual(result.length, 2)

assertEqual(tail([1,5,6,7]), 5);
assertEqual(tail(['A', "Hello", "Lighthouse", "Labs"]), "Hello");