/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {

  return function testPalindrome(text) {
    let symb;
    let result = '';
    const text1 = text.toLowerCase().trim();
    for (let i = 0; i < text1.length; i++) {
      symb = text1.charAt(i);
      if ((symb !== symb.toUpperCase()) || (typeof Number(symb) === 'number')) {
        result += symb;
      }
    }

    return TestUtils.isPalindrome.call(result);
  }
}