function isCurrect(p) { 
    const st = [];
    for(let i = 0; i < p.length; i++) {
        if(st[st.length - 1] === '(' && p[i] === ')') {
            st.pop();
        } else {
            st.push(p[i]);
        }
    }
    return st.length === 0 ? true: false;
}


function getBalanceStr(p) {
    if(!p.length) return ['', ''];
    let [left, right] = [0, 0];
    for(let i = 0; i < p.length; i++) {
        if(p[i] === '(') {
            left++;
        } else {
            right++;
        }
        if(left === right) {
            return [p.slice(0, i + 1), p.slice(i + 1)];
        }
    }
}

function reverseStr(u) {
    if(!u.length) return '';
    return [...u].map(s => s === '(' ? ')' : '(').join('');
}

function solution(p) {
    if(p === '') return '';
    if(isCurrect(p)) return p;

    const dfs = (str) => {
        if(str === '') return '';
        const [u, v] = getBalanceStr(str);
        // console.log(u, 'and', v);
        if(isCurrect(u)) {
            return u + dfs(v);
        } else {
            return '(' + dfs(v) + ')' + reverseStr(u.slice(1, u.length - 1));
        }
    };

    return dfs(p);
}
