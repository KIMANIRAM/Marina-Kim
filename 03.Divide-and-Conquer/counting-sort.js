// 계수정렬 -> 모든 데이터가 양수일 때만 사용 가능!
// 특정 조건에서는 씹사기 알고리즘이다.
// : 정렬해야 하는 데이터 개수가 매우 많으면서, 데이터의 차이가 백만 이하, 많이 중복될 때
// 시간복잡도: O(M + K), 데이터수: M, 최댓값: K

function countingSort(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let count = {};

	// min~max 사이의 모든 범위를 포함하는 배열 선언
	for (let i = min; i <= max; i++) {
		count[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		count[arr[i]] += 1; // 각 데이터에 해당하는 인덱스 값 증가
	}

	const sortedArr = [];
	for (let i = min; i < max; i++) {
		while (count[i] > 0) {
			// count의 원소가 0이 되면 정렬 멈춤
			sortedArr.push(i);
			count[i]--;
		}
	}

	return sortedArr;
}

const INPUT = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const OUTPUT = countingSort(INPUT);

console.log(OUTPUT); // [1, 2, 3, 6, 7, 9]
