function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);
    let cnt = 1;
    let x = targets[0][1] - 1;

    for(let i = 1; i < targets.length; i++) {
        let [s, e] = targets[i];
        if(s > x) {
            cnt++;
            x = e - 1;
        }
    }

    return cnt;
}
