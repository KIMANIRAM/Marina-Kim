// 12.29 - 첫 번째 풀이
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

// 12.30 - declarative programming 방식의 두 번째 풀이
function solution(N, stages) { 
    const failures = Array(N).fill().map((_, i) => {
        const currentStage = i + 1;
        const losers = stages.filter(stage => stage === currentStage).length;
        const challengers = stages.filter(stage => stage >= currentStage).length;
        // console.log(`${i + 1}번 스테이지 실패율: ${losers}/${challengers}`);
        return [i + 1, losers / challengers];
    });
                                    
    return failures.sort(([, a], [, b]) => b - a).map(failure => failure[0]);
}
