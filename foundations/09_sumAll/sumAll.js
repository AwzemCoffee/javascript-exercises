const sumAll = function (min, max) {
    if (min < 0 ||
        !Number.isInteger(min) ||
        !Number.isInteger(max)) return "ERROR";

    if (min > max) [min, max] = [max, min];

    let range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    let result = range.reduce((sum, digit) => sum + digit, 0)
    return result;
};

// Do not edit below this line
module.exports = sumAll;
