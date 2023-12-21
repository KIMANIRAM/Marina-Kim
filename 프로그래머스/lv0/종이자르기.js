function solution(M, N) {
    if(M === 1) return N - 1;
    return 1 + solution(M - 1, N) + solution(M - (M - 1), N);
} 
