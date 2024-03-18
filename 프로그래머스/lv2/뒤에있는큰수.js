// 스택 또는 큐를 사용하는 문제 - 일단 모아놓고 조건에 맞으면 한꺼번에 제거
function solution(numbers) {
    const st = []; // [[0,9], [1,1], [6,4], ... [idx, element]]
    let result = Array(numbers.length).fill(-1);
    
    for(let i = 0; i < numbers.length; i++) {
        while(st.length && st[st.length - 1][1] < numbers[i]) {
            const [idx, num] = st.pop();
            result[idx] = numbers[i];
        }
        st.push([i, numbers[i]])
    }

    return result;
}
