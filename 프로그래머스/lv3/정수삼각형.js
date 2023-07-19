function solution(triangle) {
	const n = triangle.length;
	let d = triangle;

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i + 1; j++) {
			if (j === 0) {
				// 현재 위치가 가장 왼쪽일 경우
				d[i][j] += d[i - 1][j];
			} else if (j === i) {
				// 현재 위치가 가장 오른쪽 일 경우
				d[i][j] += d[i - 1][j - 1];
			} else {
				// 그외 나머지
				d[i][j] += Math.max(d[i - 1][j], d[i - 1][j - 1]);
			}
		}
	}

	return Math.max(...d[n - 1]);
}

let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
const OUTPUT = solution(triangle);

console.log(OUTPUT); // 30
