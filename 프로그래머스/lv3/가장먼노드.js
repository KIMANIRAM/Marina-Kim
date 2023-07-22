class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    empty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(data) {
        this.heap.push(data);
        let i = this.heap.length - 1;

        while(i > 0) {
            const parent = ~~((i - 1) / 2);
            if(this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    pop() {
        if(this.empty()) return;

        const value = this.peek();

        [this.heap[0], this.heap[this.heap.length - 1]] = [
            this.heap[this.heap.length - 1],
            this.heap[0]
        ]
        this.heap.pop();
        this._heapify();

        return value;
    }

    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;

        while(2 * cur + 1 < n) {
            let left = 2 * cur + 1;
            let right = left + 1;
            let smaller = right < n &&
                this.heap[right] < this.heap[left] ? right : left;

            if(x > this.heap[smaller]) {
                [this.heap[cur], this.heap[smaller]] =
                    [this.heap[smaller], this.heap[cur]];
                cur = smaller;
            } else {
                break;
            }
        }
    }
}

function solution(n, edge) {
    let cnt = 0;
    let max = 0;
    let d = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    const graph = Array.from(Array(n + 1), () => []);

    for(const nodes of edge) {
        const [a, b] = nodes;
        graph[a].push([b, 1]);
        graph[b].push([a, 1]);
    }

    const dijkstra = (start) => {
        const pq = new PriorityQueue();
        pq.push([0, start]);
        d[1] = 0;

        while(!pq.empty()) {
            const [dist, cur] = pq.pop();

            if(d[cur] < dist) continue;

            for(const i of graph[cur]) {
                const node = i[0];
                const cost = dist + i[1];
                if(cost < d[node]) {
                    pq.push([cost, node]);
                    d[node] = cost;
                    max = Math.max(max, cost);
                }
            }
        }
    }

    dijkstra(1);

    for(let i = 1; i <= n; i++) {
        if(d[i] === max) {
            cnt++;
        }
    }

    return cnt;
}
