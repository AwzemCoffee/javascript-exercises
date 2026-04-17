// const leapYears = function (year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 return true;
//             } return false;
//         } return true;
//     } return false;
// };

const leapYears = function (year) {
    const divisibleByFour = (year % 4 === 0);
    const divByHundred = (year % 100 === 0);
    const divByFourHundred = (year % 400 === 0);

    if (
        divisibleByFour &&
        (!divByHundred) || (divByFourHundred)
    ) {
        return true;
    } else return false;
}
// Do not edit below this line
module.exports = leapYears;
