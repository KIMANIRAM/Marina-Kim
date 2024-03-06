function solution(land) {
    const dp = Array(land.length).fill().map(e => Array(4).fill(0));
    dp[0] = [...land[0]];

    for(let i = 1; i < land.length; i++) {
        dp[i - 1].forEach((fixed, j, origin) => {
            const rest = [...origin.slice(0, j), ...origin.slice(j + 1)];
            const max = Math.max(...rest);
            dp[i][j] = max + land[i][j];
        });
    }

    return Math.max(...dp[dp.length - 1]);
}
