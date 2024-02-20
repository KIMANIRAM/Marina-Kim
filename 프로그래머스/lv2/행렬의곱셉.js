function solution(arr1, arr2) {
    const L = arr1[0].length;
    const N = arr1.length;
    const M = arr2[0].length;
    const arr3 = Array(N).fill().map(e => Array(M).fill(0));
    
    // arr3[i][j] = total(arr1[i][k] * arr2[k][j])
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            let value = 0;
            for(let k = 0; k < L; k++) {
                value += arr1[i][k] * arr2[k][j];
            }
            arr3[i][j] = value;
        }
    }
    
    return arr3;
}
