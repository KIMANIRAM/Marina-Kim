// 수학 유형의 문제. 경우의 수를 1부터 나열해서 규칙을 찾아서 풀어본다.
function solution(w, h) {
    const getGCD = (min, max) => max % min === 0 ? min : getGCD(max % min, min);
    
    const squaresInCrossArea = (min, max) => {
        const gcd = getGCD(min, max);
        // console.log(min, max, gcd, Math.floor(min / gcd) + Math.floor(max / gcd) - 1)
        return (Math.floor(min / gcd) + Math.floor(max / gcd) - 1) * gcd;
    }
    
    return w * h - squaresInCrossArea(Math.min(w, h), Math.max(w, h));
}
