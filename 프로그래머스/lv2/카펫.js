function getPrimeNumber(n) {
    const resultPairs = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            resultPairs.push([Math.floor(n / i), i]);
        }
    }
    return resultPairs;
}

function solution(brown, yellow) {
    const primePairs = getPrimeNumber(yellow);
    
    const yellowBox = primePairs.filter(pair => {
        let gridBoundary = (pair[0] + 2) * 2 + pair[1] * 2;
        if(gridBoundary === brown) return pair;
    });
    const [width, height] = yellowBox.flat();
    
    return [width + 2, height + 2];
}
