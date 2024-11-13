/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let countCurrent = 0;
  let countMax = 1;
  let indexCurrent = 0;
  let indexMax = 0;

  if(arr.length === 0) {
    return arr;
  }
  countMax = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[indexCurrent]) {
      countCurrent++;
    }
    if((arr[i] !== arr[indexCurrent]) || (i===arr.length - 1)) {
      if(countCurrent > countMax) {
        countMax = countCurrent;
        indexMax = indexCurrent;
      }
      indexCurrent = i;
      countCurrent = 1;
    }

  }
  return arr.slice(indexMax, indexMax + countMax);
}