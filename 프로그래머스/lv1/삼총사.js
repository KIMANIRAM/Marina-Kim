function solution(number) {
    const getCombinations = (arr, selectNumber = 3) => {
        const results = [];
        if(selectNumber === 1) return arr.map(e => [e]);
        
        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map(combination => [fixed, ...combination]);
            results.push(...attached);
        });
        return results;
    }
    
    const combinations = getCombinations(number);
    
    let answer = 0;
    
    combinations.forEach(combination => {
        const sum = combination.reduce((a, b) => a + b);
        if (sum === 0) answer++;
    })
    
    return answer;
}
