// https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/ty4w8WJZ4sZSBNK5Q

function solution(n: number, roads: number[][]): boolean {
    const d: number[][] = Array.from({ length: n }, () => Array(n).fill(1e9));
    
    for(let i = 0; i < n; i++) d[i][i] = 0;
    
    for(const [a, b] of roads) {
        d[a][b] = 1;
        d[b][a] = 1;
    }
    
    for(let k = 0; k < n; k++) {
        for(let a = 0; a < n; a++) {
            for(let b = 0; b < n; b++) {
                if(a === k || b === k) continue;
                d[a][b] = Math.min(d[a][b], d[a][k] + d[k][b]);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(d[i][j] > 2) return false;
        }
    }
    
    return true;
}
