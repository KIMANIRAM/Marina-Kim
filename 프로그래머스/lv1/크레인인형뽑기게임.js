function transpos(matrix) {
    return matrix[0].map((_, colIdx) => matrix.map(row => row[colIdx]));
}

// Solved with pure function
function solution(board, moves) {
    const filterdboard = transpos(board).map(row => row.filter(val => val > 0));
    
    const selectDollCb = (fb) => 
        ([stack, count], move) => {
            if(fb[move - 1].length > 0) {
                stack.push(fb[move - 1].shift());
            }
            if(
                stack.length > 1
                && (stack[stack.length - 1] === stack[stack.length - 2])
            ) {
                stack.splice(-2);
                count += 2;
            }
            
            return [stack, count];
        }
    
    const selectDoll = (fb, moves) => {
        return moves.reduce(selectDollCb(fb), [[], 0]);
    };
    
    return selectDoll(filterdboard, moves)[1];
}
