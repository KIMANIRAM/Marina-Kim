function solution(elements) {
    const len = elements.length;
    // 연속길이가 1인 부분수열의 합
    const set = elements.reduce((_set, el) => {
        _set.add(el);
        return _set;
    }, new Set());
    
    for(let k = 2; k < len; k++) {
        let sum = 0;
        for(let i = 0; i < len; i++) {
            if(i === 0) {
                for(let j = 0; j < k; j++) {
                    sum += elements[j];
                }
            } else {
                sum -= elements[i - 1];
                sum += elements[(i + k - 1) % len];
            }
            
            set.add(sum);
        }
    }
    // 연속길이가 len인 부분수열의 합
    set.add(elements.reduce((a, b) => a + b));
    
    return set.size;
}
