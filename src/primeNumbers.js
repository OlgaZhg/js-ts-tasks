/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {

    return function arrayPrimeNumbers(fnArgument1, fnArgument2) {
      if (fnArgument2 > highestNumber) {
        fnArgument2 = highestNumber;
      }
      const arrPrimeNumbers = [];
      let isPrime = true;
      for (let numToCheck = fnArgument1; numToCheck <= fnArgument2; numToCheck++) {
        isPrime = true;
        for (let i = 2; i <= Math.sqrt(numToCheck); i++) {
          if (numToCheck % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          arrPrimeNumbers.push(numToCheck);
        }
      }
      return arrPrimeNumbers;
    }
  };
