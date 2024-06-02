// 완전탐색 대표유형
function solution(n) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    let x = 0, y = 0, dirIdx = 0;
    
    for(let i = 1; i <= n * n; i++) {
        result[x][y] = i;
        let [dx, dy] = dirs[dirIdx];
        let nx = x + dx;
        let ny = y + dy;
        // 다음 이동방향 계산
        if(nx < 0 || ny < 0 || nx >= n || ny >= n || result[nx][ny] !== 0) {
            dirIdx = (dirIdx + 1) % 4; 
            dx = dirs[dirIdx][0];
            dy = dirs[dirIdx][1];
            nx = x + dx;
            ny = y + dy;
        }
        x = nx;
        y = ny;
    }
    
    return result;
}
