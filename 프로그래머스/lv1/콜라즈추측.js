function solution(num) {
    if(num === 1) return 0;
    
    const Collatz = (num, count) => {
        if(num === 1) return count;
        if(count > 499) return -1;
        
        const next = (num % 2 === 0) ? num / 2 : num * 3 + 1;
        
        return Collatz(next, count + 1);
    }
    
    return Collatz(num, 0);
}
