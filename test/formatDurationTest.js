const { assert } = require('chai');
const { formatDuration } = require('../kata/formatDuration');

describe('Phrases that should be equal', () => {
    it('should return now', () => {
        assert.equal(formatDuration(0), 'now');
    });
    it('should return 1 second', () => {
        assert.equal(formatDuration(1), '1 second');
    });
    it('should return 1 minute and 2 seconds', () => {
        assert.equal(formatDuration(62), '1 minute and 2 seconds');
    });
    it('should return 2 minutes', () => {
        assert.equal(formatDuration(120), '2 minutes');
    });
    it('should return 1 hour', () => {
        assert.equal(formatDuration(3600), '1 hour');
    });
    it('should return 1 hour, 1 minute and 2 seconds', () => {
        assert.equal(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
    });
    it('should return 182 days, 1 hour, 44 minutes and 40 seconds', () => {
        assert.equal(
            formatDuration(15731080),
            '182 days, 1 hour, 44 minutes and 40 seconds'
        );
    });
    it('should return 4 years, 68 days, 3 hours and 4 minutes', () => {
        assert.equal(
            formatDuration(132030240),
            '4 years, 68 days, 3 hours and 4 minutes'
        );
    });
    it('should return 6 years, 192 days, 13 hours, 3 minutes and 54 seconds', () => {
        assert.equal(
            formatDuration(205851834),
            '6 years, 192 days, 13 hours, 3 minutes and 54 seconds'
        );
    });
    it('should return 8 years, 12 days, 13 hours, 41 minutes and 1 second', () => {
        assert.equal(
            formatDuration(253374061),
            '8 years, 12 days, 13 hours, 41 minutes and 1 second'
        );
    });
    it('should return 7 years, 246 days, 15 hours, 32 minutes and 54 seconds', () => {
        assert.equal(
            formatDuration(242062374),
            '7 years, 246 days, 15 hours, 32 minutes and 54 seconds'
        );
    });
    it('should return 3 years, 85 days, 1 hour, 9 minutes and 26 seconds', () => {
        assert.equal(
            formatDuration(101956166),
            '3 years, 85 days, 1 hour, 9 minutes and 26 seconds'
        );
    });
    it('should return 1 year, 19 days, 18 hours, 19 minutes and 46 seconds', () => {
        assert.equal(
            formatDuration(33243586),
            '1 year, 19 days, 18 hours, 19 minutes and 46 seconds'
        );
    });
});
