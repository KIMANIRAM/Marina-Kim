function solution(name, yearning, photo) {
    const result = [];    
    
    const yearningNameMap = name.reduce((result, key, idx) => {
            result.set(key, yearning[idx]);
            return result;
        }, new Map);
    
    for(let i = 0; i < photo.length; i++) {
        let count = 0;
        for(let j = 0; j < photo[i].length; j++) {
            let target = photo[i][j];
            if(yearningNameMap.has(target)) {
                count += yearningNameMap.get(target);
            }
        }
        result.push(count);
    }  
    
    return result;
}
