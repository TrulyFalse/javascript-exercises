const sumAll = function(a, b) {
    if(!(   Number.isInteger(a) &&
            Number.isInteger(b) &&
            a >= 0 &&
            b >= 0)) return "ERROR";

    let lowerBound, upperBound;
    if(a <= b) lowerBound = a, upperBound = b;
    else lowerBound = b, upperBound = a;

    let sum = 0;
    for(let i = lowerBound; i <= upperBound; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
