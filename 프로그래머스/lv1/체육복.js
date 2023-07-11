function solution(n, lost, reserve) {
    let borrow = 0;
    const intersect = lost.filter(val => reserve.includes(val));
    
    const losted = lost.sort((a, b) => a - b).filter(c => !intersect.includes(c));
    const reserved = reserve.sort((a, b) => a - b).filter(c => !intersect.includes(c));

    for(let i = 0; i < losted.length; i++) {
        for(let j = 0; j < reserved.length; j++) {
            if(Math.abs(losted[i] - reserved[j]) === 1) {
                borrow += 1;
                reserved.splice(j, 1); // j번째부터 끝까지 슬라이스
                break;
            }
        }
    }

    return n - losted.length + borrow;
}
