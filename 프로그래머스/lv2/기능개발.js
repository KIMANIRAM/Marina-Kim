function solution(progresses, speeds) {
    const answer = [];
    
    while(progresses.length) {
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        if(progresses[0] >= 100){
            let cnt = 0;
            while(progresses.length){
                if(progresses[0] >= 100){
                    progresses.shift();
                    speeds.shift();
                    cnt += 1;
                } else {
                    break;
                }
            }
            answer.push(cnt);
        }
    }
    return answer;     
}
