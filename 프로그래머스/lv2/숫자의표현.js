function solution(n) {
    const arr = Array(n).fill().map((_, i) => i + 1);
    let [cnt, sum, end] = [0, 0, 0];
    
    for(let start = 0; start < arr.length; start++) {
        while(sum < n && end < arr.length) {
            sum += arr[end];
            end++;
        }
        
        if(sum === n) cnt++;
        
        sum -= arr[start];
    }
    
    return cnt;
}
