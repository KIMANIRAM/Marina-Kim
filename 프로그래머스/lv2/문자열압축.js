function getCompress(s, slicingSize) {
    const cnts = [];
    const st = [];
    for(let i = 0; i < s.length; i += slicingSize) {
        const cur = s.slice(i, i + slicingSize);
        if(st.length && st[st.length - 1] === cur) {
            cnts.push(cnts.pop() + 1);
        } else {
            cnts.push(1);
            st.push(cur);
        }
    }
    return (st.length - 1) * slicingSize + st[st.length - 1].length + cnts.filter(cnt => cnt !== 1).join('').length;
}

function solution(s) {
    const max = Math.floor(s.length / 2);
    let min = s.length;
    
    for(let i = 1; i <= max; i++) {
        min = Math.min(min, getCompress(s, i));
    }
    
    return min;
}
