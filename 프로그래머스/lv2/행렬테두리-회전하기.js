function solution(rows, columns, queries) {
    // 1. 숫자 채우기
    const grid = Array.from({ length: rows }, (_, i) => 
                           Array.from({ length: columns }, (_, j) =>
                                     j + i * columns + 1));
    
    const answer = queries.map(([x1, y1, x2, y2]) => {
        const selected = [];
        // 2. 상단, 우측, 하단, 좌측 직사각형 구간을 나눠서 선택된 구간 구하기
        for(let i = y1; i < y2; i++) selected.push(grid[x1 - 1][i - 1]);
        for(let i = x1; i < x2; i++) selected.push(grid[i - 1][y2 - 1]);
        for(let i = y2; i > y1; i--) selected.push(grid[x2 - 1][i - 1]);
        for(let i = x2; i > x1; i--) selected.push(grid[i - 1][y1 - 1]);
        // 3. 일차원 배열을 한 칸씩 뒤로 밀면서 업데이트
        // [8,9,10,16,22,28,27,26,20,14] -> [14,8,9,10,16,22,28,27,26,20]
        selected.unshift(selected.pop());
        // 4. 최솟값 구하기
        const min = Math.min(...selected);
        // 5. grid의 상단, 우측, 하단, 좌측 직사각형 구간을 업데이트
        for(let i = y1; i < y2; i++) grid[x1 - 1][i - 1] = selected.shift();
        for(let i = x1; i < x2; i++) grid[i - 1][y2 - 1] = selected.shift();
        for(let i = y2; i > y1; i--) grid[x2 - 1][i - 1] = selected.shift();
        for(let i = x2; i > x1; i--) grid[i - 1][y1 - 1] = selected.shift();
        
        return min;
    });
    
    return answer;
}
