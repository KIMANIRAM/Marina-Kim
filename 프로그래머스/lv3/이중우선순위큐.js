class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    empty() {
        return this.heap.length === 0;
    }

    peek() {
        if(this.empty()) return 0;
        return this.heap[0];
    }

    push(data) {
        this.heap.push(data);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = ~~((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    pop(data) {
        if (this.empty()) return;

        let value = 0;
        if(data < 0) {
            value = this.peek();
            [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        } else {
            const maxIdx = this.findMaxIdx();
            value = this.heap[maxIdx];
            [this.heap[maxIdx], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[maxIdx]];
        }

        this.heap.pop();
        this._heapify();

        return value;
    }

    findMaxIdx() {
        // leafNodes: 가장 마지막 index의 부모노드 + 1 부터 마지막 노드까지
        if(this.heap.length === 1) return 0;

        const n = this.heap.length - 1;
        const parent = ~~((n - 1) / 2);
        const leafNodes = this.heap.slice(parent + 1);
        const maxValue = Math.max(...leafNodes);

        return this.heap.findIndex(v => v === maxValue);
    }

    findMaxValue() {
        if(this.empty()) return 0;
        if(this.heap.length === 1) return this.peek();

        const n = this.heap.length - 1;
        const parent = ~~((n - 1) / 2);
        const leafNodes = this.heap.slice(parent + 1);
        const maxValue = Math.max(...leafNodes);

        return maxValue;
    }

    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;

        while (2 * cur + 1 < n) {
            const leftChild = 2 * cur + 1;
            const rightChild = leftChild + 1;
            const smallerChild = rightChild < n && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;

            if (x > this.heap[smallerChild]) {
                [this.heap[cur], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[cur]];
                cur = smallerChild;
            } else {
                break;
            }
        }
    }
}

function solution(operations) {
    const pq = new PriorityQueue();

    for(const oper of operations) {
        const data = oper.substring(2) * 1;
        if(oper[0] === 'I') {
            pq.push(data);
        } else {
            pq.pop(data);
        }
    }

    return [pq.findMaxValue(), pq.peek()];
}
