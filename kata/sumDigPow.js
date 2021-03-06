/**
 * Returns an array of numbers betwen two inputs where
 *  example 1: xy = x^1 + y^2 (like 89)
 *  example 2: xyz = x^1 + y^2 + z^3 (like 135)
 * @param {number} a - starting number
 * @param {number} b - end number
 * @returns {array} the result
 */
function sumDigPow(a, b) {
    if(typeof a !== 'number' && typeof b !== 'number') {
        return false;
    }
    const result = [];

    for(let i = a; i <= b; i = i + 1) {
        let sum = 0;
        for(let j = 0; j <= i.toString().length; j++) {
            sum = sum + parseInt(i.toString()[j], 10) ** (j + 1);
            if(sum === i) {
                result.push(i);
            }
        }
    }

    return result;
}

module.exports = {
    sumDigPow
};
