function solution(n, words) {
    const prevWords = new Map();
    let [player, round] = [1, 1];
    let prevWord = '';
    
    for(let i = 0; i < words.length; i++) {
        if(i > 0 && (prevWords.has(words[i]) || prevWords.get(prevWord) !== words[i][0])) return [player, round];
        
        prevWords.set(words[i], words[i][words[i].length - 1]);
        prevWord = words[i];
        player++;
        
        if(player > n) {
            round++;
            player = 1;
        }
    }

    return [0, 0];
}
