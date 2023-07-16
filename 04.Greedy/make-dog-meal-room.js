// make-dog-meal-room.js
function solution(arr1, arr2) {
	const n = arr1.length;
	let rooms = 0;
	const endTimes = arr2.sort((a, b) => a - b);

	for (let i = 1; i < n; i++) {
		if (endTimes[i] === arr1[i]) {
			endTimes.unshift();
		} else {
			rooms++;
		}
	}

	return rooms;
}

let a = [1, 2, 3];
let b = [3, 4, 5];
console.log(solution(a, b)); // 2
