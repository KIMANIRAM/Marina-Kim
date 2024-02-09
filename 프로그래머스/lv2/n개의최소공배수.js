function solution(arr) {
    arr.sort((a, b) => a - b);
    
    const GCD = (min, max) => max % min === 0 ? min : GCD(max % min, min);
    const LCM = (min, max) => min * max / GCD(min, max);
    
    let temp = arr[0];
    
    for(let i = 0; i < arr.length - 1; i++) {
        temp = LCM(temp, arr[i + 1]);
    }
    
    return temp;
}
