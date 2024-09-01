function solution(n, firstNumber) {
    const r = n / 2;
    if(firstNumber < r) return firstNumber + r;
    return firstNumber - r;
}
