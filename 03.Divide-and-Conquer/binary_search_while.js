function binary_search(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

const INPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const OUTPUT = binary_search(INPUT, 8);

console.log(OUTPUT); // 7
