/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeof value) {
      continue;
    }
    if (typeof value === "object") {
      let arrKeys = Object.keys(arr[i]);
      let valueKeys = Object.keys(value);

      if (arrKeys.length !== valueKeys.length) {
        continue;
      } else {
        let objEqual = true;
        for (let key of arrKeys) {
          if (valueKeys.includes(key)) {
            if (arr[i][key] !== value[key]) {
              objEqual = false;
              break;
            }
          }
        }
        if (objEqual) {
          arr.splice(i, 1);
          i--;
        }
      }
    } else if (arr[i] === value) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}