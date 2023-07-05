const clothes = [
	['캉골버킷햇', '모자'],
	['젠틀몬스터', '얼굴'],
	['에어포스1', '신발'],
	['톰포드', '얼굴'],
	['폴로볼캡', '모자'],
	['y3', '신발'],
	['구찌', '얼굴'],
];

function getCombinations(arr, selected) {
	const result = [];
	if (selected === 1) {
		return arr.map((el) => [el]);
	}

	arr.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1);
		const combinations = getCombinations(rest, selected - 1);
		const attached = combinations.map((el) => [fixed, ...el]);
		result.push(...attached);
	});

	return result;
}

function solution(clothes) {
	const arr = [];
	const totalSum = [];
	const map = clothes.reduce((acc, cur) => {
		acc.set(cur[1], (acc.get(cur[1]) || 0) + 1);
		return acc;
	}, new Map());
	console.log(map);
	map.forEach((value, key) => {
		arr.push(key);
	});
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		const combinations = getCombinations(arr, i + 1);
		console.log(combinations);
		for (let j = 0; j < combinations.length; j++) {
			let temp = 1;
			for (let k = 0; k < combinations[j].length; k++) {
				const quantity = map.get(combinations[j][k]);
				temp *= quantity;
			}
			totalSum.push(temp);
		}
	}

	const grandTotal = totalSum.reduce((acc, cur) => acc + cur);

	return grandTotal;
}

console.log(solution(clothes));
