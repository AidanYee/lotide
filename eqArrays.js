const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

module.exports =  assertEqual;

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

let eqArrays = function(ar1, ar2) {
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


//TEST CODE

//console.log(eqArrays([1,2,3], [1,2,3]));
//console.log(eqArrays([1,2,'3'], [1,2,3]));
//console.log(eqArrays([1,3,3,4], [1,3,3]));
//console.log(eqArrays([], []));

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [3,2,1]), false);

assertEqual(eqArrays(["1","2","3"], ["1","2","3"]), true);
assertEqual(eqArrays(["1","2","3"], ["1","2",3]), false);

