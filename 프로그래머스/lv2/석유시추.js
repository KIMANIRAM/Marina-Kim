function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array(n).fill().map((e, i) => Array(m).fill(false));
    const amounts = Array(m).fill(0);
    let max = 0;

    const bfs = (x, y) => {
        const dx = [0, -1, 1, 0];
        const dy = [1, 0, 0, -1];
        const set = new Set();
        const q = [[x, y]];
        let cost = 1;
        visited[x][y] = true;

        while(q.length) {
            const [cx, cy] = q.shift();
            set.add(cy);
            for(let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                if(nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1 
                   || land[nx][ny] === 0) continue;
                if(!visited[nx][ny]) {
                    q.push([nx, ny]);
                    visited[nx][ny] = true;
                    cost += 1;
                }
            }
        }

        for(const i of set) {
            max = Math.max(max, amounts[i] + cost);
            amounts[i] += cost;
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(land[i][j] === 1 && !visited[i][j]) {
                bfs(i, j);
            }
        }
    }

    return max;
}
