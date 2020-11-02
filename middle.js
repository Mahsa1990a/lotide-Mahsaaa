const assertEqual = require ('./assertEqual')
const eqArrays = require ('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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
module.exports = middle;
