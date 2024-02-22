// 순열 활용 - 조합과는 달리 백트래킹 과정에서 방문한 노드는 탐색하지 않아야 함.
function solution(k, dungeons) {
    const N = dungeons.length;
    let max = 0;

    const dfs_backtracking = (curHp, visited, cnt) => {
        for(let i = 0; i < N; i++) {
            if(visited[i] || curHp < dungeons[i][0]) continue;
            
            const [req, drain] = dungeons[i];
            const nextHp = curHp - drain;
            const nextCnt = cnt + 1;
            
            visited[i] = true;
            max = max < nextCnt ? nextCnt : max;
            dfs_backtracking(nextHp, visited, nextCnt);
            visited[i] = false;
        }
    }

    dfs_backtracking(k, Array.from({ length: N }, () => false), 0);
    
    return max;
}
