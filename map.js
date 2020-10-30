// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected} `);
  }
};

const eqArrays = function(array1, array2){

  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] !== array2[i]){
      return false;
    } 
  } return true;
};

const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2)){
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2} `);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

//assertEqual
//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should not PASS



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // temporary code:
  //console.log('array: ', array);
  //console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
}

//1
//const results1 = map(words, word => word[0]);
//console.log(results1);
//2
//const results1 = words.map((word) => word[0])
//console.log(results1);
//3
const results1 = words.map(function(word){
  return word[0];
})
console.log(results1);
assertArraysEqual([1, 2, 3], results1);

