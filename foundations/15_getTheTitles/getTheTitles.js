const getTheTitles = function (booksArr) {
    const bookTitles = booksArr.map((obj) => {
        return obj.title;
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
