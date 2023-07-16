// node dijkstra.js

const txt = `
  8 11 0 6
  0 1 3
  0 5 1
  1 2 4
  1 3 1
  1 5 1
  2 4 6
  2 6 9
  2 7 4
  3 4 2
  4 6 9
  6 7 3
`;

// Number.MAX_SAFE_INTEGER
// PriorityQueue.pop(): 방문하지 않은 노드에서 최단 거리가 가장 짧은 노드의 인덱스 반환

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
