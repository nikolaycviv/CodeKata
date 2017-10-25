const assert = require('chai').assert;
const camelCase = require('../kata/camelCase').camelCase;

describe('Basic tests', () => {
    it('test case -> TestCase', () => {
        assert.equal(camelCase('test case'), 'TestCase');
    });
    it('camel case method -> CamelCaseMethod', () => {
        assert.equal(camelCase('camel case method'), 'CamelCaseMethod');
    });
    it('\'say hello \' -> SayHello', () => {
        assert.equal(camelCase('say hello '), 'SayHello');
    });
    it('\' camel case word\' -> CamelCaseWord', () => {
        assert.equal(camelCase(' camel case word'), 'CamelCaseWord');
    });
    it('\'\' -> \'\'', () => {
        assert.equal(camelCase(''), '');
    });
});
