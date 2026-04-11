const fibonacci = function(i) {
    if(i < 0) return "OOPS";    //sequence can only have positive indices
    let sequence = [0,1];
    while(sequence.length - 1 < i) sequence.push(sequence.at(-1) + sequence.at(-2));    // (sequence.length - 1) is the sequence's last index and we want to expand sequence until its last index reaches the i-th term
    return sequence[i];
};

// Do not edit below this line
module.exports = fibonacci;
