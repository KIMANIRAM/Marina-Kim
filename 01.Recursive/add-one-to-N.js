function solution(n) {
	// 2. 탈출조건 표시하기
	if (n === 1) {
		return 1;
	}

	// 1. 처리해야하는 핵심 문제상황 나타내기
	return n + solution(n - 1);
}

console.log(solution(10));
