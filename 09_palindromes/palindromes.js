const palindromes = function (str) {
    let left = 0;
    let right = str.length -1;
    let leftChar, rightChar;
    while(left<right){
        leftChar = str[left];
        rightChar = str[right];
        if(!/[a-zA-Z0-9]/.test(leftChar)){
            left++;
        }
        else if(!/[a-zA-Z0-9]/.test(rightChar)){
            right--;
        }
        else{
            if(leftChar.toLowerCase()!==rightChar.toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
