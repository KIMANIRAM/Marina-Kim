function splitMinerals(minerals) {
    const result = [];
    for(let i = 0; i < minerals.length; i += 5) {
        result.push(minerals.slice(i, i + 5));
    }
    return result;
}

function updateCost(pickIdx, cost, mineral) {
    const mpMap = new Map([
        ["diamond", 0],
        ["iron", 1],
        ["stone", 2]
    ]);
    const costs = [
        [1, 1, 1],
        [5, 1, 1],
        [25, 5, 1]
    ];
    return mineral.reduce((total, e) => total + costs[pickIdx][mpMap.get(e)], cost);
}

function solution(picks, minerals) {
    const splitedMinerals = splitMinerals(minerals);
    const n = splitedMinerals.length;
    let amount = Number.MAX_SAFE_INTEGER;
    
    const backtracking = (depth, cost) => {
        if(depth === n || picks.every(pick => pick === 0)) {
            amount = Math.min(amount, cost);
            return;
        }
        if(cost >= amount) return;
        for(let i = 0; i < 3; i++) { 
            if(picks[i] > 0) {
                picks[i] -= 1;
                backtracking(depth + 1, updateCost(i, cost, splitedMinerals[depth]));
                picks[i] += 1;
            }
        }
    };
    
    backtracking(0, 0);
        
    return amount;
}
