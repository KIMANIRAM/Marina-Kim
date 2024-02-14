function solution(s) {
    const n = s.length;

    let cnt = 0;
    let start = '';

    const isCurrect = (str) => {
        const stack = [];
        for(let i = 0; i < n; i++) {
            const unknownStr = stack[stack.length - 1] + str[i];
            if(
                unknownStr === '[]'
                || unknownStr === '{}'
                || unknownStr === '()'
            ) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.length === 0 ? true : false;
    }

    for(let i = 0; i < n; i++) {
        start += s[i];
        if(isCurrect(s.slice(i + 1) + start)) cnt++;
    }

    return cnt;
}
