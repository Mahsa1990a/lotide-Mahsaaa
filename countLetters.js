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

//take a sentence(as string) and return a count of the letters in that sentences
//ex countLetters("LHL") should return L apears twice and H once
const countLetters = function(str){
  let result = {};
  for(let word of str){
    //console.log(word)
    if(word === ' '){
      //stop here and move to next loop
      continue;
    }
    //if we have that letter again add one to it
    //The syntax for accessing the property of an object is: objectName[expression] 
    if(result[word]){
    //it is actual value to increase 
    result[word]++;
   } else {
     result[word] = 1;
   }
   
  } 
  console.log(result);
  return result;
};
countLetters("lighthouse in the house")
/*{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/