// node 연속부분최대합.js
// 연속된 부분을 선택했을 때, 그 최대 합을 구하라.
function solution(arr) {
	const n = arr.length;
	const d = []; // 연속된 부분의 맨 오른쪽이 arr[0]... arr[n] 일때의 최대 합
	d[0] = arr[0];

	for (let i = 1; i < n; i++) {
		// d[2] = d[1] + arr[2]
		d[i] = Math.max(0, d[i - 1]) + arr[i];
	}

	return Math.max(...d);
}

console.log(solution([-1, 5, 10, 4, -3, 7])); // 5
