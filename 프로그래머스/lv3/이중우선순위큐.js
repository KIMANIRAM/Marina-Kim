class DPQ {
    constructor() {
        this.s = new Set()
    }
    
    size() {
        return this.s.size
    }
    
    isEmpty() {
        return this.s.size === 0
    }
    
    insert(value) {
        this.s.add(value)
    }
    
    getMin() {
        return Math.min(...Array.from(this.s.values()))
    }
    
    getMax() {
        return Math.max(...Array.from(this.s.values()))
    }
    
    deleteMin() {
        if(this.s.size === 0) return
        this.s.delete(this.getMin())
    }
    
    deleteMax() {
        if(this.s.size === 0) return
        this.s.delete(this.getMax())
    }
}

function solution(operations) {
    const heap = new DPQ();
    
    for(let i = 0; i < operations.length; i++) {
        const [command, value] = operations[i].split(' ');
        if(command === 'D') {
            if(heap.isEmpty()) {
                continue;
            }
            if(value === '-1') {
                heap.deleteMin();
            } else {
                heap.deleteMax();
            }
        } else {
            heap.insert(+value);
        }
    }
    
    return heap.isEmpty() ? [0, 0] : [heap.getMax(), heap.getMin()];
}
