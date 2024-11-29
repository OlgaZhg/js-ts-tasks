/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {

  return function sort(...args) {
    let temp;
    const result = [];
    for (let i = 0; i < arguments.length - 1; i++) {
      if (TestUtils.sortComparator(arguments[i], arguments[i + 1]) > 0) {
        temp = arguments[i];
        arguments[i] = arguments[i + 1];
        arguments[i + 1] = temp;
        i = -1;
      }
    }
    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    return result;
  }
}