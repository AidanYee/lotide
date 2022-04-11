const assertEqual = require('./assertEqual');


eqArrays = (ar1, ar2) => {
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

module.exports = eqArrays