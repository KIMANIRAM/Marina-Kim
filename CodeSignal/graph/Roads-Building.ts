// https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/CSzczQWdnYwmyEjvv

function solution(cities: number, roads: number[][]): number[][] {
    const arr: number[][] = Array.from({length: cities}, () => Array(cities).fill(1));
    const result: number[][] = [];
    
    for(let i = 0; i < roads.length; i++) {
        const [a, b] = [Math.min(roads[i][0], roads[i][1]), Math.max(roads[i][0], roads[i][1])];
        arr[a][b] = 0;
    }
    
    for(let i = 0; i < cities; i++) {
        for(let j = i + 1; j < cities; j++) {
            if(arr[i][j] === 1) {
                result.push([i, j]);
            }
        }
    }

    return result;
}
