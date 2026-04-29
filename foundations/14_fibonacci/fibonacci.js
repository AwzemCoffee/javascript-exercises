const fibonacci = function (index) {
    if (index < 0) return "OOPS";
    let fibSequenceSeed = [0, 1];
    for (let nextIndex = 2; nextIndex <= index; nextIndex++) {
        let currentMax = (fibSequenceSeed.length - 1);
        let nextNumber = fibSequenceSeed[currentMax] + fibSequenceSeed[currentMax - 1];
        fibSequenceSeed.push(nextNumber);
    }
    return fibSequenceSeed[index];
};

// Do not edit below this line
module.exports = fibonacci;
