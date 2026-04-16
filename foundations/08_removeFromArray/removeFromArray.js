
const removeFromArray = function (arr, ...removal) {
    let returnArray = arr.slice();
    nextItem:
    for (let removalItem of removal) {
        for (let checkItem of returnArray) {
            if (checkItem == removalItem) {
                returnArray.splice(returnArray.indexOf(checkItem), 1);
                continue nextItem;
            } continue;
        }
    } return returnArray;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3));

// Do not edit below this line
//module.exports = removeFromArray;
