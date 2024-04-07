/* 시간초과 - for 문 안에서 shift를 사용해서 시간복잡도가 O(N^2)이 됐기 때문.
function solution(order) {
    const MAX = Math.max(...order);
    const boxes = [];
    const st = [];
    const result = [];
    
    for(let i = 1; i <= MAX; i++) {
        if(i < order[0]) {
            st.push(i)
        } else {
            boxes.push(i);
        }
    }
    
    for(let i = 0; i < order.length; i++) {
        if(boxes.length && order[i] === boxes[0]) {
            result.push(boxes.shift());
        } else if(st.length && order[i] === st[st.length - 1]) {
            result.push(st.pop());
        } else break;
    }
    
    return result.length;
}
*/

// shift를 사용하지 말고, pop만 사용해야 함.
// 시간복잡도를 O(N^2)에서 O(N)로 줄였음. pop()의 시간복잡도는 O(1)이기 때문에 while문을 얼마나 돌던지간에 시간복잡도는 항상 1임.
function solution(order) {
    const st = [];
    let j = 0;
    
    for(let i = 1; i <= order.length; i++) {
        st.push(i);
        while(st.length && order[j] === st[st.length - 1]) {
            st.pop();
            j++;
        } 
    }
    
    return j;
}
