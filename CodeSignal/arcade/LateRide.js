function solution(n) {
    const hh = String(~~(n / 60)).split('').reduce((a, b) => a + b * 1, 0);
    const mm = String(n % 60).split('').reduce((a, b) => a + b * 1, 0);
    return hh + mm;
}
