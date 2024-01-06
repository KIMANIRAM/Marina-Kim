function pipe(...fns) {
    return (...args) => fns.reverse().reduceRight(
        (res, fn) => [fn.call(null, ...res)]
        , args
    )[0];
}
    
function solution(food) { 
    const convertElement = (num, idx) => {
        if(num === 0) return "";
        const result = String(idx + 1);
        
        return result + convertElement(num - 1, idx);
    };
    
    const divideFoods = arr => 
        arr.map(e => Math.floor(e / 2)).map((cur, i) => convertElement(cur, i));
    
    const createForwardOrder = arr => 
        arr.reduce((forward, cur) => forward + cur, "");
    
    const createAllOrder = forward => 
        forward + '0' + forward.split('').reverse().join('');
    
    return pipe(
        divideFoods,
        createForwardOrder,
        createAllOrder,
    )(food.slice(1));
} 
