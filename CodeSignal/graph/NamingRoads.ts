// https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/d9RrPoAsHauEZ8NJD/solutions

function solution(roads: number[][]): boolean {
    roads.sort((a, b) => a[2] - b[2]);
    
    for(let i = 1; i < roads.length; i++) {
        const cur = roads[i - 1];
        const next = roads[i];
        
        const [curCityA, curCityB] = cur;
        const [nextCityA, nextCityB] = next;
        
        if(curCityA === nextCityA || curCityA === nextCityB) return false;
        if(curCityB === nextCityA || curCityB === nextCityB) return false;
    }
    
    return true;
}
