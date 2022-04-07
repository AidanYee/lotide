//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

//countLetters function

const countLetters = function(inputString){
  //create object
  const numOfEachLetter = {};
  //loop though string
  for (let x of inputString) {
    //console.log("x:",x)
    //console.log("numOfEachLetter:",numOfEachLetter);
    //conidtional if statement to count letters
    if (x === " ")  { continue
      }  if (numOfEachLetter[x]) {
        numOfEachLetter[x] += 1
      } else {
        numOfEachLetter[x] = 1
      }
}
return numOfEachLetter;
  //return letter count
}; 

console.log(countLetters("lighthouse in the house"));


const result = countLetters("lighthouse in the house")

assertEqual(result["l"], 1)
assertEqual(result["i"], 2)
assertEqual(result["o"], 2)
assertEqual(result["t"], 1)