function solution(x, y, n) {
    if(x === y) return 0;
    const dp = Array(y + 1).fill(0);
    dp[x] = 1;

    for(let i = x; i <= y; i++) {
        if(dp[i] === 0) continue;
        if(i + n <= y) {
            dp[i + n] = 
                dp[i + n] ? Math.min(dp[i + n], dp[i] + 1) : dp[i] + 1;
        } 
        if(i * 2 <= y) {
            dp[i * 2] = 
                dp[i * 2] ? Math.min(dp[i * 2], dp[i] + 1) : dp[i] + 1;
        } 
        if (i * 3 <= y) {
            dp[i * 3] = 
                dp[i * 3] ? Math.min(dp[i * 3], dp[i] + 1) : dp[i] + 1;
        }
    }

    return dp[y] ? dp[y] - 1 : -1;
}
