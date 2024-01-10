// hashmap, string to array with spread operator
function solution(survey, choices) {
    const types = ["R","T","C","F","J","M","A","N"];
    const matchedTypes = ["RT","CF","JM","AN"];
    
    const hashmap = types.reduce((map, e) => {
        map.set(e, 0);
        return map;
    }, new Map());
    
    survey.forEach((e, i) => {
        let score = choices[i] - 4;
        if(score > 0) {
            hashmap.set(e[1], hashmap.get(e[1]) + score);
        }else if(score < 0) {
            hashmap.set(e[0], hashmap.get(e[0]) + Math.abs(score));
        }
    });
    
    return matchedTypes.reduce(
        (ans, type) => ans + [...type].sort(
            (k1, k2) => hashmap.get(k2) - hashmap.get(k1)
        )[0], ""
    );
}
