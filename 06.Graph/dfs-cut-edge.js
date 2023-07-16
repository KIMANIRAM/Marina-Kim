// 재귀함수 도중 조건을 만족하면 바로 종료시켜 전체 트리를 반복하지 않도록 하는 기법
// 출처: https://velog.io/@padd60/JS-%EC%BD%94%ED%85%8C-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98-%EB%B0%8F-DFS-%EC%A0%95%EB%A6%AC-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%9D%91%EC%9A%A9#%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0
function solution(m, arr) {
	let answer = Number.MAX_SAFE_INTEGER;
	let n = arr.length;
	function DFS(L, sum) {
		if (sum > m) return;
		if (L > answer) return;
		if (sum === m) {
			console.log(L, sum);
			answer = Math.min(answer, L);
		} else {
			for (let i = 0; i < n; i++) {
				DFS(L + 1, sum + arr[i]);
			}
		}
	}
	DFS(0, 0);
	return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
