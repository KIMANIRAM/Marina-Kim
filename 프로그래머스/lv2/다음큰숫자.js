function solution(n) {
    const nCnt = Array.from((n).toString(2)).filter(e => e === '1').length;
    let [max, maxCnt] = [n + 1, 0];

    while(maxCnt !== nCnt) {
        const _maxCnt = Array.from((max).toString(2)).filter(e => e === '1').length;
        if(_maxCnt === nCnt) {
            maxCnt = _maxCnt;
        } else {
            max++;
        }
    }

    return max;
}
