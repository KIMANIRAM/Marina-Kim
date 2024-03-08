function solution(bridge_length, weight, truck_weights) {
    const q = Array(bridge_length).fill(0);
    let timer = 0;
    while(truck_weights.length) {
        q.shift();
        timer++;
        let total = q.reduce((a, b) => a + b, 0);
        if(total + truck_weights[0] <= weight) {
            q.push(truck_weights.shift());
        }else {
            q.push(0);
        }
    } 
    return timer + q.length;
}
