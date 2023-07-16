// priority queue (min heap)
class PriorityQueue {
	// constructor(): 힙 객체를 만듦과 동시에 초기화
	constructor() {
		this.heap = [];
	}

	// empty(): 힙이 비어있는지 true/false 값을 리턴.
	empty() {
		return this.heap.length === 0;
	}

	// peek(): 힙 가장 위에 있는 데이터(우선순위가 가장 작은 데이터)를 가져옴
	peek() {
		return this.heap[0];
	}

	// push(data): 힙에 데이터를 저장 + '자식은 반드시 부모보다 커야 함'
	push(data) {
		// 일단 가장 뒤에 저장해놓고
		this.heap.push(data);
		// i <- 힙 맨 뒤에 있는 데이터의 인덱스
		// while: 힙 맨 뒤에 있는 데이터와 그 부모.. 점점 루트노드로 올라가며 부모자식 비교를 반복
		// parent <- 부모의 인덱스는 (자식노드 - 1) / 2
		// if: 부모 <= 자식이라면 탈출, 아니라면 서로 교환
		let i = this.heap.length - 1;
		while (i > 0) {
			const parent = ~~((i - 1) / 2);
			if (this.heap[parent] <= this.heap[i]) break;
			[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
			i = parent;
		}
	}

	// pop(): 힙에서 데이터를 꺼내고 그 값을 리턴
	pop() {
		// 만약 힙이 비어있으면 그대로 리턴
		if (this.empty()) return;
		// value <- 힙에서 데이터를 꺼낼 때는 가장 위에 있는 것이 추출
		const value = this.peek();
		// 가장 뒤에 있는 데이터와 맨 위에 있는 데이터를 교환하면 그냥 pop하기만 하면 됨.
		[this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
		this.heap.pop();
		// 힙의 구조를 유지
		this._heapify();

		return value;
	}

	// _heapify(): 부모보다 자식이 작은 경우는 좌우 자식 중 가장 작은 쪽과 교환
	_heapify() {
		// x <- 루트노드의 값
		const x = this.peek();
		// n <- 힙의 크기
		const n = this.heap.length;
		// cur <- 루트 노드의 인덱스
		let cur = 0;
		// while: 최하단의 왼쪽 자식노드로 갈 때까지 교환 처리를 반복
		// 가장 작은 자식노드를 찾은 다음 부모와 비교
		while (2 * cur + 1 < n) {
			// leftChild <- 2 * cur + 1;
			const leftChild = 2 * cur + 1;
			// rightChild <- leftChild + 1
			const rightChild = leftChild + 1;
			// smallerChild <- 오른쪽 자식노드의 값이 왼쪽 자식노드 값보다 더 작으면 오른쪽, 아니면 왼쪽
			const smallerChild = rightChild < n && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;

			// if: 루트노드 > 가장 작은 자식노드라면 가장 작은 자식노드와 교체하고 아니라면 반복문을 탈출
			if (x > this.heap[smallerChild]) {
				[this.heap[cur], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[cur]];
				// 현재 자식노드가 다음 부모노드가 됨
				cur = smallerChild;
			} else {
				break;
			}
		}
	}
}

const pq = new PriorityQueue();
pq.push(3);
pq.push(5);
pq.push(2);
pq.pop();
pq.push(6);
pq.push(1);
pq.pop();

while (!pq.empty()) {
	console.log(pq.pop()); // 3 5 6
}
