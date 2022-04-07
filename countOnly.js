//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};


//countOnly
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log('items:', item)

    //Added an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
        //console.log('item2', item)
      }
    }
  }
  return results;
}
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
  ];


const result1 = countOnly(firstNames, 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
