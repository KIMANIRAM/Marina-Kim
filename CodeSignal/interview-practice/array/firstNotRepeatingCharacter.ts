// https://app.codesignal.com/interview-practice/question/uX5iLwhc6L5ckSyNC/solutions

function solution(s: string): string {
    const hashMap = [...s].reduce((map, e) => {
        map.set(e, (map.get(e) || 0) + 1);
        return map;
    }, new Map<string, number>());

    let uniqueS = '';
    for(let i = 0; i < s.length; i++) {
        if(hashMap.get(s[i]) === 1) uniqueS += s[i];
    }
    
    return uniqueS.length === 0 ? '_' : uniqueS[0];
}
