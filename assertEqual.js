const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST CODE  - moved to test folder
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
// assertEqual(1, "Lighthouse Labs");

module.exports = assertEqual;