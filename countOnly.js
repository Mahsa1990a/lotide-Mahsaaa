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

//function should take in a collection of items and return counts for a specific subset of those items
//which items we care about and it will only count those, ignoring the others

const countOnly = function(allItems, itemsToCount) {
  // allItems : array
  // itemsToCount : object
  
  const results = {}; //define an empty obj for result

  //loop through allItems array --> for of
  for(const item of allItems){ 
    if(itemsToCount[item]){    // if it's true
      if(results[item]){   //and if we have it in array more than one
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
//return an object containing counts of everything that the input object listed 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//allItems : firstNames , itemsToCount : { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);