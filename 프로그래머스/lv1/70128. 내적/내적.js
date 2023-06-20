function solution(a, b) {
    const inner = a.reduce((acc, curr, idx) => {
        // console.log(acc, curr, a[idx], b[idx]);
        curr = acc + a[idx] * b[idx];
        return curr;
    }, 0);
    // console.log(inner);
    
    return inner;
}