function isCorrect(str) {
    const st = [];
    for(let i = 0; i < str.length; i++) {
        if(st.length && st[st.length - 1] === '(' && str[i] === ')') {
            st.pop();
        } else {
            st.push(str[i]);
        }
    }
    return st.length === 0;
}

function splitToUV(str) {
    let [leftCnt, rightCnt] = [0, 0];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            leftCnt++;
        } else {
            rightCnt++;
        }
        if(leftCnt === rightCnt) return [str.slice(0, i + 1), str.slice(i + 1)];
    }
}

function convertU(str) {
    return [...str.slice(1, str.length - 1)].map(e => e === '(' ? ')' : '(').join(''); 
}

function getCorrectedStr(w) {
    if(w.length === 0) return '';
    const [u, v] = splitToUV(w);
    if(isCorrect(u)) {
        return u + getCorrectedStr(v);
    } else {
        return '(' + getCorrectedStr(v) + ')' + convertU(u);
    }
}

function solution(p) {
    if(p.length === 0) return '';
    const answer = getCorrectedStr(p);
    
    return answer;
}
