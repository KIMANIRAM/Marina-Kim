function findParent(parent, x) {
    if(parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
}

function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if(a < b) parent[b] = a;
    else parent[a] = b;
}

function solution(n, computers) {
    let answer = n;
    let parent = Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        parent[i] = i;
    }

    for(let i = 0; i < computers.length; i++) {
        for(let j = i + 1; j < computers[i].length; j++) {
            if(computers[i][j] === 0) {
                continue;
            }
            //console.log(`${i + 1}과 ${j + 1}은 서로 연결`);
            if(findParent(parent, i) !== findParent(parent, j)) {
                unionParent(parent, i, j);
                answer--;
            }
        }
    }

    return answer;
}
