function solution(numbers, target) {
    let n = numbers.length;
    let d = Array.from({length: n}, () => Array(2001).fill(0));
    d[0][1000 - numbers[0]] = 1; // d[0][996]
    d[0][1000 + numbers[0]] = 1; // d[0][1004]

    for(let i = 1; i < n; i++){
        for(let j = 0; j < 2001; j++){
            if(d[i - 1][j] > 0) {
                d[i][j - numbers[i]] += d[i - 1][j];
                d[i][j + numbers[i]] += d[i - 1][j];
            }
        }
    }
    
    return d[numbers.length - 1][1000 + target];
}
