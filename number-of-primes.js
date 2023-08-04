function solution(n) {
	if (n === 1) return -1;

	let arr = Array.from({ length: n + 1 }, () => true);
	const primes = [];

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (arr[i] === true) {
			let j = 2;
			while (i * j <= n) {
				arr[i * j] = false;
				j += 1;
			}
		}
	}

	for (let i = 2; i <= arr.length; i++) {
		if (arr[i]) primes.push(i);
	}

	return primes;
}

console.log(solution(16)); // 2부터 16 사이에 있는 자연수 중 소수는?
