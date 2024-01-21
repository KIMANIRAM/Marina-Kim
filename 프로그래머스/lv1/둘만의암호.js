function solution(s, skip, index) {
    const encrypt = (str) => { 
        const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let restCnt = index;
        let start = alpha.indexOf(str);
        let end = start;

        while(restCnt > 0) {
            end += 1;
            if(end > alpha.length - 1) end = 0;
            if(!skip.includes(alpha[end])) restCnt -= 1;
        }

        return alpha[end];
    };
    
    return [...s].map(e => encrypt(e)).join('');
}
