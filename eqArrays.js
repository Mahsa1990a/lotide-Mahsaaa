const assertEqual = require ('./assertEqual')

const eqArrays = function(array1, array2){
  // if their length not same --> false
  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0 ; i < array1.length ; i++){
    //if their element are not same return false
    if(array1[i] !== array2[i]){
      return false;
    } //otherwise return true
  } return true;
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = eqArrays;
