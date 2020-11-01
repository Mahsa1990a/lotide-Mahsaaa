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

//should return new array with elements from source but without itemsToRemove
const without1 = function(sourceArray, itemsToRemoveArr){
  let output = [];

  for(let i = 0; i < sourceArray.length; i++){
    //console.log(i) 0 1 2 
    // console.log(sourceArray[i]) 1 2 3

    //becuase [1] !== [1]
    if(sourceArray[i] !== itemsToRemoveArr[i]){
      //so push the rest of array 1 to array 2 and return it 
     output.push(sourceArray[i]);
   } 
  } return output;
};
console.log(without1([1, 2, 3], [1]))//=> [2,3]
console.log(without1([1, 2, 3, 4], [1]))//=> [2,3,4]
assertArraysEqual(without1([1, 2, 3], [1]), [1])

const words = ["hello", "world", "lighthouse"];
without1(words, ["lighthouse"]); // no need to capture return value for this test case ???
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
