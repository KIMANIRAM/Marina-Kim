function solution(orders, course) {
    const result = [];

    const dfs = (arr, selectNum) => {
        const result = [];
        if(selectNum === 1) return arr;

        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combs = dfs(rest, selectNum - 1);
            const attached = combs.map(comb => fixed + comb);
            attached.sort();
            result.push(...attached);
        });

        return result;
    };

    const findMaxPair = menuArr => {
        if(menuArr.length === 0) return [];
        const max = Math.max(...menuArr.map(e => e[1]));
        return menuArr.filter(e => e[1] === max).map(e => e[0]);
    };

    for(let i = 0; i < course.length; i++) {
        const menus = new Map();
        for(let j = 0; j < orders.length; j++) {
            if(course[i] > orders[j].length) continue;
            if(orders[j].length >= course[i]) {
                dfs([...orders[j]].sort(), course[i]).forEach(menu => menus.set(menu, (menus.get(menu) || 0) + 1));
            }
        }
        result.push(...findMaxPair(Array.from(menus).filter(e => e[1] > 1)));
    }
    return result.sort();
}
