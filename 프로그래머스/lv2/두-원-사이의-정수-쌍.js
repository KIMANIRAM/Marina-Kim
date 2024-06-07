function solution(r1, r2) {
    let yDots = 0;
    let restDots = 0;

    for(let x = 0; x <= r2; x++) {
        const a = Math.ceil(Math.sqrt(Math.max(0, ((r1 * r1) - (x * x)))));
        const b = Math.floor(Math.sqrt((r2 * r2) - (x * x)));
        const cnt = b - a + 1;
        if(x === 0) {
            yDots += cnt;
        } else {
            restDots += cnt;
        }
    }

    return ((restDots + yDots) * 4) - (yDots * 4);
}
