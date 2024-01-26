function solution(today, terms, privacies) {
    const convertToDay = (strArr) => {
        const [y, m, d] = strArr.map(e => +e); 
        return d + m * 28 + y * 28 * 12;
    }
    
    const todayTimestamp = convertToDay(today.split('.'));
    
    const termsTimestampMap = terms.reduce((map, term) => {
        const [type, period] = term.split(' ');
        map.set(type, convertToDay([0, period, 0])); 
        return map; 
    }, new Map());
    
    return privacies.reduce((result, privacy, idx) => {
        const [date, type] = privacy.split(' ');
        const exTimestamp = 
              convertToDay(date.split('.')) + termsTimestampMap.get(type);
        if(todayTimestamp - exTimestamp >= 0) {
            result.push(idx + 1);
        }
        return result;
    }, []);
}
