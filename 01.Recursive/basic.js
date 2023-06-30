// 자바스크립트의 재귀함수
// 스택 오버플로우 주의!
// Error: Maximum call stack size exceeded...

// ex. 입력받은 배열에서 홀수만 골라 배열로 리턴하는 함수를 작성하시오.

// 변하는 값을 전역으로 -> X
// let result = [];
// const selectOdd = arr => { ... }

// 대신 클로저를 사용한다.
const selectOddByCloser = (arr) => {
	let result = [];

	const selectOddHelper = (helperInput) => {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		selectOddHelper(helperInput.slice(1)); // 1번 인덱스부터 끝까지 복사
	};

	selectOddHelper(arr);

	return result;
};

console.log(selectOddByCloser([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
