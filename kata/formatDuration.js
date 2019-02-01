const time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
};

/**
 * input - seconds, output - number of years, days, hours, minutes, seconds those seconds represent
 * @param {number} secs number of seconds
 * @returns {number} duration
 */
function formatDuration(secs) {
    let seconds = secs;
    if(typeof seconds !== 'number' || seconds < 0) {
        return false;
    }
    if(seconds === 0) {
        return 'now';
    }

    const result = [];

    Object.keys(time).forEach((key) => {
        if(seconds >= time[key]) {
            let val = Math.floor(seconds / time[key]);
            result.push(val = val + (val > 1 ? ` ${key}s` : ` ${key}`));
            seconds = seconds % time[key];
        }
    });

    return result.length > 1 ?
        result.join(', ').replace(/,([^,]*)$/, ' and$1') :
        result[0];
}

/**
 * just for easy calculating of tests
 * @param {number} years number of years
 * @param {number} days number of days
 * @param {number} hours number of hours
 * @param {number} minutes number of minutes
 * @param {number} seconds number of seconds
 * @returns {number} duration
 */
function sum(years, days, hours, minutes, seconds) {
    return (
        years * time.year + days * time.day + hours * time.hour + minutes * time.minute + seconds
    );
}

module.exports = {
    formatDuration,
    sum
};
