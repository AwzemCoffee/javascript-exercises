function repeatString(string, num) {
    let result = "";
    if (num < 0) return "ERROR";
    if (num > 0) {
        for (let stringCount = 0; stringCount < num; stringCount++) {
            result += string;
        }
    } return result;
}
const result = repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
