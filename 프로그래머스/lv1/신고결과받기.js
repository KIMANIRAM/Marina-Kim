function solution(id_list, report, k) {
    const answer = id_list.reduce((map, id) => {
        map.set(id, 0);
        return map;
    }, new Map());

    const idMap = id_list.reduce((map, id) => {
        map.set(id, [0, []]);
        return map;
    }, new Map());

    for(let i = 0; i < report.length; i++) {
        const [a, b] = report[i].split(' ');
        if(idMap.get(b)[1].includes(a)) continue;
        // [신고당한 횟수, 신고한 사람]
        idMap.set(b, [idMap.get(b)[0] + 1, [...idMap.get(b)[1], a]]);
    }

    idMap.forEach((v, key) => {
        let cnt = 0;
        if(v[0] >= k) {
            v[1].forEach(id => answer.set(id, answer.get(id) + 1));
        }

    });

    return Array.from(answer).map(([id, cnt]) => cnt);
}
