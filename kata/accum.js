function accum(s) {
    var result = [];
    for (let i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        result.push(char.toUpperCase());
        var counter = i;
        while (counter > 0) {
            result[i] = result[i].concat(char.toLowerCase());
            counter--;
        }
    }

    return result.join('-');
}

module.exports = {
    accum
};
