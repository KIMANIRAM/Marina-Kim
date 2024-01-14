function solution(k, m, score) {
    const getMaxProfit = (sortedScr) => 
        sortedScr.reduce(([total, idx], _) => {
            const slicedScr = sortedScr.slice(idx, idx + m);
            let cur = 0;
            if(slicedScr.length === m) {
                cur = m * slicedScr[slicedScr.length - 1];
            }
            return [total + cur, idx + m];
        }, [0, 0]);

    return getMaxProfit(score.sort((a, b) => b - a))[0];
}
