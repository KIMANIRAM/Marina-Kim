

function solution(numbers, target) {
    let count = 0;
    
    const dfs = (idx, sum) => {
        // 만약 numbers.length에 도달하면 멈춘다.
        if(idx === numbers.length) {
            // 만약 numbers.length에 도달하고 sum과 target과 일치한다면
            if(sum === target) {
                // count를 증가시킨다.
                count++;
            }
            return;    
        }
        // 계속 더하거나 빼서 sum을 구한다.
        // sum = sum + numbers[idx]
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }
    // idx와 sum의 초깃값은 0.
    dfs(0, 0);

    return count;
}

// 테스트케이스
// return: 5
console.log(solution([1, 1, 1, 1, 1], 3));
// return: 2
console.log(solution([4, 1, 2, 1], 4));
// return: 1
console.log(solution([1, 2, 3], 2));