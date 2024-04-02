// 행과 열을 순서대로 접근하지 않고 동적으로 접근해야 함
function solution(n) {
    const answer = [];
    const dir = [[-1, -1], [1, 0], [0, 1]]; // diagonal, down, right
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    let row = -1;
    let col = 0;
    let cnt = 1;
    let curVal = 1;

    for(let i = n; i > 0; i--) {
        const [dx, dy] = dir[cnt % 3];
        for(let j = 0; j < i; j++) {
            row += dx;
            col += dy;
            dp[row][col] = curVal;
            curVal++;
        }
        cnt++;
    }

    return dp.map(_row => _row.filter(e => e > 0)).flat();
}
