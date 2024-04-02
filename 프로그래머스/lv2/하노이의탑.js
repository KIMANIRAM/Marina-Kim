function solution(n) {
    const answer = [];
    
    const hanoi = (N, from, to, by) => {
        if(N === 1) {
            answer.push([from, to]);
            return;
        }
        hanoi(N - 1, from, by, to);
        answer.push([from, to]);
        hanoi(N - 1, by, to, from);
    };
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}
