function solution(number, k) {
    const stack = [number[0]]; 
    
    for(let i = 1; i < number.length; i++) {
        while(k > 0 && stack.length && stack[stack.length - 1] < number[i]) {
            k--;
            stack.pop();
        }
        stack.push(number[i]);
    }
    
    return stack.slice(0, stack.length - k).join('');
}
