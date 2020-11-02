const assertEqual = require('./assertEqual')

const tail = function(array2){
  //returtn array without index0 means first value
  return array2.slice(1);
};
tail([1,2,3])

module.exports = tail;
