// 어떠한 위치 a의 약수 중 천만 이하, 그리고 자신을 제외한 가장 큰 약수
function getBlockNumber(idx) {
    if(idx === 1) return 0;
    let largestDivisor = 1;
    
    for(let i = 2; i <= Math.floor(Math.sqrt(idx)); i++) {
        if(idx % i === 0) {
            // 가장 큰 약수는 가장 처음 나온 (idx / i) 값, 이 값이 천만을 넘으면 후보에서 탈락. 그래서 그 다음 큰 수인 나누는 수 i가 들어감.
            if((idx / i) > 1e7) {
                largestDivisor = Math.max(largestDivisor, i);
                continue;
            } else {
                largestDivisor = Math.max(largestDivisor, (idx / i));
            }
            break;
        }
    }
    
    return largestDivisor;
}

function solution(begin, end) {
    const answer = [];
    
    for(let i = begin; i <= end; i++) {
        answer.push(getBlockNumber(i));
    }
    
    return answer;
}
