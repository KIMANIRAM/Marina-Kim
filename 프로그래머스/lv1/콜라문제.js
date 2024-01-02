function solution(a, b, n) {
    // 마트에 줘야 하는 병 수보다 가지고 있는 빈 경의 개수가 적다면 못 바꿈
    if(n < a) return 0;
    
    let sum = Math.floor(n / a) * b;
    
    return sum + solution(a, b, n % a + sum);
}
