// 2차원 배열 풀
function solution(n) {
    const grid = Array(n).fill().map(e => Array(n).fill(0));
    let cnt = 0;
    
    const isSafe = (i, j) => {
        // 같은 열의 원소를 전부 검사, 하나라도 1이 있으면 false
        for(let x = i; x >= 0; x--) {
            if(grid[x][j] === 1) return false;
        }
        // 같은 '/'대각원소를 전부 검사
        for(let x = i, y = j; x >= 0 && y < n; x--, y++) {
            if(grid[x][y] === 1) return false;
        }
        // 같은 '\'대각원소를 전부 검사
        for(let x = i, y = j; x >= 0 && y >= 0; x--, y--) {
            if(grid[x][y] === 1) return false;
        }
        
        return true;
    };
    
    const backtracking = (depth) => {
        if(depth === n) {
            cnt++;
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(isSafe(depth, i)) {
                grid[depth][i] = 1;
                backtracking(depth + 1);
                grid[depth][i] = 0;
            }
        }
        return;
    }
    
    backtracking(0);
    
    return cnt;
}

// 1차원 배열 풀이
function solution(n) {
    const isUsed1 = Array(n).fill(0);
    const isUsed2 = Array(n + 2).fill(0);
    const isUsed3 = Array(n + 2).fill(0);
    let cnt = 0;
    
    const backtracking = (depth) => {
        if(depth === n) {
            cnt++;
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(isUsed1[i] 
               || isUsed2[depth + i]
               || isUsed3[depth - i + n - 1]) {
                continue;
            }
            isUsed1[i] = 1;
            isUsed2[depth + i] = 1;
            isUsed3[depth - i + n - 1] = 1;
            backtracking(depth + 1);
            isUsed1[i] = 0;
            isUsed2[depth + i] = 0;
            isUsed3[depth - i + n - 1] = 0;
        }
        return;
    }
    
    backtracking(0);
    
    return cnt;
}
