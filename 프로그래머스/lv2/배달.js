class PQ {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(data) {
        this.heap.push(data);
        let i = this.heap.length - 1;
        
        while(i > 0) {
            const p = ~~((i - 1) / 2);
            if(this.heap[p] <= this.heap[i]) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    } 
    
    pop() {
        if(this.isEmpty()) return;
        const val = this.peek();
        
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.pop();
        this._minHeapify();
        
        return val;
    }
    
    _minHeapify() {
        const x = this.peek();
        const n = this.heap.length;
        let i = 0;
        
        while(i * 2 + 1 < n) {
            const left = i * 2 + 1;
            const right = left + 1;
            const smaller = right < n && this.heap[right] < this.heap[left] ? right : left;
            if(this.heap[smaller] < x) {
                [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
                i = smaller;
            } else break;
        }
    }
}

function solution(N, road, K) {
    const d = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const graph = Array.from(Array(N + 1), () => []);
    
    for(const value of road) {
        const [a, b, c] = value;
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }

    const dijkstra = (start) => {
        const pq = new PQ();
        pq.push([0, start]);
        d[start] = 0;
        
        while(!pq.isEmpty()) {
            const [dist, cur] = pq.pop();

            if(d[cur] < dist) continue;
            
            for(const i of graph[cur]) {
                const node = i[0];
                const cost = dist + i[1];
                if(cost < d[node]) {
                    pq.push([cost, node]);
                    d[node] = cost;
                }
            }
        }
    };
    
    dijkstra(1);

    return d.filter(dist => dist <= K).length;
}
