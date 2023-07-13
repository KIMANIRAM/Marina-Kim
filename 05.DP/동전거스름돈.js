// node 동전거스름돈.js
// 거스름돈 n원을 최소한의 동전을 사용해서 거슬러주는 동전의 개수를 구하라.
function solution(arr, n) {
	const d = []; // idx와 원소에 어떤 걸 메모이제이션 할 것인가?
	d[0] = 0; // 0원을 만들기 위한 최소 동전의 개수는 0개.
	d[1] = 1; // 10원을 만들기 위한 최소 동전의 개수는 1개.

	for (let i = 2; i <= n; i++) {
		if (d[Number(n / 10)]) return d[d.length - 1];
		let coinIdx = 0;
		let compareTemp = [];
		let target = i * 10;
		while (arr[coinIdx] <= target && coinIdx < arr.length) {
			temp = target - arr[coinIdx];
			compareTemp.push(d[Number(temp / 10)] + 1);
			coinIdx++;
		}
		d[i] = Math.min(...compareTemp);
	}

	return d[d.length - 1];
}

const coins = [10, 360, 400, 430];
const input = 760;
console.log(solution(coins, input)); // 2;
