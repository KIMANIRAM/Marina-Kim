// BFS, DFS 인줄 알았는데 시뮬레이션 문제였음
// 시뮬레이션 문제는 성능 신경쓰지 말고 테케가 전부 돌아가게만 만들면 됨.
// time complexity: O((mn)^2)
// m, n은 최대 30이므로 30 * 30 * 30 * 30 = 180000이기 때문에 (mn)^2인 알고리즘으로 충분히 풀 수 있다. (보통 컴퓨터는 1초 당 1억 번 연산 수행)
function findSameBlocks(m, n, board) {
    const blocks = [];
    const visited = Array(m).fill().map(e => Array(n).fill(false));

    for(let i = 0; i < m - 1; i++) {
        for(let j = 0; j < n - 1; j++) {
            if(board[i][j] === '*') continue;
            const neighbor = [[i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]];
            if(neighbor.every(([x, y]) => board[x][y] === board[i][j])) {
                neighbor.forEach(([x, y]) => {
                    visited[x][y] || blocks.push([x, y]);
                    visited[x][y] = true;
                });
            }
        }
    }

    return blocks;
}

function popAndDrop(blocks, board) {
    blocks.forEach(block => {
        let [x, y] = block;
        if(x === 0 || board[x - 1][y] === '*') {
            board[x][y] = '*';
            return;
        }
        while(x > 0 && board[x - 1][y] !== '*') {
            board[x][y] = board[x - 1][y];
            board[x - 1][y] = '*';
            x -= 1;
        } 
    });

    return board;
}

function solution(m, n, board) {
    const recursive = (m, n, _board) => {
        const blocks = findSameBlocks(m, n, _board);

        if(blocks.length === 0) {
            return _board.map(rows => [...rows]
                        .filter(e => e === '*').length).reduce((a, b) => a + b, 0);
        }
        const updatedBoard = popAndDrop(blocks, _board);

        return recursive(m, n, updatedBoard);
    };

    return recursive(m, n, board.map(rows => [...rows]));
}

// 두 번째 풀이 - m,n을 모든 함수에 내려주지 않고 solution 함수 안에 나머지 함수를 선언
function solution(m, n, board) {
    const findQuadBlocks = (curBoard) => {
        const blocks = [];
        const visited = Array(m).fill().map(e => Array(n).fill(false));
        
        for(let i = 0; i < m - 1; i++) {
            for(let j = 0; j < n - 1; j++) {
                if(curBoard[i][j] === '*') continue;
                const neighbors = [[i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]];
                if(neighbors.every(([x, y]) => curBoard[x][y] === curBoard[i][j])) {
                    neighbors.forEach(([x, y]) => {
                        visited[x][y] || blocks.push([x, y]);
                        visited[x][y] = true;
                    })
                }
            }
        }
        return blocks;
    }
    
    const popAndDrop = (blocks, nextUpdatedBoard) => {
        blocks.forEach(block => {
            let [x, y] = block;
            if(x === 0 || nextUpdatedBoard[x - 1][y] === '*') {
                nextUpdatedBoard[x][y] = '*';
                return;
            } 
            while(x > 0 && nextUpdatedBoard[x - 1][y] !== '*') {
                nextUpdatedBoard[x][y] = nextUpdatedBoard[x - 1][y];
                nextUpdatedBoard[x - 1][y] = '*';
                x -= 1;
            }
        });
        return nextUpdatedBoard;
    }

    const startGame = (willchangeBlocks, updatedBoard, poppedCnt) => {
        if(willchangeBlocks.length === 0) return poppedCnt;
        const nextUpdatedBoard = popAndDrop(willchangeBlocks, updatedBoard);
        const nextWillchangeBlocks = findQuadBlocks(nextUpdatedBoard);

        return startGame(nextWillchangeBlocks, nextUpdatedBoard, poppedCnt + nextWillchangeBlocks.length);
    }
    
    const curBoard = board.map(row => row.split(''));
    const willChangeBlocks = findQuadBlocks(curBoard);
    return startGame(willChangeBlocks, curBoard, willChangeBlocks.length);
}
