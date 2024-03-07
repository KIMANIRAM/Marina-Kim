function solution(sequence, k) {
    let st = [];
    let [sum, end] = [0, 0];
    
    for(let i = 0; i < sequence.length; i++) {
        while(end < sequence.length && sum < k) {
            sum += sequence[end];
            end++;
        }
        if(sum === k) { 
            while(
                st.length &&
                (end - i - 1) < (st[st.length - 1][1] - st[st.length - 1][0])
            ) {
                st.pop();
            }
            st.push([i, end - 1]);
        }
        sum -= sequence[i];
    }
    return st.shift();
}
