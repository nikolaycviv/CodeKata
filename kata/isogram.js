/**
 * function that checks if a word is an isogram
 * @param {string} str word to check
 * @returns {boolean} either an isogram or not
 */
function isIsogram(str) {
  if (typeof str !== "string") {
    return false;
  }
  const regex = /^(?:([a-z])(?!.*\1))*$/;
  return regex.test(str) && str !== "";
}

module.exports = {
  isIsogram
};
