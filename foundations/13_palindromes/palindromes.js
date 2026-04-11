const palindromes = function (str) {
    str = str.replaceAll(/[^\w]/g, "").split("");
    let reverseStr = str.slice().reverse();
    return str.every((item, index) => item.toLowerCase() === reverseStr[index].toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
