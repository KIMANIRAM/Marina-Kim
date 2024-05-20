function toMinutes(hhmm) {
    const [hh, mm] = hhmm.split(':');
    return (+hh) * 60 + (+mm);
}

function solution(plans) {
    const st = [];
    const result = [];
    const arr = plans.map(plan => [plan[0], toMinutes(plan[1]), +plan[2]]);
    arr.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < arr.length; i++) {
        if(!st.length) {
            st.push(arr[i]);
            continue;
        }
        
        const [cname, cstart, ctime] = arr[i];
        let restT = cstart - st[st.length - 1][1];
        
        if(restT >= st[st.length - 1][2]) {
            while(st.length) {
                if(restT >= st[st.length - 1][2]) {
                    restT -= st[st.length - 1][2];
                    result.push(st.pop()[0]);
                } else {
                    st[st.length - 1][2] -= restT;
                    break;
                }
            }
        } else {
            st[st.length - 1][2] -= restT;
        }
        st.push(arr[i]);
    }
    
    while(st.length) {
        result.push(st.pop()[0])
    }
    
    return result;
}
