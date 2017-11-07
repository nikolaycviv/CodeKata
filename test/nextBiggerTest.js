const assert = require('chai').assert;
const nextBigger = require('../kata/nextBigger').nextBigger;

describe('nextBigger', () => {
    context('passing valid values', () => {
        it('should return 12', () => {
            const result = nextBigger(12);
            assert.equal(result, 21);
        });
        it('should return 531', () => {
            const result = nextBigger(513);
            assert.equal(result, 531);
        });
        it('should return 2071', () => {
            const result = nextBigger(2017);
            assert.equal(result, 2071);
        });
        it('should return 441', () => {
            const result = nextBigger(414);
            assert.equal(result, 441);
        });
        it('should return 414', () => {
            const result = nextBigger(144);
            assert.equal(result, 414);
        });
        it('should return 536479', () => {
            const result = nextBigger(534976);
            assert.equal(result, 536479);
        });
    });
    describe('return -1', () => {
        it('9', () => {
            const result = nextBigger(9);
            assert.equal(result, -1);
        });
        it('111', () => {
            const result = nextBigger(111);
            assert.equal(result, -1);
        });
        it('531', () => {
            const result = nextBigger(531);
            assert.equal(result, -1);
        });
    });
});
