function solution(prices) { 
    const n = prices.length;
    let answer = Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j ++) {
            if(prices[i] <= prices[j]) {
                answer[i] = answer[i] + 1;
            } else {
                answer[i] = answer[i] + 1;
                break;
            }
        }
    }
    
    return answer;
}
