function getDivisor(x) {
    let results = [];
    for(let i = 1; i <= Math.sqrt(x); i++){
        if(x % i === 0) {
            results.push([Math.floor(x / i) + 2, i + 2]);
        }
    }
    return results;
}

function solution(brown, yellow) {
    let divisors = getDivisor(yellow);

    for(let i = 0; i < divisors.length; i++) {
        let all_grid = divisors[i][0] * divisors[i][1];
        if(all_grid - yellow === brown) {
            return divisors[i];
        }
    }
}
