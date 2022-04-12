const assertEqual = function(actual, expected) {

  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const findKey = function(object, callBack){
  for (let item in object) {
    if (callBack(object[item])) {
      return item;
    }
  }
  return undefined
};


//Test Code 

/* refactored below
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), ("noma"));// => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), ("Blue Hill"));// => "noma" */ 

// Dry'ed up the test code by creating variables. Eliminates need to re-wrire the full object to test 

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 9 }
}, x => x.stars === 2) // => "noma"

const starNum = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 9 }
}


let actual1 = findKey(starNum,  x => x.stars === 2);
let expected1 = "noma"
assertEqual(actual1, expected1);

let actual2 = findKey(starNum,  x => x.stars < 2);
let expected2 = "Blue Hill"
assertEqual(actual2, expected2);

let actual3 = findKey(starNum,  x => x.stars === 9);
let expected3 = "Akelarre"
assertEqual(actual3, expected3);
