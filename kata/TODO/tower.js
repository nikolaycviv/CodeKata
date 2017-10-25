// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Have fun!

/**
 * Function that returns a tree-like result, where every next row has the middle index filled + adjacents ones
 * @param {number} rows - the number of rows of the tower
 * @returns {array} the result
 */
function tower(rows) {
    if (typeof rows !== 'number' || rows < 1) {
        throw new Error('try new value');
    }

    const array = [];
    const len = (rows - 1) / 2;

    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < len; j += 1) {
            // array[i][len].push();
        }
    }
    console.log(5);
    return array;
}

tower(5);

module.exports = {
    tower
};
