function findParent(parent, x) {
    if(x === parent[x]) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
}

function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if(a < b) parent[b] = a;
    else parent[a] = b;
}

function solution(n, wires) {
    const wireLen = wires.length;
    const parentLen = n + 1;
    let result = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < wireLen; i++) {
        // i = 1부터 n까지 원소를 가지는 배열 초기화
        const parent = Array.from({length: parentLen}, (e, i) => i);
        
        for(let j = 0; j < wireLen; j++) {
            if(i === j) continue;
            const [a, b] = wires[j];
            unionParent(parent, a, b);
        }
        
        // rootCnt: 루트노드를 부모로 가지는 노드의 수 ex. [0,1,1,1,1,2,2,2] => 4개
        // 반대 그룹은 항상 전체 노드의 수(n)에서 rootCnt를 뺀 값 만큼 차이
        const rootCnt = parent.slice(1).filter(x => parent[1] === findParent(parent, x)).length;
        const restCnt = n - rootCnt;
        result = Math.min(result, Math.abs(rootCnt - restCnt))
    }
    
    return result;
}
