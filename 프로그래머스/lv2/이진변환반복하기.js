function solution(s) {
    let result = s;
    let [cvtCnt, zeroCnt] = [0, 0];
    
    while(result !== '1') {
        if(result === '1') break;

        result = [...result].filter(str => {
            if(str === '1') return true;
            zeroCnt++;
            return false;
        });
        result = ((result.length).toString(2)).toString();
        cvtCnt++;
    }
    return [cvtCnt, zeroCnt];
}
