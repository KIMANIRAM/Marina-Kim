// 1차 풀이
function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numberMap = numbers.reduce((acc, cur, idx) => {
        acc.set(cur, idx);
        return acc;
    }, new Map());

    let result = '';
    let temp = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] * 0 === 0) {
            result += s[i];
        } else {
            temp += s[i];
        }
        if(numberMap.has(temp)) {
            result += numberMap.get(temp);
            temp = '';
        }
    }

    return parseInt(result);
}

// 2차풀이 - String.split, join 함수 활용
function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = s;
    
    for(let i = 0; i < numbers.length; i++) {
        let temp = result.split(numbers[i]);
        console.log(temp)
        result = temp.join(i);
    }
    
    return Number(result);
}
