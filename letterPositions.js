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
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !==${array2} `);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

//assertEqual
//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should not PASS

const letterPositions = function(sentence) {
  const results = {};
   for(let i = 0 ; i < sentence.length; i++){
  //console.log(sentence[i]); will show all letters in seprate lines
  let letter = sentence[i];

  //you have to go reverse becuase you have to define it first
  //if letter is nothing:
  if(letter !== ' '){
    
    //The syntax for accessing the property of an object is: objectName[expression]
    //if it is false
    if(!results[letter]){
      //will give me the first index
      results[letter] = [i]
     } else { //if we have more than one letter
      results[letter].push(i);
    }
  }
}
  //console.log(results)
  return results;  
};
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);

/*
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/