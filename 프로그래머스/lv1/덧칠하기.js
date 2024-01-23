function solution(n, m, section) { // n=8, m=5, s=[2,3,6] -> 답: 1
    let [start, end] = [0, 0];
    let cnt = 0;
    
    for(let i = 1; i <= n - m + 1; i++) {
        [start, end] = [i, m + i - 1];
        let _cnt = 0;

        for(let j = 0; j < section.length; j++) {
            if(section[j] >= start && section[j] <= end) {
                _cnt += 1;
            } else break;
        }
        cnt = Math.max(cnt, _cnt);
    }
    
    return cnt;
}
