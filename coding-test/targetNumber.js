<<<<<<< HEAD


function solution(numbers, target) {
    let count = 0;
    
    const dfs = (idx, sum) => {
        // 만약 numbers.length에 도달하면 멈춘다.
        if(idx === numbers.length) {
            // 만약 numbers.length에 도달하고 sum과 target과 일치한다면
            if(sum === target) {
                // count를 증가시킨다.
                count++;
            }
            return;    
        }
        // 계속 더하거나 빼서 sum을 구한다.
        // sum = sum + numbers[idx]
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }
    // idx와 sum의 초깃값은 0.
    dfs(0, 0);

    return count;
}

// 테스트케이스
// return: 5
console.log(solution([1, 1, 1, 1, 1], 3));
// return: 2
console.log(solution([4, 1, 2, 1], 4));
// return: 1
console.log(solution([1, 2, 3], 2));
=======
class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if (this.store[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }

    push(value) {
        if (this.size() === 0) {
            this.store[0] = value;
        } else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }

    popleft() {
        let temp;
        if (this.front === this.rear) {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
        }
        return temp;
    }
}

function bfs(graph, start, visited) {
    const queue = new Queue();
    queue.push(start);
    visited[start] = true;
    while(queue.size()) {
        let v = queue.popleft();
        console.log(v);
        for(let i of graph[v]) {
            if(!visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
}

function dfs(graph, v, visited) {
    visited[v] = true;
    console.log(v);
    for(let i of graph[v]) {
        if(!visited[i]) {
            dfs(graph, i, visited)
        }
    }
}

const visited = Array(9).fill(false);

const graph = [];

dfs(graph, 1, visited);
>>>>>>> 29f55421151f31f70a8b75cfa497d0d96cf7c4b2
