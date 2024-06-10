function findParents(parents, x) {
    if(parents[x] === x) return parents[x];
    return (parents[x] = findParents(parents, parents[x]));
}

function unionParents(parents, a, b) {
    a = findParents(parents, a);
    b = findParents(parents, b);
    if(a < b) parents[b] = a;
    else parents[a] = b;
}

function solution(cards) {
    const result = [];
    const parents = Array.from({length: cards.length}, (_, i) => i);

    cards.forEach((e, i) => {
        const [a, b] = [i, e - 1];
        if(findParents(parents, a) === findParents(parents, b)) {
            const root = parents[i];
            result.push(parents.filter(p => findParents(parents, p) === root).length);
        } else {
            unionParents(parents, a, b);
        }
    });

    result.sort((a, b) => b - a);

    return result[0] === cards.length ? 0 : result[0] * result[1];
}
