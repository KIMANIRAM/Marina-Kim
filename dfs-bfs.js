const graph = {
  1: [2, 3, 8],
  2: [1, 7],
  3: [1, 4],
  4: [3, 5],
  5: [3, 4],
  6: [7],
  7: [2, 6, 8],
  8: [1, 7],
};

const DFS = (v, visited = new Set()) => {
  if(visited.has(v)) return;
  visited.add(v);
  console.log(v);
  graph[v].forEach(node => DFS(node, visited));
};

const BFS = (v, visited = new Set()) => {
  const q = Queue();
  q.enqueue(v);
  visited.add(v);
  
  while(q.size()) {
    const cur = q.dequeue();
    console.log(cur);
    
    graph[cur].forEach(node => {
      if(!visited.has(node)) {
        q.enqueue(node);
        visited.add(node);
      }
    })
  }
}

function Queue() {
  let _storage = {};
  let [_front, _rear] = [0, 0];
  
  const size = () => _storage[_rear] === undefined ? 0 : _rear - _front + 1;
 
  const print = () => {
    for (const property in _storage) {
      console.log(`${property}: ${_storage[property]}`);
    }
  };
  
  const enqueue = (value) => {
    if(size() === 0) {
      _storage['0'] = value;
    } else {
      _rear += 1;
      _storage[_rear] = value;
    }
  };
  
  const dequeue = () => {
    let temp;
    
    if(_front === _rear) {
      temp = _storage[_front];
      delete _storage[_front];
      [_front, _rear] = [0, 0];
    } else {
      temp = _storage[_front];
      delete _storage[_front];
      _front += 1;
    }
    
    return temp;
  }
  
  return {
    size: size,
    print: print,
    enqueue: enqueue,
    dequeue: dequeue,
  }
}

console.log('-----DFS-----')
DFS(1);
console.log('-----BFS-----')
BFS(1);
/*
"-----DFS-----"
1
2
7
6
8
3
4
5
"-----BFS-----"
1
2
3
8
7
4
6
5
*/
