/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if(typeof arr[i] === typeof value) {

      if(typeof arr[i] === 'object') {
        let arrObjKeys = Object.keys(arr[i]);
        let valueObjKeys = Object.keys(value);

        if(arrObjKeys.length === valueObjKeys.length) {
          let equalObj;

          for (let key of arrObjKeys) {
            if(valueObjKeys.includes(key)) {
              if(arr[i][key] !== value[key]){
                equalObj = false;
                break;
              }
            }
            equalObj = true;
          }
          if(equalObj === true) {
            arr.splice(i, 1);
            i--;
          }
        }
      }
      if(arr[i] === value) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
}