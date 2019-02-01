const { assert } = require('chai');
const { isIsogram } = require('../kata/isogram');

describe('Isogram?', () => {
    describe('Yes', () => {
        it('asdfgh', () => {
            assert.equal(isIsogram('asdfgh'), true);
        });
    });
    describe('No', () => {
        it('aasd', () => {
            assert.equal(isIsogram('aasd'), false);
        });
        it('a sd', () => {
            assert.equal(isIsogram('a sd'), false);
        });
        it('\' \'', () => {
            assert.equal(isIsogram(' '), false);
        });
    });
});
