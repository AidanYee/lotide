const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //conditional that compares the key length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; 
  }
  //loop though keys for one of the objects
  for (let key of Object.keys(object1)) {
    //compare arrays of object with condittional
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    const arrayValue = eqArrays(object1[elem], object2[elem]);
      if (!arrayValue) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
      }
    }
    //run through all flase senarios first
    return true;


  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false