function solution(k, score) { 
    const day = score.length;
    const ranking = []; 
    const result = []; 
    for(let i = 0; i < day; i++) {
        if(i < k) {
            ranking.push(score[i]);
            result.push(Math.min(...ranking));
        } else {
            ranking.sort((a, b) => b - a); 
            const min = ranking[ranking.length - 1];
            if(score[i] > min) {
                ranking.pop();
                ranking.push(score[i]);
            }
            result.push(Math.min(...ranking));
        }
    }
    
    return result;
}
