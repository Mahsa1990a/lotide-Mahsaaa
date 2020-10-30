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



const takeUntil = function(array, callback) {
  // function will return a "slice of the array with elements taken from the beginning."
  //It should keep going until the callback/predicate returns a truthy value
  const result = [];
  for(let item of array){

    //Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? 
    //If not, how can we make it stop?
    if(callback(item)){
      return result;
    }
    result.push(item);
  }
  return result;
  }
//the callback should only be provided one value: The item in the array.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
//[ 1, 2, 5, 7, 2 ]
//---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual([1, 2, 3], results1);