function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [0, -1, 1, 0];
    const dy = [1, 0, 0, -1];
    const visited = Array(n).fill().map(e => Array(m).fill(false));
    const result = [];
    
    const bfs = (x, y) => {
        let cost = +maps[x][y];
        const q = [[x, y]];
        visited[x][y] = true;
        
        while(q.length) {
            const [cx, cy] = q.shift();
            for(let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                if(nx < 0 || nx > n -1 || ny < 0 || ny > m - 1) continue;
                if(maps[nx][ny] === 'X') continue;
                if(!visited[nx][ny]) {
                    q.push([nx, ny]);
                    visited[nx][ny] = true;
                    cost += (+maps[nx][ny]);
                }
            }
        }
        return cost;
    };
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] !== 'X' && !visited[i][j]) {
                const islands = bfs(i, j);
                result.push(islands);
            }
        }
    }
    
    result.sort((a, b) => a - b);
    
    return result.length ? result : [-1];
}
