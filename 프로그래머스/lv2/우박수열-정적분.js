function getCollatz(kArr) {
    if(kArr[kArr.length - 1] === 1) return kArr;
    if(kArr[kArr.length - 1] % 2 === 0) return getCollatz([...kArr, kArr[kArr.length - 1] / 2]);
    return getCollatz([...kArr, kArr[kArr.length - 1] * 3 + 1]);
}

function getSize(s) {
    const result = [];
    for(let i = 0; i < s.length - 1; i++) {
        result.push(Math.min(s[i], s[i + 1]) + Math.abs(s[i + 1] - s[i]) * 0.5);
    }
    return result;
}

function getPrefixSum(integrals) {
    let sum = 0;
    const result = [0];
    for(let i = 0; i < integrals.length; i++) {
        sum += integrals[i];
        result.push(sum);
    }
    return result;
}

function solution(k, ranges) {
    // 1. sequence 배열 구하기, [5, 16, 8, 4, 2, 1]
    const sequence = getCollatz([k]);
    // console.log(sequence)
    // 2. 정적분 크기 배열 integrals구하기, [10.5, 12.0, 6.0, 3.0, 1.5]
    const integrals = getSize(sequence);
    // console.log(integrals)
    // 3. prefixSum 배열 구하기
    const prefixSum = getPrefixSum(integrals);
    // 4. 쿼리에 맞는 구간합을 구하기, p[right] - [left - 1]
    console.log(prefixSum)
    const result = ranges.map(query => {
        // console.log(query)
        const [left, right] = [query[0], prefixSum.length + query[1] - 1];
        // console.log(left, right, prefixSum[right] - prefixSum[left])
        if(left === right) return (0).toFixed(1);
        if(left > right) return (-1).toFixed(1);
        return (prefixSum[right] - prefixSum[left]).toFixed(1);
    });
    
    return result;
}
