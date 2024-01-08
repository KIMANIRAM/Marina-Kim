// 처음 풀이 -> 메모리 초과로 (55/100)점
// 숫자 배열을 문자열로 변경 + 재귀 알고리즘 => 많은 메모리 필요
function solution(ingredient) { 
    // 211231231,0 -> 21231,1 -> 2,2 => 2
    function wrapup(str, cnt = 0) {
        if(str.length < 4) return cnt;
        
        if(str.includes('1231')) {
            return wrapup(str.replace('1231', ''), ++cnt);
        }
        
        return cnt;
    }
    
    return wrapup(ingredient.join(''));
}

// 2차 풀이: 스택 (100/100)점
function solution(ingredient) { 
    const check = [];
    let count = 0;

    ingredient.forEach(e => {
        check.push(e);

        if(check[check.length - 1] === 1 &&
           check[check.length - 2] === 3 &&
           check[check.length - 3] === 2 &&
           check[check.length - 4] === 1
          ) {
            check.splice(-4);
            count++;
        }
    });

    return count;
}
