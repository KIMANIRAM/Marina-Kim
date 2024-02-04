function solution(n) {
    const fivoTail = (depth, result, next) => {
        if(depth === 0) return result;
        
        return fivoTail(depth - 1, next % 1234567, result + next);
    };
    
    return fivoTail(n, 0, 1); 
}
