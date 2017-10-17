/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

/**
 * Makes every even char of a string - capital letter, and every odd - small letter
 * @param {string} string - the input string separated with spaces only
 * @returns {string} the result
*/
function toWeirdCase(string) {
    if (typeof string !== 'string') {
        return;
    }

    return string.split(' ').map((word) =>
        word.split('').map((letter, i) =>
            i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        ).join('')
    ).join(' ');
}

module.exports = {
    toWeirdCase
};
