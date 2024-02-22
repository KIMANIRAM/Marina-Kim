function solution(s) {
    const map = new Map();
    // \d+ : 숫자가 하나 또는 그 이상 연결된
    s.match(/\d+/g).forEach(e => map.set(e, (map.get(e) || 0) + 1));
    const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    const tuple = sorted.map(e => +e[0]);
    return tuple
}
