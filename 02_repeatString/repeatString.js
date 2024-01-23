const repeatString = function(strToRepeat, numOfRepeats) {
    if(numOfRepeats<0)return "ERROR";
    let result = "";
    for(let i=0; i<numOfRepeats; i++){
        result+=strToRepeat;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
