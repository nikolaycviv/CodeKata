/**
 * Given an array of even or odd numbers, separated with space, this function returns either
 * the position of odd or the even number
 * @param {array} numbers (array of numbers)
 * @returns {number} position of odd/even number
 */
function oddEvenNumbers(nums) {
  let numbers = "";
  if (!Array.isArray(nums)) {
    numbers = nums.split(" ");
  }
  const len = numbers.length;
  let positionOdd = 0;
  let positionEven = 0;
  let odd = 0;
  let even = 0;
  for (let i = 0; i < len; i += 1) {
    if (numbers[i] % 2 === 0) {
      even += 1;
      positionEven = i + 1;
    } else {
      odd += 1;
      positionOdd = i + 1;
    }
  }
  if (odd === 1) {
    return positionOdd;
  } else if (even === 1) {
    return positionEven;
  }
  return true;
}

module.exports = {
  oddEvenNumbers
};
