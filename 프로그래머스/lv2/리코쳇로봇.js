function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const states = new Map();
    
    let [start, end] = [0, 0];
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'R') {
                states.set('R', [i, j]);
            } else if(board[i][j] === 'G') {
                states.set('G', [i, j]);
            }
        }
    }
    
    const bfs = (start, end) => {
        const dx = [0, -1, 1, 0];
        const dy = [1, 0, 0, -1];
        const [x, y] = start;
        const visited = Array(n).fill().map(e => Array(m).fill(false))
        const q = [[0, x, y]];
        
        while(q.length) {
            const [cnt, cx, cy] = q.shift();
            visited[cx][cy] = true;
            if(cx === end[0] && cy === end[1]) {
                min = Math.min(min, cnt);
                return;
            }
            
            for(let i = 0; i < 4; i++) {
                let [nx, ny] = [cx, cy];
                while(true) {
                    nx += dx[i];
                    ny += dy[i];

                    if(nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1 || board[nx][ny] === 'D') {
                        nx -= dx[i];
                        ny -= dy[i];
                        break;
                    }
                }
                if(!visited[nx][ny]) {
                    q.push([cnt + 1, nx, ny]);
                }
            }
        }
    };
    
    bfs(states.get('R'), states.get('G'));
    
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}
