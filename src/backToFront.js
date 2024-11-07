/**
 * Copy and addPart defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let addPart = "";

  if (symbolsCount > str.length) {
    return str;
  }
  for (let i = str.length - 1; i > (str.length - 1) - symbolsCount; i--) {
    addPart = `${str[i]}${addPart}`;
  }

  return `${addPart}${str}${addPart}`;
};
