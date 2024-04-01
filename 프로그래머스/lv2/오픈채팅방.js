// 전형적인 시뮬레이션 문제
function solution(record) {
    const idMap = record.reduce((map, strs) => {
        if(!strs.startsWith('Leave')) {
            const [_, id, name] = strs.split(' ');
            map.set(id, name);
        }
        return map;
    }, new Map());
    const result = [];

    for(let i = 0; i < record.length; i++){
        const str = record[i].split(' ');
        if(str[0] === 'Enter') {
            result.push(`${idMap.get(str[1])}님이 들어왔습니다.`);
        }
        if(str[0] === 'Leave') {
            result.push(`${idMap.get(str[1])}님이 나갔습니다.`);
        }
    }

    return result;
}
