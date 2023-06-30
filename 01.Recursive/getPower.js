function solution(m, n, acc = 1) {
	if (n === 0) {
		return acc;
	}

	return m * solution(m, n - 1);
}

console.log(solution(2, 3));
console.log(solution(10, 3));
