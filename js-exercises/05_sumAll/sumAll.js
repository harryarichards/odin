const sumAll = function(lowerBound, upperBound) {
    if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound) || lowerBound<0 || upperBound<0){
        return 'ERROR';
    }
    const upperBoundCopy = upperBound;
    upperBound = Math.max(upperBound, lowerBound);
    lowerBound = Math.min(upperBoundCopy, lowerBound);
    const upperSum = 1/2 * (upperBound) * (upperBound+1);
    const lowerSum = 1/2 * (lowerBound-1) * (lowerBound);
    return upperSum - lowerSum;
};

// Do not edit below this line
module.exports = sumAll;
