//assertArrayEqual
const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2) === true) {
    console.log('✅✅✅ Assertion Passed: Your Arrays are equal');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Your arrays are not equal')
  }
};

const eqArrays = function(ar1, ar2) {
  //if array lengths are not equal, return false
  if (ar1.length !== ar2.length) {
    return false;
  }
  //loop though each of the elements in array
    for (let i = 0; i < ar1.length; i++) {
      //console.log('ar1[i]',ar1[i])
      //console.log('ar2[i]',ar2[i])
      //if array 1 does not equal array 2 return 'false'
      if (ar1[i] !== ar2[i]) {
      return false;
      }
    }
    console.log('ar1:', ar1, 'ar2', ar2); //prints both arrays
    return true;
};

//New without function
const without = function(sorArr, itemsToRemove) {
  
  let removed = [];
  for (let element of sorArr) {
    //remove non matching element with .push
    if (!itemsToRemove.includes(element)) {
      removed.push(element);
    }
  }
  //console.log('sorArr:',sorArr);
  return removed;
};

//TEST CODE

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function
