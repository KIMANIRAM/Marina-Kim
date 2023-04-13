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