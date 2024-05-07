// 그리디
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

// 백트래킹(DFS)
function sliceInto5(minerals) {
    const st = [];
    for(let i = 0; i < minerals.length; i += 5) {
        st.push(minerals.slice(i, i + 5));
    }
    return st;
}

function mapify(minerals) {
    const state = { 'diamond': 0, 'iron': 1, 'stone': 2 };
    return minerals.reduce((map, mineral) => {
        map.set(state[mineral], (map.get(state[mineral]) || 0) + 1);
        return map;
    }, new Map());
}

function isAllConsumed(picks) {
    if(picks[0][1] > 0) return false;
    if(picks[1][1] > 0) return false;
    if(picks[2][1] > 0) return false;
    return true;
}

function solution(picks, minerals) {
    const costInfo = [ [1, 1, 1], [5, 1, 1], [25, 5, 1] ];
    const _picks = [ [0, picks[0]], [1, picks[1]], [2, picks[2]] ];
    const slicedMinerals = sliceInto5(minerals);
    const _minerals = slicedMinerals.map(mineral => mapify(mineral));
    
    let min = Number.MAX_SAFE_INTEGER;

    const dfs = (cur_picks, cur_minerals, cost) => {
        if(isAllConsumed(cur_picks) || !cur_minerals.length) {
            min = Math.min(min, cost);
            return;
        }  
        for(let i = 0; i < 3; i++) {
            if(cur_picks[i][1] === 0) continue;
            const val = Array.from(cur_minerals[0]).reduce((total, [k, v]) => total + costInfo[i][k] * v, 0);
            cur_picks[i][1] -= 1;
            dfs(cur_picks, cur_minerals.slice(1), val + cost);
            cur_picks[i][1] += 1;
        }
    };
    
    dfs(_picks, _minerals, 0);
    
    return min;
}
