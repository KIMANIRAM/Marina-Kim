function isPrime(n) { 
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return 0;
    }
    return 1;
}

function solution(n, k) {
    return (n).toString(k).split('0').map(e => +e).filter(e => e > 1).reduce((total, e) => total + isPrime(e), 0);
}
