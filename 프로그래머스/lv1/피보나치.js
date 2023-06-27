// 오버플로우 주의!
// 47번째 피보나치 수는 2,971,215,073이고, 이 수는 32비트 정수(ex. int) 범위를 넘어 오버플로우가 발생합니다
function solution(n) {
    let fivo = [0, 1];

    for(let i = 0; i <= n; i++) {
        if(i > 1) {
            fivo.push((fivo[i-1] + fivo[i-2]) % 1234567); 
        }
    }
    
    const result = fivo.pop();
    
    return result % 1234567;
}
