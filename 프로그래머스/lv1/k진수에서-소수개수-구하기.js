// 소수판별하기와 k진법 구하기 - decimal.toString(k)
function isPrime(num) {
    if(num === 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function solution(n, k) {
    let count = 0;
    const num = n.toString(k);
    // console.log(num);
    const nums = num.split('0').filter(num => num !== '').map(num => Number(num));
    // console.log(nums);
    for(let i = 0; i < nums.length; i++) {
        if(isPrime(nums[i])) count++;
    }

    return count;
}
