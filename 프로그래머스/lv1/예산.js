function solution(d, budget) {
    const n = d.length;
    const arr = d.sort((a, b) => a - b);
    const purchase = (arr, cnt) => {
        if(cnt === n) return 0;
        
        const total = arr.reduce((sum, cur) => sum + cur, 0);
        
        if(total <= budget) return n - cnt;
        
        return purchase(arr.splice(0, arr.length - 1), cnt + 1);
    }
    
    const result = purchase(arr, 0);
    
    return result;
}
