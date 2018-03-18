/**
 * @param {string} text - input string to be converted into numbers
 * @returns {string} - result containing the numbers of the order of the letters in the alphabet
 */
function alphabetPosition(text) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const array = [];
  text
    .toLowerCase()
    .split("")
    .map((letter) => {
      alphabet.map((value, key) => {
        if (letter === value) {
          array.push(key + 1);
        }
        return true;
      });
      return true;
    });
  const newText = array.join(" ");
  return newText;
}

alphabetPosition("The narwhal bacons at midnight.");

module.exports = {
  alphabetPosition
};
