// 1. 꼬리재귀: 테스트 13, 14 런타임 에러
function solution(n) {
    const fivoTail = (depth, result, next) => {
        if(depth === 0) return result;
        
        return fivoTail(depth - 1, next % 1234567, result + next);
    };
    
    return fivoTail(n, 0, 1); 
}

// 2. DP(탑다운): 테스트 13, 14 런타임 에러
function solution(n) {
    const fivoMemo = (n, cache) => {
        let _cache = cache;
        
        if(_cache[n]) return _cache[n];
        if(n === 1) return 1;
        if(n === 0) return 0;
        
        return _cache[n] = (fivoMemo(n - 1, _cache) + fivoMemo(n - 2, _cache)) % 1234567;
    };
    
    return fivoMemo(n, []);
}

// 3. DP(바텀업): 통과
function solution(n) {
    const dp = [];
    dp.push(0);
    dp.push(1);
    
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    
    return dp[n];
}
