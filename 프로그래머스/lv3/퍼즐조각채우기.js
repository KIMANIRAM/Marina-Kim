// BFS + 빡구현. 이런 유형은 많이 풀어서 익숙해지는 방법밖에 없다...
// 2차원 배열에 그냥 sort()만 써도 제대로 정렬되는 이유는 그냥 sort()만 넘겨주면 값을 유니코드로 비교하기 때문이다.
// 예를 들어 const arr = ["00", "10", "01"] 이고 arr.sort() 하면 유니코드 "10"은 "01"보다 크기 때문에 뒤에 와서 결과는 ["00", "01", "10"] 이 된다.

function translateToOrigin(block) {
    const minX = Math.min(...block.map(e => e[0]));
    const minY = Math.min(...block.map(e => e[1]));
    
    return block.map(e => [e[0] - minX, e[1] - minY]).sort();
}

// 원점 대칭 후 y축 대칭이동: (x, y) => (y, x) => (max - y, x)
function rotate(block) {
    const maxVal = Math.max(...block.map(([x, y]) => Math.max(x, y)));
    const rotatedBlock = block.map(([x, y]) => [maxVal - y, x]);
          
    return translateToOrigin(rotatedBlock);
}

function selectPos(grid, type) {
    const box = [];
    const visited = Array(grid.length).fill().map(e => Array(grid.length).fill(false));
    
    const BFS = (x, y) => {
        const dx = [0, -1, 1, 0];
        const dy = [1, 0, 0, -1];
        const q = [];
        const poses = [];
        
        q.push([x, y]);
        visited[x][y] = true;

        while(q.length) {
            const [px, py] = q.shift();
            poses.push([px, py]);
            
            for(let i = 0; i < 4; i++) {
                const nx = px + dx[i];
                const ny = py + dy[i];
                if(nx < 0 || nx >= grid.length || ny < 0 || ny >= grid.length) continue;
                // type: 1이면, table에서 퍼즐을 선택하고 퍼즐 배열을 리턴
                // type: 0이면, game_board에서 빈칸을 선택하고 빈 공간 배열을 리턴
                if(grid[nx][ny] !== type) continue;
                if(!visited[nx][ny]) {
                    q.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
        
        return translateToOrigin(poses);
    };
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            if(grid[i][j] === type && !visited[i][j]) {
                box.push(BFS(i, j));
            }
        }
    }
    
    return box;
}

function solution(game_board, table) {
    let cnt = 0;
    const blank = selectPos(game_board, 0);
    const puzzle = selectPos(table, 1);
    
    // console.log(blank)
    // console.log(puzzle)
    
    puzzle.forEach(val => {
        for(let i = 0; i < blank.length; i++) {
            let isStop = false;
            for(let j = 0; j < 4; j++) {
                val = rotate(val);
                if(JSON.stringify(val) === JSON.stringify(blank[i])) {
                    blank.splice(i, 1);
                    cnt += val.length;
                    isStop = true;
                    break;
                }
            }
            if(isStop) break;
        }
    });
    
    return cnt;
}
