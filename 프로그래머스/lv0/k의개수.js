function solution(i, j, k) {
    let cnt = 0;
    const myFunc = (num) => Number(num);
    
    for(let s = i; s <= j; s++) {
        const intArr = Array.from(String(s), myFunc);
        intArr.forEach((val) => {
            if(val === k) cnt++;
        })
    }
    
    return cnt;
}
