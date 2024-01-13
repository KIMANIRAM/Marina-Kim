function solution(k, m, score) {
    const n = score.length;
    let ans = 0;
    
    score.sort((a, b) => b - a);
    
    for(let i = 0; i < n; i += m) {
        const temp = score.slice(i, i + m);
        
        if(temp.length === m) {
            ans += m * temp[temp.length - 1];
        }
    }
    
    return ans;
}
