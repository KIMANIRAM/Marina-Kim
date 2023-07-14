// source: https://ha-young.github.io/2021/algorithm_javascript/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-N%EC%9C%BC%EB%A1%9C%ED%91%9C%ED%98%84_lv3_dp/
function addMemo(n, d, N) {
    let results = new Set();
    results.add(Number(String(N).repeat(n)));
    
    for(let i = 1; i < n; i++) {
        for(let number1 of d[i].values()) {
            for(let number2 of d[n - i].values()) {
                results.add(number1 + number2);
                results.add(number1 - number2);
                results.add(number1 * number2);
                results.add(Math.floor(number1 / number2));
            }
        }
    }
    
    return results;
}

function solution(N, number) {
    if(N === number) return 1;
    
    const d = []; 
    d[1] = new Set([N]);
    
    for(let i = 2; i <= 8; i++) {
        d[i] = addMemo(i, d, N);
        
        if(d[i].has(number)) {
            return i;
        }
    }
    
    return -1;
}
