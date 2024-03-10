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
    let result = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < n; i++) {
        const parent = Array(n).fill(0);
        const findedParent = [];
        for(let i = 1; i <= n; i++) {
            parent[i] = i;
        }
        
        for(let j = 0; j < n; j++) {
            if(i === j) continue;
            const [a, b] = wires[i];
            unionParent(parent, a, b)
        }
        
        for(let j = 1; i < parent.length; i++) {
            findedParent.push(findParent(parent, i));
        }
        // [1,1,1,1,2,2,2] => {1: 4개, 2: 3개} => [4, 3]
        const counter = findedParent.reduce((map, root) => {
            map.set(root, (map.get(root) || 0) + 1);
            return map;
        }, new Map());
        
        const counterToArr = Array.from(counter).map(e => e[1]);
        const n1 = Math.max(...counterToArr);
        const n2 = n - n1;
        
        if(result > Math.abs(n1 - n2)) result = Math.abs(n1 - n2);
    }
    
    return result;
}
