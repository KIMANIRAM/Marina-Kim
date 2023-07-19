function isConvert(v, word) {
    let count = 0;
    for(let i = 0; i < v.length; i++) {
        if(v[i] !== word[i]) {
            count++;
        }
    }
    return count > 1 ? false: true;
}

function solution(begin, target, words) {
    let queue = [begin];
    let visited = new Set();
    let min = Number.MAX_SAFE_INTEGER;

    while(queue.length) {
        let v = queue.pop();
        if(v === target) {
            min = visited.size < min ? visited.size: min;
        }

        if(!visited.has(v)) {
            visited.add(v);
            for(const word of words) {
                if(isConvert(v, word)) {
                    queue.push(word);
                }
            }
        } 
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}
