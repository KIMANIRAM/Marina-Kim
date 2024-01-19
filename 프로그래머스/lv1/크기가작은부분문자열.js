function solution(t, p) { 
    const arr = [];
    const len = p.length;

    for(let i = 0; i <= t.length - len; i++) { 
        const sub = t.slice(i, len + i);
        arr.push(sub);
    }

    return arr.map(str => parseInt(str)).filter(num => num <= parseInt(p)).length;
}
