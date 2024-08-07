const fibonacci = function(numth) {
    let array = [0, 1];
    numth = parseInt(numth);
    if (numth < 0) {
        return "OOPS";
    }
    if (numth < 2) {
        return array[numth];
    }

    for (i = 2; i <= numth; i++) {
        array.push(array[i-2] + array[i-1]);
    }
    return array[numth];

};

// Do not edit below this line
module.exports = fibonacci;
