const fibonacci = function(targetIdx) {
    let arr = new Array(1,1);
    targetIdx = parseInt(targetIdx);
    if(targetIdx<=0){
        return targetIdx==0 ? 0 : "OOPS";
    }
    for(let i=2; i<targetIdx; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
