const assertEqual = require('../assertEqual');
const tail = require ('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log(result)

const result2 = tail(["Head", "Shoulders", "Knees", "Toes"]);
assertEqual(result2[0],"Shoulders");
console.log(result2)