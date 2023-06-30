function solution(n) {
	if (n === 0) {
		return;
	}

	return n + solution(n - 1);
}

console.log(solution(10));
