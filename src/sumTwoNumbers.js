/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const first = (typeof firstNumber === 'string')? firstNumber.replaceAll(' ', '') * 1 : firstNumber;
  const second = (typeof secondNumber === 'string')? secondNumber.replaceAll(' ', '') * 1 : secondNumber;
  return first + second;
}
