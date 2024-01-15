function solution(id_list, report, k) {
    const filterdReport = Array.from(new Set(report)).map(pair => pair.split(' '));
    
    const reportedIdMap = filterdReport.reduce((map, [id1, id2]) => {
        map.set(id2, map.get(id2) + 1 || 1);
        return map;
    }, new Map());
    
    const sendMailIdMap = filterdReport.reduce((map, [id1, id2]) => {
        if(reportedIdMap.get(id2) >= k) {
            map.set(id1, map.get(id1) + 1 || 1);
        }
        return map;
    }, new Map());
    
    return id_list.map(id => sendMailIdMap.get(id) || 0);
}
