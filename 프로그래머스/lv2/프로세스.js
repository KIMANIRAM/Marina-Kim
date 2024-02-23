function solution(priorities, location) {
    const hashMap = priorities.reduce((map, e, i) => {
        map.set(i, e);
        return map;
    }, new Map());
    const q = Array.from(hashMap); 
    const st = Array.from(hashMap).sort((a, b) => a[1] - b[1]);
    let cnt = 1;
    
    while(q.length) {
        if(!st.length) break;
        const process = q.shift();
        const maxProcess = st[st.length - 1];
        
        if(process[1] < maxProcess[1]) {
            q.push(process);
        } else {
            st.pop();
            if(process[0] === location) {
                break;
            } else {
                cnt += 1;
            }
        }
    }
    
    return cnt;
}
