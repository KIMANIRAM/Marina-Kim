// 퀵 정렬과는 달리, 데이터가 거의 정렬되었을 때 적합하다.
// 시간복잡도: O(n * log(n))
// 원본 배열을 슥스슥슥 나눈다 -> 정렬 -> 정렬된 2개로 다시 정렬 -> ...

// 왼쪽 배열과 오른쪽 배열을 비교하며 정렬 후 새로운 배열을 리턴하는 함수
function merge(left, right) {
	let sortedArr = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
	}

	//left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
	return [...sortedArr, ...left, ...right];
}

// 입력 배열을 배/열로 나누는 함수
function mergeSort(arr) {
	// 종료조건은 재귀 가장 하층에서 실행된다. 이걸 리턴하고나서부터 재귀의 상위로 올라간다.
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);

	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

const INPUT = [7, 4, 3, 2, 1, 6, 5];

const OUTPUT = mergeSort(INPUT);

console.log(OUTPUT); // [1, 2, 3, 6, 7, 9]
