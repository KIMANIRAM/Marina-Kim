// 순열 활용 - 조합과는 달리 백트래킹 과정에서 방문한 노드는 탐색하지 않아야 함.
function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = Array.from({length: n}, () => false);
    let max = 0;
    
    const DFS = (depth, val) => {
        for(let i = 0; i < n; i++) {
            if(!visited[i] && dungeons[i][0] <= val) {
                visited[i] = true;
                
                DFS(depth + 1, val - dungeons[i][1]);
                
                visited[i] = false;
            }
        }
        max = depth > max ? depth : max;
    }
    
    DFS(0, k);
    
    return max;
}
