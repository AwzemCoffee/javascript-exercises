const convertToCelsius = function (tempF) {
    let toCelsius = ((tempF - 32) * 5 / 9);
    toCelsius = Math.round(toCelsius * 10) / 10;
    return toCelsius;
};

const convertToFahrenheit = function (tempC) {
    let toFahrenheit = (tempC * 9 / 5 + 32);
    toFahrenheit = Math.round(toFahrenheit * 10) / 10;
    return toFahrenheit;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
