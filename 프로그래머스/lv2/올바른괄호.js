function solution(s){
    const stack = [];
    
    s.split('').map(str => {
        if(str === ')' && stack[stack.length - 1] === '(') stack.pop();
        else stack.push(str);
    });

    return stack.length === 0 ? true : false;
}
