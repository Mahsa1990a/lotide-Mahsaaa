const assertEqual = require ('./assertEqual')
const head = function(array1){
  //return first index in array
  return array1[0];
};
head([1, 2, 3]);

module.exports = head;