const findTheOldest = function (peopleArr) {
    const currentDate = (new Date()).getFullYear();
    let calculatedAgeArr = peopleArr.reduce(function (newArr, person) {
        if (Object.hasOwn(person, "yearOfDeath")) {
            person.age = person.yearOfDeath - person.yearOfBirth;
            newArr.push(person);
        } else {
            person.age = currentDate - person.yearOfBirth;
            newArr.push(person);
        } return newArr;
    }, []);

    let sortedArr = calculatedAgeArr.sort((b, a) => a.age - b.age);
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
