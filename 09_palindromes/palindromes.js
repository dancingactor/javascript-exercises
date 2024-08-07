const palindromes = function (string) {

    let alphabetlist = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanedString = string
        .toLowerCase()
        .split("")
        .filter((item) => alphabetlist.split("").includes(item))
        .join("");
    let reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
