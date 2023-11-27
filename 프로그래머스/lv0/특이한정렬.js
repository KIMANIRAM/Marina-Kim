function solution(numlist, n) {
    const sorted = numlist.sort((a, b) => a - b);
    return sorted.sort((a, b) => (Math.abs(a - n) > Math.abs(b - n)) ? 1 : -1);
}
