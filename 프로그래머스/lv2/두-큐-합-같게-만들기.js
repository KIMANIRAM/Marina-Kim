// 첫 번째 풀이: 시간초과
// shift 연산은 원소 삽입 시 시간복잡도가 O(N)임
function solution(queue1, queue2) {
    const N = queue1.length;
    const MAX_LOOP_CNT = N + N * 2;
    let [cnt, sum1, sum2] = [0, 0, 0];
    
    for(let i = 0; i < N; i++) {
        sum1 += queue1[i];
        sum2 += queue2[i];
    }
    
    while(sum1 !== sum2) {
        if(cnt > MAX_LOOP_CNT) return -1;
        if(sum1 > sum2) {
            const front = queue1.shift();
            queue2.push(front);
            sum1 -= front;
            sum2 += front;
        } else if(sum1 < sum2) {
            const front = queue2.shift();
            queue1.push(front);
            sum1 += front;
            sum2 -= front;
        }
        cnt++;
    }
    
    return cnt;
}

// 두 번째 풀이: 통과
// 원소 삽입 시 시간복잡도 O(1)을 가지는 큐 구현
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.storage[this.rear] === undefined ? 0 : this.rear - this.front + 1;
    }

    enqueue(value) {
        if(this.size() === 0) {
            this.storage['0'] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }

    dequeue() {
        let temp; 

        if(this.front === this.rear) {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            [this.front, this.rear] = [0, 0];
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }

        return temp;
    }
}

function solution(queue1, queue2) {
    const N = queue1.length;
    const MAX_LOOP_CNT = N + N * 2;
    const q1 = new Queue();
    const q2 = new Queue();
    let [cnt, sum1, sum2] = [0, 0, 0];

    for(let i = 0; i < N; i++) {
        sum1 += queue1[i];
        sum2 += queue2[i];
        q1.enqueue(queue1[i]);
        q2.enqueue(queue2[i]);
    }

    while(sum1 !== sum2) {
        if(cnt > MAX_LOOP_CNT) return -1;
        if(sum1 > sum2) {
            const front = q1.dequeue();
            q2.enqueue(front);
            sum1 -= front;
            sum2 += front;
        } else if(sum1 < sum2) {
            const front = q2.dequeue();
            q1.enqueue(front);
            sum1 += front;
            sum2 -= front;
        }
        cnt++;
    }

    return cnt;
}
