// 첫 번째 풀이 - 런타임 에러
const GCD = (min, max) => max % min === 0 ? min : GCD(max % min, min);
    
const getExtendGCD = (stack) => {
    if(stack.length === 1) return stack[0] === 1 ? 0 : stack[0];
    const max = stack.pop();
    const min = stack.pop();
    const val = GCD(min, max);
    stack.push(val);
    return getExtendGCD(stack);
};

const isDivide = (dividend, arr) => {
    if(dividend === 1) return 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % dividend === 0) return 0;
    }
    return dividend;
};

function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    
    const coppiedA = [...arrayA];
    const coppiedB = [...arrayB];
    const [gcdA, gcdB] = [getExtendGCD(arrayA), getExtendGCD(arrayB)];
    let ans = 0;
    if(coppiedA.every(e => e % gcdB !== 0)) ans = Math.max(ans, gcdB);
    if(coppiedB.every(e => e % gcdA !== 0)) ans = Math.max(ans, gcdA);
    
    return ans;
}

// 두 번째 풀이 - 재귀를 배열로 변경(통과)
// 자바스크립트에서 런타임 에러는 재귀가 너무 깊어질 때 또는 메모리가 꽉 차서 발생한다.
function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);

    const GCD = (min, max) => max % min === 0 ? min : GCD(max % min, min);

    let ans = 0;
    let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

    for(let i = 1; i < arrayA.length; i++) {
        gcdA = GCD(gcdA, arrayA[i]);
        gcdB = GCD(gcdB, arrayB[i]);
    }

    if(arrayA.every(e => e % gcdB !== 0)) ans = Math.max(ans, gcdB);
    if(arrayB.every(e => e % gcdA !== 0)) ans = Math.max(ans, gcdA);
    // some을 사용할 수도 있음.
    // if(!arrayA.some(e => e % gcdb === 0)) ans = Math.max(ans, gcdb);
    // if(!arrayB.some(e => e % gcda === 0)) ans = Math.max(ans, gcda);

    return ans;
}
