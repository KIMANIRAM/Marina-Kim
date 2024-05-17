function bfs(map, chx, chy, ix, iy) {
    const dx = [0, -1, 1, 0];
    const dy = [1, 0, 0, -1];
    const q = [];
    let ans = 0;

    q.push([chx, chy, 0]);
    map[chx][chy] += 100;

    while(q.length) {
        const [cx, cy, cnt] = q.shift();
        if(cx === ix && cy === iy) {
            ans = cnt / 2;
            break;
        }

        for(let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];
            if(nx < 0 || nx > 100 || ny < 0 || ny > 100) continue;
            if(map[nx][ny] === 1) {
                q.push([nx, ny, cnt + 1]);
                map[nx][ny] += 100;
            }
        }
    }

    return ans;
};

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const map = Array(101).fill().map(e => Array(101).fill(0));
    const DR = rectangle.map(rect => rect.map(point => point * 2));
    
    for(let k = 0; k < DR.length; k++) {
        const [minX, minY, maxX, maxY] = DR[k];
        for(let i = minX; i <= maxX; i++) {
            for(let j = minY; j <= maxY; j++) {
                if(i === minX || i === maxX || j === minY || j === maxY) {
                    if(map[i][j] === 1) continue;
                    map[i][j] += 1;
                } else {
                    map[i][j] = 2;
                }
            }
        }
    }
    
    return bfs(map, characterX * 2, characterY * 2, itemX * 2, itemY * 2);
}
