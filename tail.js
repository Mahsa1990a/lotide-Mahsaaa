// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let head1 = '';
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected} `);
  }
};

const tail = function(array2){
  return array2.slice(1);
}

let result = tail([1,2,3])
//console.log(result)
assertEqual(result[0], 2)
assertEqual(result[1], 2)
assertEqual(result.length, 2)
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(tail([1,5,6,7]), 5);
assertEqual(tail(['A', "Hello", "Lighthouse", "Labs"]), "Hello");