function getCombinations(arr, selectNumber) {
    const results = [];
    if(selectNumber === 1) return arr;
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map(combination => [fixed + combination]);
        results.push(...attached);
    })
    
    return results;
}

function solution(numbers) {
    const result = getCombinations(numbers, 2);
    
    return result;
}
