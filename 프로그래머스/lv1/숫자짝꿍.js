function solution(X, Y) {
    let xcnt = Array(10).fill(0);
    let ycnt = Array(10).fill(0);
    let answer = '';

    for(let i = 0; i < X.length; i++) {
        xcnt[X[i]]++;
    }

    for(let i = 0; i < Y.length; i++) {
        ycnt[Y[i]]++;
    }

    for(let i = 9; i >= 0; i--) {
        let min = Math.min(xcnt[i], ycnt[i]);
        for(let j = 0; j < min; j++) {
            answer += i;
        }
    }

    if(answer === '') return '-1';
    if(parseInt(answer) === 0) return '0';

    return answer;
}
