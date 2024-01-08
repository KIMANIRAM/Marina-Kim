function solution(ingredient) { // "211231231" -> 21231 -> 2 -> 2개
    const count = (function wrapup(str, cnt) {
        if(ingredient.length < 4) return cnt;
        
        if(!cnt && !str.includes('1231')) {
            return 0;
        }
        
        if(str.includes('1231')) {
            wrapup(str.replace('1231', ''), cnt + 1);
        }
    })(ingredient.join(''), 0)
    
    return count;
}
