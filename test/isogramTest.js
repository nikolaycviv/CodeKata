const assert = require('chai').assert;
const isogram = require('../kata/isogram').isIsogram;

describe('Isogram?', () => {
    describe('Yes', () => {
        it('asdfgh', () => {
            assert.equal(isogram('asdfgh'), true);
        });
    });
    describe('No', () => {
        it('aasd', () => {
            assert.equal(isogram('aasd'), false);
        });
        it('a sd', () => {
            assert.equal(isogram('a sd'), false);
        });
        it('\' \'', () => {
            assert.equal(isogram(' '), false);
        });
    });
});
