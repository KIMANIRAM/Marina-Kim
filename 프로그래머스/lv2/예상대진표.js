function solution(n,a,b) {
    const [A, B] = [Math.min(a, b), Math.max(a, b)];

    let round = Math.log2(n);
    let left = 1;
    let right = n;
    let mid = Math.floor((left + right) / 2);

    while(true) {
        if(mid >= A && mid < B) break;
        else if(mid <= A) {
            left = mid;
            mid = Math.floor((left + right) / 2);
            round--;
        } else if(mid >= B) {
            right = mid;
            mid = Math.floor((left + right) / 2);
            round--;
        }
    }
    
    return round;
}
