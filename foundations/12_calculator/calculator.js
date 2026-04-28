const add = function (a, b) {
    return (a + b);

};

const subtract = function (a, b) {
    return (a - b);
};

const sum = function (arr) {
    return arr.reduce((sum, digit) => {
        return (sum + digit);
    }, 0);
};

const multiply = function (arr) {
    return arr.reduce((product, digit) => {
        return (product * digit);
    });
};

const power = function (base, exponent) {
    return (base ** exponent);
};

const factorial = function (digit) {
    if (digit === 0) return 1;
    let factors = [];
    for (let factor = 1; factor <= digit; factor++) {
        factors.push(factor);
    }
    return factors.reduce((factorial, nextNum) => {
        return (factorial * nextNum);
    });
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
