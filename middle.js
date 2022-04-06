//eqArrays function
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

//assertArrayEqual function
const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2) === true) {
    console.log('✅✅✅ Assertion Passed: Your Arrays are equal');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Your arrays are not equal')
  }
};


//without function
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

//middle function
const middle = function (array) {
  //finds middle element
  let middleElement = []; 
  console.log('middle element:', middleElement);

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

//TEST CODE
assertArraysEqual(middle([]), []); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]