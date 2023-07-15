function solution(numbers, target) {
    let count = 0;
    
   (function DFS(v, sum) {
        if(v === numbers.length) {
            if(sum === target) count++;
        } else {
            DFS(v + 1, sum + numbers[v]);
            DFS(v + 1, sum - numbers[v]);
        }
    }(0, 0));
    
    return count;
}
