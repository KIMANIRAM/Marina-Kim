function getCombinations(arr, selected) {
	const results = [];
	if (selected === 1) {
		return arr.map((element) => [element]);
	}

	// 각각 원소, 인덱스, 원래 배열
	arr.forEach((fixed, index, origin) => {
		// 해당하는 fixed를 제외한 나머지를 구한다.
		const rests = origin.slice(index + 1);

		// 나머지에 대한 조합을 구한다.
		const combinations = getCombinations(rests, selected - 1);

		// 이 조합에 떼 놓은(fixed) 값을 붙인다.
		const attached = combinations.map((element) => [fixed, ...element]);

		// 배열 spread syntax 로 모두다 push한다.
		results.push(...attached);
	});

	return results; // 결과가 담긴 배열을 return한다.
}

const arr = ['A', 'B', 'A'];

for (let i = 0; i < arr.length; i++) {
	console.log(`-----${arr.length}개 중에서 ${i + 1}개 뽑는 경우-----`);

	const result = getCombinations(arr, i + 1); // 4Ci

	console.log(result);
}
