const { assert } = require('chai');
const { sumDigPow } = require('../kata/sumDigPow');

describe('sumDigPow', () => {
    describe('it should pass', () => {
        it('Is it an array?', () => {
            assert.isArray(sumDigPow(1, 100), true);
        });
        it('1 - 9 -> 1, 2, 3, 4, 5, 6, 7, 8, 9', () => {
            assert.deepEqual(sumDigPow(1, 9), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
        });
        it('10 - 150 -> 89, 135', () => {
            assert.deepEqual(sumDigPow(10, 150), [ 89, 135 ]);
        });
    });
});
