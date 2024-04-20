// 실패 - 메모리초과
function solution(n, k) {
    const visited = Array(n + 1).fill(0);
    const result = [];
    
    const backtracking = (arr) => {
        if(arr.length === n) {
            result.push(arr);
            return;
        }
        for(let i = 1; i <= n; i++) {
            if(!visited[i]) {
                visited[i] = 1;
                backtracking([...arr, i]);
                visited[i] = 0;
            }
        }
        return;
    }
    
    backtracking([], n);

    return result[k - 1];
}

// 통과 - 규칙을 찾아서 O(n!)을 O(n)으로 줄이기
// 문제의 이해 (순열)
// 첫번째 방법. 간단하게 생각하자면 재귀를 통해 length = n인 순열을 k개 구해서 return 하면 되지만 시간초과...
// 재귀로 시간을 줄이려고 많이 해봤는데 효율성은 통과하지 못했습니다.
// 1: [1, 2, 3], 2: [1, 3, 2], 3: [2, 1, 3], 4: [2, 3, 1], 5: [3, 1, 2]

// 두번째 방법. k번째를 이용해서 n!에서 k번째에 해당하는 숫자를 하나씩 찾아서 만들어준다. 
// 1. arr = [1, 2, 3], n = 3, k = 5 
// n = 3일 경우 3! = 6가지 경우의 수가 나오는데 (n - 1)! = 2개씩 앞자리 숫자가 변한다. 
// k = 1, 2는 [1, x, y], k = 3, 4는 [2, x, y], k = 5, 6은 [3, x, y]
// k = 5 이므로 3을 고정하고 k = 5, 6중에 첫번째 이므로 k = 1로 갱신.
// k = 1, result = [3]

// 2. arr = [1, 2], n = 2, k = 1
// 3을 제외하고 2! = 2가지 경우의 수에서 1!개씩 앞자리가 변한다
// k = 1은 [3, 1, x], k = 2는 [3, 2, x]
// k = 1 이므로 1을 고정하고 k = 1중에 첫번째 이므로 k = 1로 갱신.
// (원소가 1개 남은 상황이라 루프 종료하고 그냥 뒤에 붙여도 됩니다)
// k = 1, result = [3, 1]

// 3. arr = [2], n = 1, k = 1 => result = [3, 1, 2] 
// 위와 같이 반복

// nPr = n! / (n - r)!, nPn = n!
function factorial(x) {
    const dp = Array(x + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= x; i++) {
        dp[i] = i * dp[i - 1];
    }
    return dp;
}

function solution(n, k) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    const answer = [];
    const DP = factorial(n - 1);
    let order = k - 1;

    for(let i = 1; i <= n; i++) {
        const idx = ~~(order / DP[n - i]);
        const fixed = numbers[idx];
        answer.push(fixed);
        numbers.splice(idx, 1);
        order %= DP[n - i];
    }

    return answer;
}
