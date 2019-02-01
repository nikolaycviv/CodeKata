/**
 * it takes a positive integer number and returns the next bigger number formed by the same digits
 * @param {number} number (input value)
 * @returns {number} result
 */
function nextBigger(number) {
    // make sure we are dealing with a valid number.
    if(typeof number !== 'number' && number < 1) {
        return false;
    }

    let result = [];

    const length = Math.log(number) * Math.LOG10E + 1 | 0;
    let arrayOfDigits = number.toString().split('');

    let i = length - 1;
    for(; i > 0; i--) {
        if(arrayOfDigits[i] > arrayOfDigits[i - 1]) {
            break;
        }
    }
    if(i === 0) {
        return -1;
    }
    let min = i;
    const a = arrayOfDigits[i - 1];
    for(let j = i + 1; j < length; j++) {
        if(arrayOfDigits[j] > a && arrayOfDigits[j] < arrayOfDigits[min]) {
            min = j;
        }
    }

    [ arrayOfDigits[i - 1], arrayOfDigits[min] ] = [
        arrayOfDigits[min],
        arrayOfDigits[i - 1]
    ];

    const tempArray = arrayOfDigits.slice(i, length);
    tempArray.sort();
    arrayOfDigits = arrayOfDigits.slice(0, i).concat(tempArray);

    for(i = 0; i < length; i = i + 1) {
        result.push(arrayOfDigits[i]);
    }

    result = parseInt(result.join(''), 10);

    return number === result ? -1 : result;
}

module.exports = {
    nextBigger
};
