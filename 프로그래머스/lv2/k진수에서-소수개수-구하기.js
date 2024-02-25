function solution(n, k) {
    const converted = (n).toString(k).split('0').filter(e => e !== '').map(e => +e);

    const isPrime = (num) => {
        if(num === 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    return converted.filter(e => isPrime(e)).length;
}
