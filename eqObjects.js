// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected} `);
  }

};
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS
//////////////////////////////////////////////////////////////////////////////////

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(object1, object2) {
  //use the Object.keys function on both objects and compare their lengths.
  if (Object.keys(object1).length === Object.keys(object2).length ) {
    // loop for object
    for(let key in object1){
      //Within our loop, we can use Array.isArray against both values to see if array comparisons need to be made
      if(Array.isArray(object1[key])){
        if(!eqArrays(object1[key], object2[key])){
          return false;
        }
      } else if(object1[key] !== object2[key]){
        return false;
      }
    }
    return true;
  } 
  return false;
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
//
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false