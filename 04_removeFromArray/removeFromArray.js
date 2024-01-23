const removeFromArray = function(array, ...values) {
    let result = array.filter((elem) => {
        return !values.includes(elem);
    })
    return result;
    
};

// Do not edit below this line
module.exports = removeFromArray;
