const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('✅✅✅ Assertion Passed: Your Arrays are equal');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Your arrays are not equal');
  }
};

module.exports = assertArraysEqual;