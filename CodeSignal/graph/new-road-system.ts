// https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/nCMisf4ZKpDLdHevE

function solution(roadRegister: boolean[][]): boolean {
    const n = roadRegister.length;
    const cnts: number[][] = Array.from({length: n}, () => [0, 0]);
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(roadRegister[i][j]) {
                cnts[i][0] += 1;
                cnts[j][1] += 1;
            }
        }
    }

    return !cnts.some(pair => pair[0] !== pair[1]);
}
