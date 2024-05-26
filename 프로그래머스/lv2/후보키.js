// eg. [1,2]가 [1,2,3]의 부분집합인지 판단
function isSubset(subset, set) {
    return subset.every(e => set.includes(e));
}

function getCombinations(arr, selectN) {
    const result = [];
    if(selectN === 1) {
        return arr.map(e => [e]);
    }
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombinations(rest, selectN - 1);
        const attached = combinations.map(comb => [fixed, ...comb]);
        result.push(...attached);
    });
    return result;
}

function checkUniqueness(relation, combinations) {
    const result = [];
    const tupleCnt = relation.length;
    combinations.forEach(keys => {
        const set = new Set();
        relation.forEach(tuples => {
            set.add(keys.map(key => tuples[key]).join(','));
        });
        if(set.size === tupleCnt) {
            result.push(keys);
        }
    });
    return result;
}

function checkMinimality(combinations) {
    const result = [];
    while(combinations.length) {
        result.push(combinations[0]);
        combinations = combinations.reduce((arr, keys) => {
            if(isSubset(combinations[0], keys) === false) arr.push(keys);
            return arr;
        }, []);
    }
    return result;
}

function solution(relation) {
    const relIdxes = Array.from({ length: relation[0].length }, (_, i) => i);
    const combinations = [];

    for(let i = 0; i < relation.length; i++) {
        combinations.push(...getCombinations(relIdxes, i + 1));
    }

    const filteredUniqCombinations = checkUniqueness(relation, combinations);
    const result = checkMinimality(filteredUniqCombinations);

    return result.length;
}

// 두 번째 풀이 - 비트마스킹
function duplcateCheck(list, key) {
    let size = list.length;
    for(let i=0; i<size; ++i) {
        if((list[i] & key) == list[i]) return false;
    }
    list.push(key);
    return true;
}

function solution(relation) {
    let column = relation[0].length;
    let row = relation.length;
    let count = 0;
    let bitMaskList = [];
    for(let i = 1; i < (1 << column); ++i) {
        let keySet = new Set();
        for(let j = 0; j < row; ++j) {
            let key = "";
            for(let k = 0; k < column; ++k) {
                if((i & (1 << k)) != 0) key += relation[j][k];
            }
            keySet.add(key);
        }
        if(keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
    }

    return count;
}
