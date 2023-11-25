function solution(score) {
    const evals = score.map(([eng, math]) => (eng + math) / 2);
    const sorted = evals.slice().sort((a, b) => b - a);

    return evals.map(v => sorted.indexOf(v) + 1);
}
