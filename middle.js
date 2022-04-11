//eqArrays function
const eqArrays = require('./eqArrays')

//assertArrayEqual function
const assertArrayEqual = require('./assertArraysEqual');

//middle function
const middle = function (array) {
  //finds middle element
  let middleElement = []; 
  //console.log('middle element:', middleElement);

  //Determine if array is odd or even. 
  if (array.length >= 3) {
    for (let i = 0; i < array.length; i++) {
      if (array.length % 2 !== 0) {
        middleElement.push(Math.ceil(array.length / 2));
        return middleElement;
      } else {
        //if the array has an odd amount of element, push twice to return two middle number values
    middleElement.push(array.length / 2) && middleElement.push(array.length / 2 + 1)
    return middleElement;
    }
   }
  }
  return middleElement;
};

module.exports = middle;

 