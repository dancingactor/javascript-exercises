const removeFromArray = function(array, ...removedItem) {
    
    //version 1, use the forEach() method
    /*
    const returnArray = [];
    array.forEach(
        item => { if(!removedItem.includes(item)) {
            returnArray.push(item);
        }        }
    )
    return returnArray;
    */
    
    
    //version 2, more concise way
    return array.filter(item => !removedItem.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
