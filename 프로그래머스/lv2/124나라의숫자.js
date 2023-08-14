/* 첫 번째 풀이 - DP 효율성 초과
function solution(n) {
    let d = Array(n + 1).fill('');
    d[1] = [1];
    d[2] = [2];
    d[3] = [4];

    for(let i = 4; i <= n; i++) {
        if(i % 3 === 0) {
            d[i] = `${d[Math.floor(i / 3) - 1]}` + '4';
        } else {
            d[i] = `${d[Math.floor(i / 3)]}` + `${d[i % 3]}`
        }
    }
    
    return d[n];
}
*/

// 두 번째 풀이 - 스택
