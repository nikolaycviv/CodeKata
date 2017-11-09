const assert = require('chai').assert;
const uniqueInOrder = require('../kata/uniqueInOrder').uniqueInOrder;

describe('testing uniqueInOrder', () => {
    describe('tests that should pass', () => {
        it('hheelloo', () => {
            assert.deepEqual(uniqueInOrder('hheelloo'), ['h', 'e', 'l', 'o']);
        });
        it('heelloo ttttttheerrrreeeee', () => {
            assert.deepEqual(uniqueInOrder('heelloo ttttttheerrrreeeee'), ['h', 'e', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e']);
        });
        it('   heelloo', () => {
            assert.deepEqual(uniqueInOrder('   heelloo'), ['h', 'e', 'l', 'o']);
        });
        it('hHeelloo   ', () => {
            assert.deepEqual(uniqueInOrder('hHeelloo   '), ['h', 'e', 'l', 'o']);
        });
    });
    describe('tests that should not pass', () => {
        it('\' \'', () => {
            assert.deepEqual(uniqueInOrder(' '), []);
        });
        it('\'\'', () => {
            assert.deepEqual(uniqueInOrder(''), []);
        });
    });
});
