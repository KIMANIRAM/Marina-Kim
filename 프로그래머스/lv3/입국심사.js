function solution(n, times) {
    times.sort((a, b) => a - b);
    let min = 1 * 1;
    let max = n * 1 *times[times.length - 1];
    
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
        const totalPeople = times.reduce((acc, cur) => {
            return acc + Math.floor(mid / cur);
        }, 0);
        
        totalPeople >= n ? max = mid - 1 : min = mid + 1;
    }
    
    return min;
}
