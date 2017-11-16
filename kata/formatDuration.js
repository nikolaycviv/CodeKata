/**
 * input - seconds, output - number of years, days, hours, minutes, seconds those seconds represent
 * @param {number} seconds 
 */
function formatDuration(seconds) {
    if (typeof seconds !== 'number' || seconds < 0) return;
    if (seconds === 0) return 'now';

    const result = [],
        time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };

    for (let key in time) {
        if (seconds >= time[key]) {
            let val = Math.floor(seconds / time[key]);
            result.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/, ' and$1') : result[0];
}

/**
 * just for easy calculating of tests
 * @param {number} years 
 * @param {number} days 
 * @param {number} hours 
 * @param {number} minutes 
 * @param {number} seconds 
 */
function sum(years, days, hours, minutes, seconds) {
    return years * 31536000 + days * 86400 + hours * 3600 + minutes * 60 + seconds;
}

module.exports = {
    formatDuration,
    sum
};
