function solution(cards1, cards2, goal) {
    const stack = [];
    let [p1, p2] = [0, 0];
    
    for(let i = 0; i < goal.length; i++) {
        if(goal[i] === cards1[p1]) {
            stack.push(goal[i]);
            p1++;
        } else if(goal[i] === cards2[p2]) {
            stack.push(goal[i]);
            p2++;
        }
    }
    
    return stack.length === goal.length ? "Yes" : "No";
}
