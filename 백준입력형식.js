/* 입력 예시:
5
5 50 50 70 80 90
7 100 95 90 80 70 60 50
3 70 90 80
3 79 90 81
9 100 99 98 97 96 95 94 93 92 91
*/

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();
// let input = fs.readFileSync("/dev/stdin").toString();
input = input.split('\n');

const inputCount = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputCount; i++) {
	const arr = input[i].split(' ').map((v) => +v);
	let newArr = [];
	for (let j = 1; j < arr.length; j++) {
		newArr.push(arr[j]);
	}
	const testCase = {
		N: arr[0],
		arr: newArr,
	};
	inputTestCase.push(testCase);
}

solution(inputCount, inputTestCase);

function solution(count, inputTestCase) {
	// 정답 출력
	for (const testCase of inputTestCase) {
		// console.log(testCase);
		for (const [key, value] of Object.entries(testCase)) {
			console.log(`${key}: ${value}`);
		}
	}
}

/* 출력 예시: 
N: 5
arr: 50,50,70,80,90
N: 7
arr: 100,95,90,80,70,60,50
N: 3
arr: 70,90,80
N: 3
arr: 79,90,81
N: 9
arr: 100,99,98,97,96,95,94,93,92,91
*/
