const palindromes = function (inputStr) {
    let lowerInputStr = inputStr.toLowerCase();
    let cleanArray = Array.from(lowerInputStr)
        .filter(character => /[a-zA-Z0-9]/.test(character));
    let reversedCleanArray = cleanArray.toReversed();
    return reversedCleanArray.toString() === cleanArray.toString();
};

// Do not edit below this line
module.exports = palindromes;
