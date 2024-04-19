function solution(data, col, row_begin, row_end) {
    const st = [];
    
    data.sort((a, b) => { 
        if(a[col - 1] - b[col - 1] < 0) return -1;
        if(a[col - 1] - b[col - 1] > 0) return 1;
        if(a[col - 1] - b[col - 1] === 0) return b[0] - a[0];
    });
    
    for(let i = row_begin; i <= row_end; i++) {
        st.push(data[i - 1].reduce((a, b) => a + (b % i), 0));
        if(st.length === 2) {
            // console.log(st[0], st[1], st[0] ^ st[1])
            st.push(st.pop() ^ st.pop());
        }
    }
    
    return st.pop();
}

// 메소드 체이닝으로 다시 풀기
function solution(data, col, row_begin, row_end) {
    const sortByCol = (a, b) => a[col - 1] - b[col - 1] || b[0] - a[0];
    
    return data.sort((a, b) => sortByCol(a, b))
        .map((tuple, i) => tuple.reduce((total, e) => total + e % (i + 1), 0))
        .slice(row_begin - 1, row_end)
        .reduce((result, e) => result ^ e);
}
