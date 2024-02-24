// 스택 또는 큐를 사용하는 문제 - 일단 모아놓고 조건에 맞으면 한꺼번에 제거
function solution(numbers) { 
    const st = [0]; // 큰수찾기를 해야 할 숫자의 인덱스
    const answer = Array(numbers.length).fill(-1);
    
    for(let i = 1; i < numbers.length; i++) {
        const next = numbers[i];
        while(st.length && numbers[st[st.length - 1]] < next) {
            answer[st.pop()] = next;
        }   
        st.push(i); 
    }
    
    return answer;
}
