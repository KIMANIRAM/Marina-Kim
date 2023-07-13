// node 경로구하기.js
// M*N 칸의 방이 있는 집에서 시작부터 끝까지 갈 수 있는 모든 경로의 수를 구하여라.
// 단, 이동은 아래 혹은 오른쪽으로만 가능하다.
function solution(m, n) {
	const d = Array.from(new Array(m), () => new Array(n).fill(0)); //
	for (let i = 0; i < m; i++) {
		d[i][0] = 1;
	}

	for (let i = 0; i < n; i++) {
		d[0][i] = 1;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			d[i][j] = d[i][j - 1] + d[i - 1][j];
		}
	}
	console.log(d);
	return d[m - 1][n - 1];
}

// console.log(solution(2, 2)); // 2
console.log(solution(4, 4)); // 20
