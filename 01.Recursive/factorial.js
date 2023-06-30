// 꼬리재귀
// : 내부적으로 재귀 함수를 반복문으로 변경되어 실행이 되고,
// 실제 스택도 여러 번 호출하는 것이 아닌 한번만 호출
// 그냥재귀 - 연산이 처리된 이후에 결과 값을 리턴
// 꼬리재귀 - 별도 연산 없이 결과값 6만 리턴
function solution(n, acc = 1) {
	if (n === 1) {
		return acc;
	}

	return solution(n - 1, acc * n);
}

console.log(solution(5));
