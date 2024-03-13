const reverseString = function(string) {
    let reversedString = '';
    for (let i = string.length-1; i>-1; i--){
        reversedString += string[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
