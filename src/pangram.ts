/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  let result = false;
  if (typeof word === "number") {
    const newString = word.toString();
    let flag = 0;
    let currentSymbol: string;
    for (let i = 0; i < 10; i += 1) {
      currentSymbol = i.toString();
      if (newString.indexOf(currentSymbol) < 0) {
        flag = -1;
      }
    }
    if (flag === 0) {
      result = true;
    }
  }
  const newString: string = word.toString();
  let flag = 0;
  let currentSymbol: string;
  for (let i = 97; i <= 122; i += 1) {
    currentSymbol = String.fromCharCode(i);
    if (newString.indexOf(currentSymbol) < 0) {
      flag = -1;
    }
  }
  if (flag === 0) {
    result = true;
  }
  return result;
};
