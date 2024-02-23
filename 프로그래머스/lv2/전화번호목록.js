function solution(phone_book) { 
    const map = phone_book.reduce((map, e) => {
        map.set(e, '');
        return map;
    }, new Map());

    for(const [k, v] of map) {
        for(let i = 1; i < k.length; i++) {
            const prefix = k.slice(0, i);
            if(map.has(prefix)) return false;
        }
    }
    return true;
}
