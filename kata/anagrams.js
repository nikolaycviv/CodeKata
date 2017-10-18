/**
 * Two words are anagrams of each other if they both contain the same letters. For example:
 * 'abba' & 'baab' == true
 * 'abba' & 'bbaa' == true
 * 'abba' & 'abbba' == false
 */

/**
 * Returns an anagram
 * @param {string} word - string that is the matching one
 * @param {array} words - array of strings that could cointain the "word"
 * @returns {array} array of matching anagrams of word in words
*/
function anagrams(word, words) {
    if (typeof words !== 'object' || typeof word !== 'string') {
        return;
    }

    return words.filter((item) => item.split('').sort().join('') === word.split('').sort().join(''));
}

module.exports = {
    anagrams
};
