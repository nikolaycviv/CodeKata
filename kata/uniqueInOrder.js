/**
 * a string is passed and returns an array with all the chars, where two consequitive are not the same
 * @param {string} iterable - input string
 * @returns {array} res (result)
*/
function uniqueInOrder(iterable) {
    if (iterable.trim() === '' || typeof iterable !== 'string') {
        return [];
    }
    iterable = iterable.trim().toLowerCase();
    const len = iterable.length;
    const res = [iterable[0]];
    for (let i = 1; i < len; i += 1) {
        if (iterable[i] !== iterable[i - 1]) {
            res.push(iterable[i]);
        }
    }
    return res;
}

module.exports = {
    uniqueInOrder
};
