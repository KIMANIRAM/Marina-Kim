function solution(priorities, location) {
    let answer = 0;
    let pq = new PriorityQueue();
    
    // 힙 삽입 - [우선순위, 인덱스]
    for(const idx in priorities) {
        pq.enqueue([priorities[idx], idx]);
    }
    
    // 힙 삭제
    while(!pq.empty()) {
        const value = pq.dequeue();
        answer += 1;
        
        if(value[1] === location) break;
        
    }
    
    return answer; 
}
