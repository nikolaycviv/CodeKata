const assert = require('chai').assert;
const camelCase = require('../kata/camelCase').camelCase;

describe('Basic tests', () => {
    it('test case -> TestCase', () => {
        assert.equal(camelCase('test case'), 'TestCase');
    });
    it('test case -> TestCase', () => {
        assert.equal(camelCase('camel case method'), 'CamelCaseMethod');
    });
    it('test case -> TestCase', () => {
        assert.equal(camelCase('say hello '), 'SayHello');
    });
    it('test case -> TestCase', () => {
        assert.equal(camelCase(' camel case word'), 'CamelCaseWord');
    });
    it('test case -> TestCase', () => {
        assert.equal(camelCase(''), '');
    });
});
