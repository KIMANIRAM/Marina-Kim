function solution(s){
    const stack = [];
    
    [...s].map(e => {
        if(e === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(e);
        }
    });
    // console.log(stack.join(''))
    return stack.length === 0 ? true : false;
}
