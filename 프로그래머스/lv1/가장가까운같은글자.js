function solution(s) {
    const arr = [];
    const answer = [];
    
    for(let i = 0; i < s.length; i++) {
        const foundStrIdx = arr.indexOf(s[i]);
        
        if(foundStrIdx === -1) {
            arr.push(s[i]);
            answer.push(foundStrIdx);
        } else {
            const prevStr = [];
            
            arr.forEach((e, idx) => {
                if(e === s[i]) return prevStr.push(idx);
            });
            const prevStrSub = prevStr.map(str => i - str);
            
            arr.push(s[i]);
            answer.push(Math.min(...prevStrSub));
        }
    }
    
    return answer;
}
