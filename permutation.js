const n = [3,3,0,3];
const r = 3;

function getPermutations(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((item) => [item]);
    // fixed: 현재 값, index: 현재 인덱스, origin: 호출한 배열
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        console.log(fixed, rest, index);
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((item) => [fixed, ...item]);
        result.push(...attached);
    });

    return result;
}

console.log(getPermutations(n, r));