/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let result = value;

  if (from === 'm' && to === "mi") {
    // result = Math.round((value / 1609.34) * 100) / 100;
    result = Number((value / 1609.344).toFixed(2));
  }
  if (from === 'mi' && to === "m") {
    result = Number((value * 1609.344).toFixed(2));
  }
  if (from === 'gr' && to === "pound") {
    result = Number((value / 453.592).toFixed(2));
  }
  if (from === 'pound' && to === "gr") {
    result = Number((value * 453.592).toFixed(2));
  }
  if (from === 'C' && to === "K") {
    result = Number((value + 273.15).toFixed(2));
  }
  if (from === 'K' && to === "C") {
    result = Number((value - 273.15).toFixed(2));
  }
  return result;
};
