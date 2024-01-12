function solution(cards1, cards2, goal) {
    const matchedCnt = goal.reduce((cnt, e) => {
        if(e === cards1[0]) {
            cards1.shift();
            cnt -= 1;
        } else if(e === cards2[0]) {
            cards2.shift();
            cnt -= 1;
        }
        return cnt;
    }, goal.length);

    return matchedCnt === 0 ? 'Yes' : 'No';
}
