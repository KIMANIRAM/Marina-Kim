function solution(dirs) {
    const visited = new Set();
    const moveStrategy = new Map([
        ['D', [-1, 0]],
        ['R', [0, 1]],
        ['U', [1, 0]],
        ['L', [0, -1]],
    ]);
    
    let [cx, cy] = [0, 0]; 
    let cnt = 0;

    for(let i = 0; i < dirs.length; i++) {
        let [dx, dy] = moveStrategy.get(dirs[i]);
        let [nx, ny] = [cx + dx, cy + dy];

        if(nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        const prev = [cx, cy].join('');
        const next = [nx, ny].join('');
        // console.log(`이전좌표: ${cx},${cy},다음좌표: ${nx}, ${ny}`)
        if(!visited.has(prev + next) || !visited.has(next + prev)) {
            cnt++;
            visited.add(prev + next);
            visited.add(next + prev);
        } 
        [cx, cy] = [nx, ny]; 
    }

    return cnt;
}
