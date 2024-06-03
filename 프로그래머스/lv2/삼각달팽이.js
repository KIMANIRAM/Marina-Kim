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

// 두 번째 풀이 - DFS
function solution(n) {
    const dirs = [[-1, -1], [1, 0], [0, 1]];
    const answer = Array(n).fill().map(e => Array(n).fill(0));
    
    const dfs = (depth, x, y, val) => {
        if(depth > n) return;
        const [dx, dy] = dirs[depth % 3];
        let [nx, ny] = [x, y];
        for(let i = 0; i <= n - depth; i++) {
            nx += dx;
            ny += dy;
            answer[nx][ny] = val;
            val++;
        }
        dfs(depth + 1, nx, ny, val);
    };
    
    dfs(1, -1, 0, 1);
    
    return answer.flat().filter(e => e > 0);
}
