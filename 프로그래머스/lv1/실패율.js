function solution(N, stages) {
    const failures = []; 

    for(let i = 1; i <= N; i++) {
        const passer = stages.filter(stage => stage === i).length;
        const challengers = stages.filter(stage => stage >= i).length;
        // console.log(`${i}번 스테이지 실패율: ${passer}/${challengers}`);
        failures.push([i, passer / challengers]);
    }

    const sortable = failures.sort(([, a], [, b]) => b - a).map(pair => pair[0]);

    return sortable;
}
