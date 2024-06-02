function solution(a, b, c, d) {
    const hashmap = ([a, b, c, d]).reduce((map, e) => {
        map.set(e, (map.get(e) || 0) + 1);
        return map;
    }, new Map());

    const arr = Array.from(hashmap).sort((a, b) => b[1] - a[1]);

    switch(true) {
        case arr.length === 1:
            return 1111 * arr[0][0];
        case arr.length === 2 && arr[0][1] === 3:
            return Math.pow(10 * arr[0][0] + arr[1][0], 2);
        case arr.length === 2 && arr[0][1] === arr[1][1]:
            return (arr[0][0] + arr[1][0]) * Math.abs(arr[0][0] - arr[1][0]);
        case arr.length === 3:
            return arr[1][0] * arr[2][0];
        default:
            return Math.min(...[a, b, c, d]);
    }
}
