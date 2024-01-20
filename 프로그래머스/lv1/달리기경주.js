function solution(players, callings) {
    let result = [...players];
    
    const hashMap = players.reduce((map, name, rank) => {
        map.set(name, rank);
        return map
    }, new Map());
    
    for(let i = 0; i < callings.length; i++) {
        const rank = hashMap.get(callings[i]); 
        const prevPlayer = result[rank - 1]; 
        [result[rank], result[rank - 1]] = [result[rank - 1], result[rank]];
        hashMap.set(callings[i], rank - 1);
        hashMap.set(prevPlayer, rank);
    }

    return result;
}
