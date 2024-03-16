function bfs(start, end, maps, h, w) {
    const dx = [0, 1, -1, 0];
    const dy = [1, 0, 0, -1];
    const steps = Array(h).fill().map(e => Array(w).fill(0));

    const [x, y] = start;
    const q = [];
    steps[x][y] = 1;
    q.push([x, y]);

    while(q.length) {
        const [cx, cy] = q.shift();
        if(cx === end[0] && cy === end[1]) {
            return steps[cx][cy] - 1;
        }

        for(let dir = 0; dir < 4; dir++) {
            const nx = cx + dx[dir];
            const ny = cy + dy[dir];

            if(nx < 0 || nx > h - 1 || ny < 0 || ny > w - 1) continue;
            if(maps[nx][ny] === 'X') continue;
            if(steps[nx][ny] === 0) {
                steps[nx][ny] = steps[cx][cy] + 1;
                q.push([nx, ny]);
            }
        }
    }

    return -1;
}

function solution(maps) {
    const h = maps.length;
    const w = maps[0].length;

    const types = {
        'S': [0, 0],
        'L': [0, 0],
        'E': [0, 0],
    };

    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(Object.hasOwn(types, maps[i][j])) {
                types[maps[i][j]] = [i, j];
            }
        }
    }

    const startToLever = bfs(types['S'], types['L'], maps, h, w);
    const leverToEnd = bfs(types['L'], types['E'], maps, h, w);

    return startToLever === -1 || leverToEnd === -1 ? -1 : startToLever + leverToEnd;
}
