// https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/wkhfpfiT6YynLk2qE

function destroy(target: number, roadRegister: boolean[][]): boolean[][] {
    const graph = [];

    for(let i = 0; i < roadRegister.length; i++) {
        const temp = [];
        for(let j = 0; j < roadRegister.length; j++) {
            if(i !== target && j !== target) {
                temp.push(roadRegister[i][j]);
            }
        }
        if(temp.length) graph.push(temp);
    }

    return graph;
}

function solution(roadRegister: boolean[][]): boolean[][][] {
    const results = [];
    
    for(let i = 0; i < roadRegister.length; i++) {
        results.push(destroy(i, roadRegister));
    }
    
    return results;
}
