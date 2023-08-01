function solution(k, r) {
	// 친구 수 K, 삭제 연산 횟수 m
	let m = r.length;
	let v = Array.from({ length: k + 1 }, (v, i) => i);

	let j = 0;
	while (m > 0) {
		let new_v = [0];
		for (let i = 1; i < v.length; i++) {
			if (i % r[j] !== 0) {
				new_v.push(v[i]);
			}
		}
		v = new_v;
		m -= 1;
		j += 1;
	}
	return v.length - 1;
}

console.log(solution(16, [2, 2, 2, 2])); // 1
console.log(solution(20, [3, 7])); // 11
