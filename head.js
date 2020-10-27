// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let head1 = '';
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected} `);
  }
};

const head = function(array1){
  return array1[0];
};
//console.log([1, 2, 3, 4]); 

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);