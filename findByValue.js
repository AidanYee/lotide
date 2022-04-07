const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const findKeyByValue = function(object, show) {

  for (let i in object) {
    //check to see if loops object's keys
    //console.log('object index',object[i]) 
    //conditional if => matches keys with show argument
    if (object[i] === show) 
    //return matching
    return i; 
 }

};

//Test Code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);