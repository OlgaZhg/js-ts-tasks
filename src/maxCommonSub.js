/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
    let shortest;
    let longest;
    let checkingCombination;

    if (str1.length > str2.length) {
      shortest = str2.toLowerCase();
      longest = str1.toLowerCase();
    } else {
      shortest = str1.toLowerCase();
      longest = str2.toLowerCase();
    }

    for (let i = shortest.length; i > 0; i-- ) { // length of the slice of the shortest string
      for (let j = 0; j <= shortest.length - i; j++) { // index of the character of the shortest string from which to slice
        checkingCombination = shortest.slice(j,j+i);
        if (longest.indexOf(checkingCombination) > -1) { // checking if the current checkingCombination is found in the longest string
          return checkingCombination;
        } // otherwise, go to for2, check the condition of for2 iteration. If yes, continue, if not, go to for1.
      }
    }
    return ''; // if no common sub found
};
