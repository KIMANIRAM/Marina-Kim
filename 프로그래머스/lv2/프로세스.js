class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        if(this.storage[this.rear] === undefined) return 0;
        return this.rear - this.front + 1;
    }
    
    peek() {
        if(this.size() === 0) return;
        return this.storage[this.front];
    }
    
    enqueue(data) {
        if(this.size() === 0) {
            this.storage['0'] = data;
        } else {
            this.rear += 1;
            this.storage[this.rear] = data;
        }
    }
    
    dequeue() {
        if(this.size() === 0) return;
        
        let value = 0;
        if(this.front === this.rear) {
            value = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            value = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return value;
    }
}

// 최대 힙
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    empty() {
        return this.heap.legnth === 0;
    }
    
    peek() {
        if(this.empty()) return;
        return this.heap[0];
    }
    
    enqueue(data) {
        this.heap.push(data);
        let i = this.heap.length - 1;
        
        while(i > 0) {
            const parent = ~~((i - 1) / 2);
            if(this.heap[parent] >= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    
    dequeue() {
        if(this.empty()) return;
        
        const value = this.peek();
        
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.pop();
        this._max_heapify();
        
        return value;
    }
    
    _max_heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;
        
        while(2 * cur + 1 < n) {
            const left = 2 * cur + 1;
            const right = left + 1;
            const bigger = right < n && this.heap[right] > this.heap[left] ? right : left;
            
            if(x < this.heap[bigger]) {
                [this.heap[cur], this.heap[bigger]] = [this.heap[bigger], this.heap[cur]];
                cur = bigger;
            } else break;
        }
    }
}

function solution(priorities, location) {
    let answer = 1;
    let pq = new PriorityQueue();
    let q = new Queue(); 
    
    // 큐, 힙 삽입 - [우선순위, 인덱스]
    for(const idx in priorities) {
        pq.enqueue([priorities[idx], +idx]);
        q.enqueue([priorities[idx], +idx]);
    }

    // 큐, 힙 삭제
    while(q.size()) {
        const val = q.dequeue();
        const max = pq.peek();
        
        if(val[0] < max[0]) {
            q.enqueue(val)
        } else {
            pq.dequeue();
            if(val[1] === location) {
                break;  
            } else {
                answer += 1;
            }
        }
    }

    return answer; 
}
