function solution(s, skip, index) {
    let answer = '';
    // const range = alpha.slice(alpha.indexOf(str) + 1, idx + 1);
    const encrypt = (str, skip = skip, idx = index) => { // 'w', 5 -> 'z', 2 -> b
        const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let restIdx = idx;
        let start = alpha.indexOf(str);
        let end = start;
        
        while(restIdx > 0) {
            end += 1;
            if(end > alpha[alpha.length - 1]) end = 0;
            
            if(skip.includes(alpha[end])) {
                end -= 1;
            } else {
                restIdx -= 1;
            }
        }
         
    };
    
    s.forEach(e => {
        answer += encrypt(e);
    });
    
    return answer;
}
