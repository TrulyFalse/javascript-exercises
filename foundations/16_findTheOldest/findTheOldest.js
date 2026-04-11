const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();
    return arr.reduce((oldestSoFar, currentPerson) => {
        let currentPersonAge = (("yearOfDeath" in currentPerson) ? currentPerson.yearOfDeath : currentYear) - currentPerson.yearOfBirth;
        let oldestSoFarAge = (("yearOfDeath" in oldestSoFar) ? oldestSoFar.yearOfDeath : currentYear) - oldestSoFar.yearOfBirth;
        return (currentPersonAge > oldestSoFarAge) ? currentPerson : oldestSoFar;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
