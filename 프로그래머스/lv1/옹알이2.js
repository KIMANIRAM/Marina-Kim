// 정규식을 이용한 풀이
function solution(babbling) {
    // regex.test("문자열") 매칭되면 true, 아니면 false를 반환
    // (): 캡처할 그룹
    // \1: 정규식 내 캡처된 첫번째 그룹의 값 참조
    const includeRe = /(aya|ye|woo|ma)\1+/; // 두번 이상 같은 말이 반복
    const excludeRe = /^(aya|ye|woo|ma)+$/; // 해당 단어들의 반복으로만 이루어졌다는 조건
    
    return babbling.reduce((answer, word) => {
        return !includeRe.test(word) && excludeRe.test(word) ? ++answer : answer;
    }, 0);
}

// 원래 풀이
function solution(babbling) {
    let count = 0;
    let talkableWords = new Map();

    talkableWords.set("aya", 0);
    talkableWords.set("ye", 1);
    talkableWords.set("woo", 2);
    talkableWords.set("ma", 3);
    
    while(babbling.length) {
        let babb = babbling.pop();
        
        for(const [word, number] of talkableWords) {
            if(babb.includes(word.repeat(2))) continue;
            
            if(babb.includes(word)) {
                babb = babb.replaceAll(word, number);
            }
        }
        
        const isNumeric = (str) => !isNaN(str); // 문자열이 숫자인지 판별하는 함수
        
        if(isNumeric(babb)) count++;
    }
    
    return count;
}
