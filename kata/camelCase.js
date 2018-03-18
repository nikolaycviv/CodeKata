/**
 * Function that returns every string to Camel Case if words in it are separated with spaces
 * @param {string} string - initial string of words, separated with spaces
 * @returns {string} the result
 */
function camelCase(string) {
  return string
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

module.exports = {
  camelCase
};
