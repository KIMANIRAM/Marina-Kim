/*
** 짝수인 경우 현재 이진수의 가장 오른쪽 비트를 1로 바꿔주면 되고,
** 홀수인 경우 오른쪽 비트에서 왼쪽 비트로 이동하면서 0인 비트를 1로 바꿔주고,
** 그 비트의 바로 우측 비트를 0으로 바꿔준다.
*/
function solution(numbers) {
    const MAX_BIT_LEN = Math.pow(10, 15).toString(2).length;
    const findBit = (x) => {
        const bin = [...x.padStart(MAX_BIT_LEN, '0')]; 
        const idx = bin.lastIndexOf('0');
        bin.splice(idx, 1, '1');
        bin.splice(idx + 1, 1, '0');
        return parseInt(bin.join(''), 2);
    };
    
    return numbers.map(n => n % 2 === 0 ? n + 1 : findBit(n.toString(2)));
}
