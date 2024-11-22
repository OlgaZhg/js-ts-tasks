/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let countCurrent = 0; // length of the sequence of equal elements that is being checked
  let countMax = 0; // length of the maximal sequence of equal elements
  let indexCurrent = 0; // index of the first element in countCurrent
  let indexMax = 0; // index of the first element in countMax

  if(arr.length === 0) {
    return arr;
  }
  countCurrent = 1; // arr contains at least 1 element
  countMax = 1; // arr contains at least 1 element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[indexCurrent]) {
      countCurrent++;
    }
    if((arr[i] !== arr[indexCurrent]) || (i===arr.length - 1)) { // 2 conditions in 1 'if' because the same evaluations are needed for both
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