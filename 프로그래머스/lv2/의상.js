// 짜잔! 사실은 수학문제였습니다! 해시문제라고 해시 딱 하나에만 꽂혀서 생각하지 말자.
// 만약 {상의: 1, 하의: 2, 신발: 3}이면 모든 의상을 조합하는 경우의 수는 (1 + 1) * (2 + 1) * (3 + 1) - 1이다.
// 각 의상 종류마다 1을 더해주는 이유는 그 의상 종류를 선택하지 않는 경우도 있기 때문이고
// 마지막에 1을 빼는 이유는 모든 의상 종류를 입지 않는 경우는 없기 때문이다.
function solution(clothes) {
	let total = 1;

	const map = clothes.reduce((acc, cur) => {
		acc.set(cur[1], (acc.get(cur[1]) || 0) + 1);
		return acc;
	}, new Map());

	for (let val of map.values()) {
		total *= val + 1;
	}

	return total - 1;
}
