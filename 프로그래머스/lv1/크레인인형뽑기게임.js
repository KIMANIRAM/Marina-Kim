function transpos(grid) {
    return grid[0].map((_, colIdx) => grid.map(row => row[colIdx]));
}

function solution(board, moves) {
    const grid = transpos(board).map(row => row.filter(val => val > 0));
    const stack = [];
    let cnt = 0;
    
    for(let i = 0; i < moves.length; i++) {
        if(grid[moves[i] - 1].length > 0) {
            const popVal = grid[moves[i] - 1].shift();
            stack.push(popVal);
        }

        if(
            stack.length > 1
            && (stack[stack.length - 1] === stack[stack.length - 2])
        ) {
            stack.splice(-2);
            cnt += 2;
        }     
    }
    
    return cnt;
}
