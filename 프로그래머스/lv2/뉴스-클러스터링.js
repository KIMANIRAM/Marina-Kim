function createMultiSet(str) {
    const multiSet = [];
    const pattern = /[a-zA-Z]/;
    for(let i = 0; i < str.length - 1; i++) {
        if(pattern.test(str[i]) && pattern.test(str[i + 1])) {
            multiSet.push((str[i] + str[i + 1]).toLowerCase());
        }
    }
    return multiSet;
}

function solution(str1, str2) {
    const a = createMultiSet(str1);
    const b = createMultiSet(str2);
    const set = Array.from(new Set([...a, ...b]));
    
    let [inter, uni] = [0, 0];
    
    for(let i = 0; i < set.length; i++) { 
        const checkedA = a.filter(e => e === set[i]).length;
        const checkedB = b.filter(e => e === set[i]).length;
        inter += Math.min(checkedA, checkedB);
        uni += Math.max(checkedA, checkedB); 
    }
    
    if(!inter && !uni) return 65536;
    
    return Math.floor(inter / uni * 65536);
}
