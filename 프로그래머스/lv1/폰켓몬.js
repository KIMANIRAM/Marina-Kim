function solution(nums) {
    const max = nums.length / 2;
    const hashmap = nums.reduce((map, cur) => {
        map.set(cur, (map.get(cur) || 0) + 1);
        return map;
    }, new Map());
    
    return hashmap.size >= max ? max : hashmap.size;
}
