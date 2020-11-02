const assertEqual = require ('./assertEqual')
const eqArrays = require ('./eqArrays')

const assertArraysEqual = function(array1, array2){
  //using eqArrays function inside this function
  //if it's true : console.log ...
  if(eqArrays(array1, array2)){
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2} `);
  }
};


module.exports = assertArraysEqual;