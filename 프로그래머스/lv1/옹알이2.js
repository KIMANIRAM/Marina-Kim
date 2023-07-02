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
