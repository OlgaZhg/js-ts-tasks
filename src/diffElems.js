/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let arrUnique = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!arrUnique.includes(arr[i])) {
      arrUnique.push(arr[i]);
    }
  }
  return arrUnique.length;
}