function getFactorCount(num) {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            let offset = (num / i) === i ? 1 : 2;
            count += offset;
        }
    }
    return count;
}

function solution(number, limit, power) {
    const factors = [];

    for(let i = 1; i <= number; i++) {
        factors.push(getFactorCount(i));
    }

    return factors.map(x => x > limit ? power : x).reduce((a, b) => a + b);;
}
