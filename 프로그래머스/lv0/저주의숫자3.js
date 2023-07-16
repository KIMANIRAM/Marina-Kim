/* sudo code
    d[n] <- n을 3x 마을에서 사용하는 숫자로 바꾼 결과값을 메모이제이션.
    d[0] <- 0
    d[1] <- 1
    for: 2 <= i <= n
        j <- 1
        while: (d[i-1] + j) in '3' or (d[i-1] + j) % 3 === 0
            j++
        d[i] = d[i-1] + j    
    return d[n]
*/
function solution(n) {
    let d = Array.from({length: 101}, () => 0);
    d[1] = 1;

    if(n === 1) {
        return 1;
    }

    for(let i = 2; i <= n; i++) {
        let j = 1;
        while((d[i-1] + j) % 3 === 0 || String(d[i-1] + j).includes('3')) {
            j++;
        }
        d[i] = d[i-1] + j
    }

    return d[n]
}
