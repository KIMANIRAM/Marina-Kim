function solution(array, commands) {
    const result = [];
    
    for(const command of commands) {
        const [i, j, k] = command;
        const ans = array.slice(i - 1, j);
        const min = Math.min(...ans);
        const max = Math.max(...ans);
        
        let count = {};
        for(let i = min; i <= max; i++) {
            count[i] = 0;
        }
        
        for(let i = 0; i < ans.length; i++) {
            count[ans[i]] += 1;
        }
        
        const sortedArr = [];
        for(let i = min; i <= max; i++) {
            while(count[i] > 0) {
                sortedArr.push(i);
                count[i]--;
            }
        }
        result.push(sortedArr[k - 1]);
    }
    
    return result;
}
