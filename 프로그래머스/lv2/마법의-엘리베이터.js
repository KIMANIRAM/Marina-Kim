function solution(storey) {
    let result = Number.MAX_SAFE_INTEGER;
    
    const dfs = (floor, stone) => {
        if(floor === 0) {
            result = Math.min(result, stone);
            return;
        }
        if(stone < result) {
            if(floor === 1) {
                dfs(0, stone + 1);
            } else {
                dfs(~~(floor / 10), stone + floor % 10);
                dfs(~~(floor / 10) + 1, stone + 10 - (floor % 10));
            }
        }
    };
    
    dfs(storey, 0);
    
    return result;
}
