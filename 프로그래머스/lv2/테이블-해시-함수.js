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
