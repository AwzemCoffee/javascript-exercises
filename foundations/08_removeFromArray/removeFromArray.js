
const removeFromArray = function (arr, ...removal) {
    return arr.filter(item => !removal.includes(item));
};

//console.log(removeFromArray([1, 2, 3, 4], 2));

// Do not edit below this line
module.exports = removeFromArray;
