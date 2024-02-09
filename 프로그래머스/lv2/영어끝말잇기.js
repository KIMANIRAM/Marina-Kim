function solution(n, words) {
    const prevWords = new Map([
        [words[0], words[0][words[0].length - 1]]
    ]);
    let round = 1;
    let prevWord = words[0];

    for(let i = 1; i < words.length; i++) {
        if(i > 0 && (prevWords.has(words[i]) || prevWords.get(prevWord) !== words[i][0])) return [(i % n) + 1, round];

        prevWords.set(words[i], words[i][words[i].length - 1]);
        prevWord = words[i];
        
        if(i % n === n - 1) {
            round++;
        }
    }

    return [0, 0];
}
