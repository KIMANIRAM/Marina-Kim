// 시간복잡도: O(n * log(n))
// 데이터가 거의 정렬되었을 때 사용하면 최악!

function solution(array) {
	// 리스트가 하나(이하의)만 담고 있으면 정렬 종료
	if (array.length <= 1) {
		return array;
	}

	let pivot = array[0]; // 피벗은 첫 번째 원소
	let lefts = []; // 분할된 왼쪽 부분(피봇보다 작아야 함)
	let rights = []; // 분할된 오른쪽 부분(피봇보다 커야 함)

	for (let i = 1; i < array.length; i++) {
		if (array[i] < pivot) {
			lefts.push(array[i]); // 피봇보다 작은 값을 찾았으면 왼쪽배열에 담음
		} else {
			rights.push(array[i]); // 피봇보다 큰 값을 찾았으면 오른쪽배열에 담음
		}
	}

	// 한 파트가 끝날 때마다 [왼쪽배열] + 피봇 + [오른쪽정렬] 형태가 만들어짐.
	return [...solution(lefts), pivot, ...solution(rights)];
}

const INPUT = [1, 2, 3, 9, 7, 6];

const OUTPUT = solution(INPUT);

console.log(OUTPUT); // [1, 2, 3, 6, 7, 9]
