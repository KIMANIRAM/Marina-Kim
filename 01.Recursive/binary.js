function solution(n, acc = '') {
	let binary = '';

	if (n === 0) {
		return acc;
	}
	binary = String(n % 2);
	return solution(Math.floor(n / 2), acc + binary);
}

console.log(solution(19));
// s(0, '11001')
// s(1, '1100')
// s(2, '110')
// s(4, '11')
// s(9, '1')
// s(19, '')
