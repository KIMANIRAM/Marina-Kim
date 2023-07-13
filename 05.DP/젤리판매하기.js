// node 젤리판매하기.js
// 젤리의 길이 n과 젤리 길이에 따른 가격표가 주어질 때 이익을 최대화 하여라.
function solution(units, prices) {
	const d = []; // 젤리 길이에 따른 최대이익을 담는 DP table
	d[0] = 0;
	d[1] = prices[0];

	for (let i = 2; i <= units; i++) {
		let temp = [];

		for (let j = 1; j <= Math.sqrt(i); j++) {
			temp.push(d[i - j] + d[i - (i - j)]);
		}

		d[i] = Math.max(...temp, prices[i - 1]);
	}
	console.log(d);
	return d[units];
}

const n = 4;
const prices = [1, 5, 8, 9, 10, 17, 17, 20];

console.log(solution(n, prices));
