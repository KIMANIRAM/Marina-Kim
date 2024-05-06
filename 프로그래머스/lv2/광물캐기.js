function solution(picks, minerals) {
    let answer = 0;
    const totalMiningCnt = Math.min(
        picks.reduce((a, b) => a + b, 0) * 5,
        minerals.length
    );
    const arr = minerals.reduce((acc, e, idx) => {
        if(idx >= totalMiningCnt) return acc;
        const i = ~~(idx/ 5);
        acc[i] = acc[i] || [0, 0, 0];
        ++acc[i][['diamond', 'iron', 'stone'].indexOf(e)];
        return acc;
    }, []);

    arr.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

    arr.forEach(e => {
        for(let i = 0; i < picks.length; ++i) { 
            if(picks[i] === 0) continue;
            e.forEach((el, idx) => {
                if(idx < i) {
                    answer += Math.pow(5, i - idx) * el;
                } else {
                    answer += el;
                }
            });
            --picks[i];
            return;
        }
    });

    return answer;
}
