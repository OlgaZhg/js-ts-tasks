/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (Math.abs(arr[i]).toString().length > 3 ? 4 : Math.abs(arr[i]).toString().length);
  }
  return arr;
};
