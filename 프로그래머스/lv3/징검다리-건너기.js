function createSegmentTree(n, arr) {
    const K = Math.ceil(Math.log2(n));
    const start = Math.pow(2, K);
    const size = start << 1;
    const ST = Array(size).fill(0);
    
    for(let i = 0; i < n; i++) {
        ST[i + start] = arr[i];
    }
    
    for(let i = start - 1; i > 0; i--) {
        ST[i] = Math.max(ST[i << 1], ST[i << 1 | 1]);
    }
    
    return [K, ST];
}

function query(k, st, min, max) {
    let start = min + Math.pow(2, k);
    let end = max + Math.pow(2, k);
    let result = 0;
    
    while(start <= end) {
        if(start % 2 === 1) {
            result = Math.max(result, st[start]);
        }
        if(end % 2 === 0) {
            result = Math.max(result, st[end]);
        }
        start = (start + 1) >> 1;
        end = (end - 1) >> 1;
    }
    
    return result;
}

function solution(stones, k) {
    const N = stones.length;
    const [K, ST] = createSegmentTree(N, stones);
    let min = 2e9;

    for(let i = 0; i <= N - k; i++) {
        min = Math.min(min, query(K, ST, i, i + k - 1));
    }
    
    return min;
}
