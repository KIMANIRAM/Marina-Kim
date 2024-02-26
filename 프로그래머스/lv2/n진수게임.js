function solution(n, t, m, p) {
    const states = [];
    const len = t * m;

    let i = 0;
    let result = '';

    while(states.length < len) {
        const curN = i.toString(n);
        for(let j = 0; j < curN.length; j++) {
            const e = isNaN(curN[j]) ? curN[j].toUpperCase() : curN[j];
            states.push(e);
            if(states.length === len) break;
        }
        i++;
    }

    for(let rnd = 0; rnd < t; rnd++) {
        result += states[m * rnd + (p - 1)];
    }

    return result;
}
