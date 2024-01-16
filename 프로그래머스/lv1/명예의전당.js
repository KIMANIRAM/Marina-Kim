class Heap {
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

		while (i > 0) {
			const parent = ~~((i - 1) / 2);
			if (this.heap[parent] <= this.heap[i]) break;
			[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
			i = parent;
		}
	}

	pop() {
		if (this.empty()) return;

		const value = this.peek();
		[this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
		this.heap.pop();
		this._heapify();

		return value;
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

function solution(k, score) {
    const day = score.length;
    const heap = new Heap(); 
    const result = [];

    for(let i = 0; i < day; i++) {
        if(i < k) {
            heap.push(score[i]);
        } else {
            const min = heap.peek();
            if(score[i] > min) {
                heap.pop();
                heap.push(score[i]);
            }
        }
        result.push(heap.peek());
    }
    
    return result;
}
