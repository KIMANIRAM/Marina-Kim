const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (x) {
  if (!x) {
    r1.close();
  } else {
    input.push(x);
  }
}).on('close', function () {
  const [nm, ...rest] = input;
  const [n, m] = nm.split(' ').map(v => v * 1);
  const arr = rest.map(str => str.split(' ').map(v => v * 1));

  console.log(solution(n, m, arr));

  process.exit();
});

const findParent = (parent, x) => {
  if (parent[x] === x) return parent[x];
  return (parent[x] = findParent(parent, parent[x]));
};

const unionParent = (nodeCount, parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
  // b노드와 연결된 노드의 개수를 a에 누적해서 더함.
  nodeCount[a] += nodeCount[b];
};

function solution(n, m, arr) {
  const edges = [];
  let parent = Array(n + 1).fill(0);
  // 본인과 연결되어있는 자식노드의 개수(본인 포함)
  let nodeCount = Array(n + 1).fill(1);
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }

  for (const value of arr) {
    const [u, v, cost] = value;
    edges.push([cost, u, v]);
  }

  edges.sort((a, b) => a[0] - b[0]);

  for (const edge of edges) {
    const [cost, a, b] = edge;
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(nodeCount, parent, a, b);
      answer += cost;
    }
  }

  // console.log(parent.slice(1));
  // 합치기를 완료했을때 최상단 노드와 연결된 자식노드 개수는 n과 일치함.
  // n보다 작다면 포함되지 않는 노드가 있다는 의미. (모두 연결되지 않았음)
  // console.log(nodeCount.slice(1));

  return nodeCount.includes(n) ? answer : -1;
}
