function solution(board) {
    let max = board[0].includes(1) ? 1 : 0;
    // 이동방향: 우측하단
    for(let i = 1; i < board.length; i++) {
        for(let j = 1; j < board[0].length; j++) {
            if(board[i][j] === 1) {
                board[i][j] += Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]);
                max = Math.max(max, board[i][j]);
            }
        }
    }

    return max * max;
}
