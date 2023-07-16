function solution(n) {
	const coins = [500, 100, 50, 10];
	let cnt = 0;
	let charge = n;

	// 1050 / 500 = 2,,,50
	for (let i = 0; i < coins.length; i++) {
		if (charge >= coins[i]) {
			cnt += parseInt(charge / coins[i]);
			charge %= coins[i];
		}
	}
	return cnt;
}

console.log(solution(870));
