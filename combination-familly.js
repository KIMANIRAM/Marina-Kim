// 조합
function getCombinations(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr.map((e) => e); // 배열을 원한다면 [e]

	arr.forEach((fixed, idx, origin) => {
		const rest = origin.slice(idx + 1);
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map(e => fixed + e); // 배열을 원한다면 [fixed, ...e]
		result.push(...attached);
	});

	return result;
}
// 순열
function getPermutations(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr.map((e) => [e]);

	arr.forEach((fixed, idx, origin) => {
		const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map((subSet) => [fixed, ...subSet]);
		result.push(...attached);
	});

	return result;
}
// 중복조합
function getMultisets(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr;

	arr.forEach((fixed, idx, origin) => {
		const rest = origin;
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map((subSet) => fixed + subSet);
		result.push(...attached);
	});

	return result;
}
