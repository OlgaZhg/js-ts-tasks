/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
    const resultArray = [];

    return new Promise((resolve, reject) => {
        let counter = 0;
        promisesArray.forEach ((element, index) => {
          element
            .then(promiseResult => {
              resultArray[index] = promiseResult;
              counter += 1;
              if (counter === promisesArray.length) {
                resolve(resultArray);
              }
            })
            .catch(reject)
        })
    })
  }