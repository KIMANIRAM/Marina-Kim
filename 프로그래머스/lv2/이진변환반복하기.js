function solution(s) {
    const deleteZero = (binaryArr, zeroCnt) => {
        const deleted = [...binaryArr].filter(binary => {
            if(binary === '1') return true;
            zeroCnt++;
            return false;
        });
        return [deleted.length, zeroCnt];
    };
    
    const toBinary = (result, cvtCnt, zeroCnt) => {
        if(result === '1') return [cvtCnt, zeroCnt];
        const [c, _zeroCnt] = deleteZero([...result], zeroCnt);
        return toBinary((c.toString(2)).toString(), cvtCnt + 1, _zeroCnt)
    };
    
    return toBinary(s, 0, 0);
}
