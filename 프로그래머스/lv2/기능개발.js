function solution(progresses, speeds) {
    const answer = [0];
    const days = progresses.map((progress, i) => {
        const remainder = 100 - progress;
        const day = remainder % speeds[i] ?
              ~~(remainder / speeds[i]) + 1 : ~~(remainder / speeds[i]);
        return day;
    });
    let maxDay = days[0];

    for(let i = 0, j = 0; i < days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    
    return answer[0] === 0 ? [1] : answer;
}
