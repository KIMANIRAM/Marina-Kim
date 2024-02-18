function solution(want, number, discount) {
    const match = (map) => {
        for(let i = 0; i < want.length; i++) {
            if(map.get(want[i]) !== number[i]) return false;
        }
        return true;
    };
    
    let cnt = 0;
    // discount.length - i >= 10, i <= discount.length - 10
    for(let i = 0; i <= discount.length - 10; i++) {
        const slicedDiscount = discount.slice(i, 10 + i);
        const hashMap = slicedDiscount.reduce((map, item) => {
            map.set(item, (map.get(item) || 0) + 1);
            return map;
        }, new Map());
        
        if(match(hashMap)) cnt++;
    }
    
    return cnt;
}
