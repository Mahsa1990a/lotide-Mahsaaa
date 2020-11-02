// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected} `);
  }

};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

//It will help us search for a key on an object where its value matches a given value.
// takes in an object and a value
//scan object 
//return the first key which contains the given value
//If no key with that given value is found, then it should return undefined.

// Object.keys function to help you easily search through all the object keys
//Consider using for...of to loop over the keys returned by Object.keys.

const findKeyByValue = function(object1, value1){

  for(let key in object1){
    //console.log(key)   // will show all keys sci-fi, comedy, drama
    //accessing object key
    if(object1[key] === value1){
      return key;
    }
  } return undefined;
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire")
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


//extra practice
//const findUserWithId = function(bestTVShowsByGenre, id) {
  //console.log('users: ' , bestTVShowsByGenre);
  //console.log('id', id);
  //return bestTVShowsByGenre[id];
//}

//console.log(findUserWithId(bestTVShowsByGenre, 'drama'));