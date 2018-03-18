function accum(s) {
  const result = [];
  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);
    result.push(char.toUpperCase());
    let counter = i;
    while (counter > 0) {
      result[i] = result[i].concat(char.toLowerCase());
      counter -= 1;
    }
  }

  return result.join("-");
}

module.exports = {
  accum
};
