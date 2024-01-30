function solution(s) {
    const arr = s.split(' ').map(e => +e);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return min + ' ' + max;
}
