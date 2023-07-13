// node 최적하위구조.js
// 1부터 n까지의 합 DP로 풀어보기
function solution(n) {
	const d = [];
	d[0] = 0;

	for (let i = 1; i <= n; i++) {
		d[i] = d[i - 1] + i;
	}

	return d[n];
}

console.log(solution(1000));
