function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill().map(e => Array(m).fill(false));
    const result = [];
    
    const dfs = (x, y) => {
        let sum = 0;
        if(x < 0 || x > n -1 || y < 0 || y > m - 1) return 0;
        if(maps[x][y] === 'X') return 0;
        if(!visited[x][y]) {
            visited[x][y] = true;
            sum += dfs(x, y + 1);
            sum += dfs(x - 1, y);
            sum += dfs(x + 1, y);
            sum += dfs(x, y - 1);
            return +maps[x][y] + sum;
        }
        return 0;
    };
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] !== 'X') {
                const islands = dfs(i, j);
                if(islands) result.push(islands);
            }
        }
    }
    
    result.sort((a, b) => a - b);
    
    return result.length ? result : [-1];
}
