/**
 * a string is passed and returns an array with all the chars,
 * where two consequitive are not the same
 * @param {string} iterable - input string
 * @returns {array} res (result)
 */
function uniqueInOrder(iterable) {
  if (iterable.trim() === "" || typeof iterable !== "string") {
    return [];
  }
  const newIterable = iterable.trim().toLowerCase();
  const len = newIterable.length;
  const res = [newIterable[0]];
  for (let i = 1; i < len; i += 1) {
    if (newIterable[i] !== newIterable[i - 1]) {
      res.push(newIterable[i]);
    }
  }
  return res;
}

module.exports = {
  uniqueInOrder
};
