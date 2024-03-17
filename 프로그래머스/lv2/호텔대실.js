class Heap {
	constructor() {
		this.heap = [];
	}
    
    size() {
        return this.heap.length;
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

function solution(book_time) {
    const pq = new Heap();
    const hhmmToM = (hhmm) => {
        const [hh, mm] = hhmm.split(':');
        return (+hh) * 60 + (+mm);
    };
    const book_minutes = book_time.map(([start, end]) => [hhmmToM(start), hhmmToM(end) + 10]);
    
    book_minutes.sort(([s1, e1], [s2, e2]) => s1 - s2);

    // 제일 작은 end이 현재 start보다 작거나 같으면 체인지, 아니면 push
    for(let i = 0; i < book_minutes.length; i++) {
        if(!pq.empty() && (pq.peek() <= book_minutes[i][0])) {
            pq.pop();
        } 
        pq.push(book_minutes[i][1]);
    }
    
    return pq.size();
}
