const repeatString = function(str, times) {
    if(times < 0) return "ERROR";

    let repeatedStr = "";
    for(let i = 0; i < times; i++){
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
