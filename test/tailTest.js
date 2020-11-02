// test/tailTest.js
const tail = require('../tail')
const assertEqual = require('../assertEqual')

//TEST CODE
assertEqual(tail([1,5,6,7]), 5);
assertEqual(tail(['A', "Hello", "Lighthouse", "Labs"]), "Hello");