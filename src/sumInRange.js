/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const startNumber = (typeof start === 'string')? start.replaceAll(' ', '') * 1: start;
  const endNumber = (typeof end === 'string')? end.replaceAll(' ', '') * 1: end;
  let result = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    result += i;
  }
  return result;
}


