function convertable(word, compareW) {
    let cnt = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] !== compareW[i]) cnt++;
    }
    return cnt > 1 ? false : true;
}

function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    const result = [];
    const dfs = (word, cnt, visited) => {
        if(word === target) {
            return result.push(cnt);
        }
        const cvtWords = words.filter(e => !visited.has(e) && convertable(e, word));
        cvtWords.map(e => {
            const updatedVisited = new Set([...visited]);
            updatedVisited.add(e);
            dfs(e, cnt + 1, updatedVisited);
        });
    };
    
    dfs(begin, 0, new Set());
    
    return Math.min(...result);
}
