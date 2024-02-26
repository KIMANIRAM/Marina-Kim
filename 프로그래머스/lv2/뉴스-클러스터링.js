function solution(str1, str2) {
    const pattern = /[a-zA-Z]/;
    
    const a = createMultiSet(str1);
    const b = createMultiSet(str2);
    const set = Array.from(new Set([...a, ...b]));
    
    let [inter, uni] = [0, 0];
    let similar = 1;
    
    for(let i = 0; i < set.length; i++) { 
        const checkedA = a.filter(e => e === set[i]).length;
        const checkedB = b.filter(e => e === set[i]).length;
        inter += Math.min(checkedA, checkedB);
        uni += Math.max(checkedA, checkedB); 
    }
    
    if(!inter && !uni) return 65536;
    
    return Math.floor(inter / uni * 65536);
}
