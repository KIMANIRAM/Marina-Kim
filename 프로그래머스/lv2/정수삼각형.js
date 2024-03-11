function solution(triangle) {
    const dp = triangle;
    for(let i = 1; i < dp.length; i++) {
        for(let j = 0; j < i + 1; j++) {
            if(j === 0) {
                dp[i][j] += dp[i - 1][j];
            } else if(i === j) {
                dp[i][j] += dp[i - 1][j - 1];
            } else {
                dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }
    }

    return Math.max(...dp[dp.length - 1]);
}
