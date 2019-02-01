/**
 * @param  {string} string an input string to be verified
 * @returns {string}
 */
function accum(string) {
    const result = [];
    for(let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        result.push(char.toUpperCase());
        let counter = i;
        while(counter > 0) {
            result[i] = result[i].concat(char.toLowerCase());
            counter--;
        }
    }

    return result.join('-');
}

module.exports = {
    accum
};
