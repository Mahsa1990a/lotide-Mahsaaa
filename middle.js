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
//Test code :
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should not PASS
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); 

const assertArraysEqual = function(array1, array2){
  //using eqArrays function inside this function
  //if it's true : console.log ...
  if(eqArrays(array1, array2)){
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2} `);
  }
};
//Test:
//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
//////////////////////////////////////////////////////////////////////////////

// array with no element return empty array
// even array = return two middle
// odd array = retun one middle
const middle = function(array){

  //let midNum = array[Math.round(Math.floor(array.length - 1/ 2))]; 
  //Dividing the length by two and using Math.round would give you index three rather than two, so you would need to subtract one from the length first
  let evenMidNum = array[Math.floor(array.length / 2)];
  //For an array with an even number of items, that will give you the second of the two items
  let oddMidNum = array[Math.floor((array.length - 1) / 2)];

  if(array.length <= 2){
    return [];
  }
  if(array.length % 2 === 0){
    //we put [... , ...] to return new array with 2 elements
    return [oddMidNum, evenMidNum]; // two middle
  } else {
    //if we don't put [] will show 2 !== 2 because we have to return [2]
    return [oddMidNum];//one middle 
  }
};
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), [1] )// => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2] //odd
assertArraysEqual(middle([1, 2, 3, 4]), [2]) // => [2, 3] //even







