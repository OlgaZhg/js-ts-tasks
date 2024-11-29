/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {

  return function formattedAddress(address) {
    let result = "";

    for (let i = 0; i < order.length - 1; i++) {
      result = `${result + address[order[i]]}, `;
    }
    return result + address[order[order.length-1]];
  }
};
