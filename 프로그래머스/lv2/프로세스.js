function solution(priorities, location) {
    const q = priorities.map((e, i) => [i, e]);
    const st = priorities.map((e, i) => [i, e]).sort((a, b) => a[1] - b[1]);
    let cnt = 1;
    
    while(q.length) {
        if(!st.length) break;
        const p = q.shift();
        const max = st[st.length - 1];
        if(max[1] > p[1]) {
            q.push(p);
        } else {
            st.pop();
            if(p[0] === location) {
                break;
            } else {
                cnt++
            }
        }
    }
    
    return cnt;
}
