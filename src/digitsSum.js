/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */

module.exports.digitsSum = function digitsSum(n) {
  let result = 0;
  /*
  const nAbs = Math.abs(n);
  const nString = nAbs.toString();
   */
  const nString = n.toString();

  if (nString[0] !== "-") {
    result += nString[0] * 1;
  }
  for (let i = 1; i < nString.length; ++i) {
    result += nString[i] * 1;
  }

  return result;
};
