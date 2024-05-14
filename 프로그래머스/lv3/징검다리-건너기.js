function build(arr, n) {
    const K = Math.ceil(Math.log2(n));
    const start = Math.pow(2, K);
    const size = start * 2;
    const ST = Array(size).fill(0);
    
    for(let i = 0; i < n; i++) {
        ST[i + start] = arr[i];
    }
    
    for(let i = start - 1; i > 0; i--) {
        ST[i] = Math.max(ST[i * 2], ST[i * 2 + 1]);
    }
    
    return [K, ST];
}

function query(K, ST, min, max) {
    let result = 0;
    let start = min + Math.pow(2, K);
    let end = max + Math.pow(2, K);
    
    while(start <= end) {
        if(start % 2 === 1) {
            result = Math.max(result, ST[start]);
        }
        if(end % 2 === 0) {
            result = Math.max(result, ST[end]);
        }
        start = Math.floor((start + 1) / 2);
        end = Math.floor((end - 1) / 2);
    }

    return result;
}

function solution(stones, k) {
    let answer = Number.MAX_SAFE_INTEGER;
    const [K, ST] = build(stones, stones.length);
    for(let i = 0; i <= stones.length - k; i++) {
        const max = query(K, ST, i, i + k - 1); 
        answer = Math.min(answer, max);
    }
    
    return answer;
}
