// 이진탐색
// 데이터가 이미 정렬이 되어있어야 가능!!
// 시간복잡도: O(N)
// 탐색 범위가 천만단위라면 아묻따 이진탐색 사용하자

function binarySearch(arr, target, start, end) {
	if (start > end) {
		return 'none'; // 못 찾을 경우
	}

	let mid = parseInt((start + end) / 2);

	if (arr[mid] === target) {
		return mid; // 찾을 경우
	} else if (target < arr[mid]) {
		// 타겟이 배열의 중간값보다 작다면
		return binarySearch(arr, target, start, mid - 1); // 중간값보다 큰 원소는 볼 필요도 없음
	} else {
		// 타겟이 배열의 중간값보다 크다면
		return binarySearch(arr, target, mid + 1, end); // 중간값보다 작은 원소는 볼 필요도 없음
	}
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

const OUTPUT = binarySearch(arr, x, 0, arr.length - 1);

if (OUTPUT === 'none') {
	console.log('원소가 존재하지 않습니다.');
} else {
	console.log(`원소 ${x}는 ${OUTPUT + 1}번째에 있습니다.`);
}
