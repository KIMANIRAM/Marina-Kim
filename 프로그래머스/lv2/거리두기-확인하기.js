function solution(places) {
    const cx = [1, -1, 1, -1];
    const cy = [1, 1, -1, -1];
    const dx = [0, -1, 1, 0];
    const dy = [1, 0, 0, -1];
    
    const bfs = (place) => { 
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(place[i][j] !== 'P') continue;
                // case 1. 상하좌우로 거리가 1인 경우
                for(let dir = 0; dir < 4; dir++) {
                    let nx = dx[dir] + i;
                    let ny = dy[dir] + j;
                    if(nx > -1 && nx < 5 && ny > -1 && ny < 5 
                       && place[nx][ny] === 'P') {
                        return 0;
                    }
                }
                // case 2. 대각선 사이에 파티션이 없으면 0
                for(let dir = 0; dir < 4; dir++) {
                    let nx = cx[dir] + i;
                    let ny = cy[dir] + j;
                    if(nx > -1 && nx < 5 && ny > -1 && ny < 5 
                       && place[nx][ny] === 'P') {
                        if(place[nx][j] !== 'X' || place[i][ny] !== 'X') return 0;
                    }
                }
                // case 3. 상하좌우로 거리가 2이고 사이에 파티션이 없는 경우
                for(let dir = 0; dir < 4; dir++) {
                    let nx = 2 * dx[dir] + i;
                    let ny = 2 * dy[dir] + j;
                    if(nx > -1 && nx < 5 && ny > -1 && ny < 5 
                       && place[nx][ny] === 'P') {
                        if(place[i+dx[dir]][j+dy[dir]] !== 'X') return 0;
                    }
                }
            }
        }
        return 1;
    };
    
    const result = places.map(place => bfs(place));
    
    return result;
}
