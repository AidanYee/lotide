const takeUntil = function(array, callBack) {
  const values = [];
  for (let item of array) {
  if (callBack(item)) {
  return values;
  } else {
    values.push(item);
  }
 }
 return values;
}

const data1 = [1, 2, 5, 7, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',')
console.log(results2);