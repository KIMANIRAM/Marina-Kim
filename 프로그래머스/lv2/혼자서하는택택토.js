function solution(board) {  
    const state = Array(3).fill().map(e => Array(3).fill('.'));
    let result = 0;

    const isSame = (board, state) => {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] !== state[i][j]) return false;
            }
        } 
        return true;
    };

    const isGameOver = (state) => {
        if(state[0][0] != '.' && state[0][0] == state[0][1] && state[0][1] == state[0][2]) return true;
        if(state[1][0] != '.' && state[1][0] == state[1][1] && state[1][1] == state[1][2]) return true;
        if(state[2][0] != '.' && state[2][0] == state[2][1] && state[2][1] == state[2][2]) return true;

        if(state[0][0] != '.' && state[0][0] == state[1][0] && state[1][0] == state[2][0]) return true;
        if(state[0][1] != '.' && state[0][1] == state[1][1] && state[1][1] == state[2][1]) return true;
        if(state[0][2] != '.' && state[0][2] == state[1][2] && state[1][2] == state[2][2]) return true;

        if(state[0][0] !== '.' && state[0][0] === state[1][1] && state[1][1] === state[2][2]) return true;
        if(state[0][2] !== '.' && state[0][2] === state[1][1] && state[1][1] === state[2][0]) return true;
    };

    const setOpponentTurn = (turn) => {
        if(turn === 'O') return 'X';
        return 'O';
    };

    const play = (state, turn) => {
        if(isSame(board, state)) {
            result = 1;
            return;
        }

        if(isGameOver(state)) return;

        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(state[i][j] === '.') {
                    state[i][j] = turn;
                    play(state, setOpponentTurn(turn));
                    state[i][j] = '.';
                }
            }
        } 
    };

    play(state, 'O'); 

    return result;
}
