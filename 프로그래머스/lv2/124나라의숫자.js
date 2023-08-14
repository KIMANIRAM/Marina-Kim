/* 첫 번째 풀이 - 바텀업, 효율성 초과
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

// 두 번째 풀이 - 탑다운
function solution(n) {
    const stack = [];
    
    do {
        if(n % 3 === 0) {
            stack.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
            stack.push(n % 3);
            n = Math.floor(n / 3);
        }
    } while(n > 0);
    
    return stack.reverse().join('');
}
