const n = [3,3,0,3];
const r = 2;

function getCombinations(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((item) => [item]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((item) => [fixed, ...item]);
        result.push(...attached);
    });

    return result;
}

console.log(getCombinations(n, r));