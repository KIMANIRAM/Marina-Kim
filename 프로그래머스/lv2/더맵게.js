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
			let parent = ~~((i - 1) / 2);
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
		let x = this.peek();
		let n = this.heap.length;
		let cur = 0;

		while (2 * cur + 1 < n) {
			let leftChild = 2 * cur + 1;
			let rightChild = leftChild + 1;
			let smallerChild = rightChild < n && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;

			if (x > this.heap[smallerChild]) {
				[this.heap[cur], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[cur]];
				cur = smallerChild;
			} else break;
		}
	}
}

function solution(scoville, k) {
	const n = scoville.length;
	const pq = new PriorityQueue();
	let count = 0;

	for (const val of scoville) {
		pq.push(val);
	}
	if (pq.peek() >= k) return 0;

	// 음식 섞기
	const mix = (pq) => {
		let a = pq.pop();
		let b = pq.pop();
		let scov = a + b * 2;
		pq.push(scov);
	};

	while (count < n) {
		mix(pq);
		count++;
		// 스코빌지수 검사
		let min = pq.peek();

		// 모든 원소의 값이 k 이상이면 섞은 횟수를 리턴, 아니면 다시 음식을 섞음
		if (min >= k) {
			return count;
		}
	}

	return -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
console.log(solution([1, 1, 1, 1, 1], 21)); // -1
console.log(solution([1, 1, 2, 6], 1)); // 0
console.log(solution([1, 1, 2, 6], 2)); // 1
console.log(solution([1, 1, 2, 6], 6)); // 2
console.log(solution([1, 1, 2, 6], 8)); // 3
console.log(solution([1, 1, 2, 6], 30)); // -1
