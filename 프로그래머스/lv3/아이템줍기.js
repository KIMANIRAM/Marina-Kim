function solution(rectangle, characterX, characterY, itemX, itemY) {
    const map = Array(103).fill().map(e => Array(103).fill(0));
    const DR = rectangle.map(row => row.map(point => point * 2));
    
    DR.forEach(([x1, y1, x2, y2]) => {
        for(let i = x1; i <= x2; i++) {
            for(let j = y1; j <= y2; j++) {
                if(i === x1 || i === x2 || j === y1 || j === y2) {
                    if(map[i][j] === 1) continue;
                    map[i][j] += 1;
                } else {
                    map[i][j] += 2;
                }
            }
        }
    });
    
    const [charX, charY] = [characterX * 2, characterY * 2];
    const [iX, iY] = [itemX * 2, itemY * 2];
    const dx = [0, -1, 1, 0];
    const dy = [1, 0, 0, -1];
    const q = [[charX, charY, 0]];
    map[charX][charY] += 100;
    
    while(q.length) {
        const [cx, cy, cnt] = q.shift();
        if(cx === iX && cy === iY) return cnt / 2;
        
        for(let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];
            
            if(nx < 0 || nx >= 101 || ny < 0 || ny >= 101) continue;
            if(map[nx][ny] === 1) {
                map[nx][ny] += 100;
                q.push([nx, ny, cnt + 1]);
            }
        }
    }
}
