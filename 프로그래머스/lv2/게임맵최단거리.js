// DFS는 완전탐색(모든 경우의 수를 찾아야 하는 경우), BFS는 최단거리 문제에서 사용한다.
function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const dx = [0, 1, -1, 0]; // 우 하 상 좌
    const dy = [1, 0, 0, -1];
    let visited = new Array(n + 1).fill().map(v => new Array(m + 1).fill(0)); // 이동경로마다 step을 갱신할 테이블

    const BFS = (x, y) => {
        let queue = [];
        visited[x][y] = 1;
        queue.push([x, y]);

        while(queue.length) {
            let [curr_x, curr_y] = queue.shift();
            for(let dir = 0; dir < 4; dir++) {
                let nx = curr_x + dx[dir];
                let ny = curr_y + dy[dir];

                if(nx < 0 || nx > n || ny < 0 || ny > m) continue;
                if(maps[nx][ny] === 0) continue;
                if(visited[nx][ny] === 0) {
                    visited[nx][ny] = visited[curr_x][curr_y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    };

    BFS(0, 0);

    return visited [n][m] ? visited [n][m] : -1;
}
