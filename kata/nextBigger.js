/**
 * swaps 2 indexes/numbers
 * @param {array} ar (input array)
 * @param {number} i (index)
 * @param {number} j (index)
 * @returns {void}
 */
function swap(ar, i, j) {
    const temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
}

/**
 * it takes a positive integer number and returns the next bigger number formed by the same digits
 * @param {number} number (input value)
 * @returns {number} result
 */
function nextBigger(number) {
    // make sure we are dealing with a valid number.
    if (typeof number !== 'number' && number < 1) {
        return false;
    }

    let result = [];

    const length = Math.log(number) * Math.LOG10E + 1 | 0;
    let arrayOfDigits = number.toString().split('');

    let i = length - 1;
    for (; i > 0; i -= 1) {
        if (arrayOfDigits[i] > arrayOfDigits[i - 1]) {
            break;
        }
    }
    if (i === 0) {
        return -1;
    }
    let min = i;
    const a = arrayOfDigits[i - 1];
    for (let j = i + 1; j < length; j += 1) {
        if (arrayOfDigits[j] > a && arrayOfDigits[j] < arrayOfDigits[min]) {
            min = j;
        }
    }

    swap(arrayOfDigits, i - 1, min);

    const tempArray = arrayOfDigits.slice(i, length);
    tempArray.sort();
    arrayOfDigits = arrayOfDigits.slice(0, i).concat(tempArray);

    for (i = 0; i < length; i += 1) {
        result.push(arrayOfDigits[i]);
    }

    result = parseInt(result.join(''));

    return number === result ? -1 : result;
}

module.exports = {
    nextBigger
};
