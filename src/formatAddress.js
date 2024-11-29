/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
// eslint-disable-next-line no-shadow
module.exports.formatAddress = function formatAddress() {

    return function formattedAddress(param) {
      return `${param.street}, ${param.house}, ${param.apartment}, ${param.city}, ${param.postalCode}, ${param.country}`;
    }
  }

