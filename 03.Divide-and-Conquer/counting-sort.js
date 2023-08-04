// 계수정렬 -> 모든 데이터가 양수일 때만 사용 가능!
// 특정 조건에서는 씹사기 알고리즘이다.
// : 정렬해야 하는 데이터 개수가 매우 많으면서, 데이터의 차이가 백만 이하, 많이 중복될 때
// 시간복잡도: O(M + K), 데이터수: M, 최댓값: K

function solution(arr) {
	const max = Math.max(...arr);
	const count = Array(max + 1).fill(0);
	let sorted = '';

	arr.forEach((num) => (count[num] += 1));

	for (let num = 0; num < count.length; num++) {
		sorted += num.toString().repeat(count[num]);
	}

	return [...sorted];
}

console.log(solution([7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2])); 
// [
//   '0', '0', '1', '1',
//   '2', '2', '3', '4',
//   '5', '5', '6', '7',
//   '8', '9', '9'
// ]
