// BFS, DFS 인줄 알았는데 시뮬레이션 문제였음
// 시뮬레이션 문제는 성능 신경쓰지 말고 테케가 전부 돌아가게만 만들면 됨.
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
