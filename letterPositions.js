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
    return true;
};

const letterPositions = function(inputString) {
  //object to hold letter and indexs of the letters
  const results = {};
  // create a loop for argument => is a string
  for (let i = 0; i < inputString.length; i++) {
    //console.log('index', inputString[i]);
    
    //For each letter in your results object, create an array if one is not already there - from compass!

    const letter = inputString[i];

    if (inputString[i] === ' ') { 
      continue;
      } if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);

  }
  return results;
};


assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);