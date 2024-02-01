function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((total, _, i) => total += A[i] * B[i], 0);
}
