function getPermutations(arr, slctN) {
    if(slctN === 1) return arr;
    
    const result = [];
    
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const perms = getPermutations(rest, slctN - 1);
        const attached = perms.map(e => fixed + e);
        result.push(...attached);
    });
    
    return result;
}

function isPrime(n) {
    if(n <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    const set = new Set();
    let cnt = 0;
    
    for(let r = 1; r <= numbers.length; r++) {
        const permutation = getPermutations([...numbers], r).map(e => +e);
        for(let i = 0; i < permutation.length; i++) {
            set.add(permutation[i]);
        }
    }
    
    const setIter = set.keys();
    
    for(let i = 0; i < set.size; i++) {
        if(isPrime(setIter.next().value)) {
            cnt++;
        } 
    }
    return cnt;
}
