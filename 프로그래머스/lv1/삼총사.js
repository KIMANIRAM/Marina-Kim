function solution(number) {
    const selectStudent = (arr, n) => { 
        const results = [];
        if(n === 1) return arr.map(e => [e]);
        
        arr.forEach((fixed, idx, origin) => {
            const suffixes = selectStudent(origin.slice(idx + 1), n - 1);
            const attached = suffixes.map(suffix => [fixed, ...suffix]);
            results.push(...attached);
        });
        
        return results;
    }
    
    const getSum = (arr) => arr.reduce((a, b) => a + b);
    
    return selectStudent(number, 3).filter(e => getSum(e) === 0).length;
}
