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

const mountains = ["Robson", "Chief", "Assiniboine", "Garibaldi", "Waddington"];

const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  //console.log('item BEFORE: ',item)
  //console.log('item AFTER: ',callBack(item))
  //console.log('---');
  }
  return results;
}
//Test Code 
const mountains1 = map(mountains, mountain => mountain[0]);
console.log(mountains1);

assertArraysEqual(mountains1,['R', 'C', 'A', 'G', 'W']);

//Test 2
const mountains2 = map(mountains, (word) => "I summited " + word);
console.log(mountains2)

assertArraysEqual(mountains2,["I summited Robson", "I summited Chief", "I summited Assiniboine", "I summited Garibaldi", "I summited Waddington"]);

//Test 3
const mountains3 = map(mountains, mountain => mountain[2]);
console.log(mountains3);

assertArraysEqual(mountains3,[ 'b', 'i', 's', 'r', 'd' ]);
