function solution(n,a,b) {
    let rnd = 0;
    
    while(a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        rnd += 1;
    }
    
    return rnd;
}
