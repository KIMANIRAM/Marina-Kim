function solution(topping) {
    let answer = 0;
    
    const fixed = new Set();
    const rest = topping.reduce((map, e) => {
        map.set(e, (map.get(e) || 0) + 1);
        return map;
    }, new Map());
    
    for(let i = 0; i < topping.length; i++) {
        rest.set(topping[i], rest.get(topping[i]) - 1);
        fixed.add(topping[i]);
        if(rest.get(topping[i]) === 0) rest.delete(topping[i]);
        if(fixed.size === rest.size) answer++;
        
    }
    
    return answer;
}
