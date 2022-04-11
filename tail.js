const assertEqual = require('./assertEqual');

//es 5 function
// const tail = function(array) {
//   return array.slice(1);
// };

//es 6 arrow function
tail = (array) => array.slice(1);

module.exports = tail