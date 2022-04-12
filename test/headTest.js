//const assertEqual = require('../assertEqual'); 
//no longer need assertEqual as we are using mocha & chai to validate
const head = require('../head');

//Mocha & Chai
const assert = require('chai').assert;

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => { 
    assert.strictEqual(head(['5']), '6'); //failing test
  });

  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });

  it("returns \"This\" for [\"This\", \"is\", \"a\", \"test\"]", () => {
    assert.strictEqual(head(["This", "is", "a", "test"]), "This")
  });
});

