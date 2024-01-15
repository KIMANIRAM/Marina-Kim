function solution(s) {
    let x = '';
    let [xcnt, scnt] = [0, 0];
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(x === '') {
            x = s[i];
            xcnt = 1;
            continue;
        }
        
        if(s[i] === x) {
            xcnt += 1;
        } else {
            scnt += 1;
        }
        
        if(xcnt === scnt) {
            x = '';
            [xcnt, scnt] = [0, 0];
            answer++;
        }
    }
    
    return x.length > 0 ? answer + 1: answer;
}
