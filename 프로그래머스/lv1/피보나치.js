// 오버플로우 주의!
// 47번째 피보나치 수는 2,971,215,073이고, 이 수는 32비트 정수(ex. int) 범위를 넘어 오버플로우가 발생합니다
function solution(n) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}
