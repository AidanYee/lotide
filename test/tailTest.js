//const assertArraysEqual = require('../assertArraysEqual');
const tail = require ('../tail');
const assert = require('chai').assert;

// Mocha & Chai testing

describe('#tail', () => {
  it('returns [3, 2] for [1, 3, 2]', () => {
    assert.deepEqual(tail([1, 3, 2]), [3, 2]);
  }); 
  it('returns [3, 2] for [1, 3, 2]', () => {
    assert.deepEqual(tail([1, 3, 2]), [1, 2]); //failing test
  });
});