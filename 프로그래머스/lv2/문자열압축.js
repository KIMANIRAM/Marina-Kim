function solution(s) {
    const max = ~~(s.length / 2);
    let min = s.length;

    const getSlice = (chunkLen) => {
        const comps = [];
        const st = [];
        for(let j = 0; j < s.length; j += chunkLen) {
            const chunk = s.slice(j, j + chunkLen);
            if(st.length && st[st.length - 1] === chunk) {
                const cnt = comps.pop() + 1;
                comps.push(cnt);
            } else {
                comps.push(1);
                st.push(chunk);
            }
        }
        const removedLen = comps.filter(e => e !== 1).join('').length;
        return (st.length - 1) * chunkLen + st[st.length - 1].length + removedLen;
    };
    
    for(let i = 1; i <= max; i++) {
        min = Math.min(min, getSlice(i));
    } 
  
    return min;
}
