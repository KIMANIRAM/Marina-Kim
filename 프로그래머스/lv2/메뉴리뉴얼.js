function getCombinations(arr, selectedN) {
    const result = [];
    if(selectedN === 1) return arr;
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combs = getCombinations(rest, selectedN - 1);
        const attached = combs.map(c => fixed + c);
        result.push(...attached);
    });
    
    return result;
}

function createMenu(orders, r) {
    const menuMap = orders.reduce((map, order) => {
        if(order.length >= r) {
            getCombinations([...order].sort(), r).forEach(c => map.set(c, (map.get(c) || 0) + 1));
        }
        return map;
    }, new Map());
    return Array.from(menuMap).filter(([_, v]) => v > 1);
}

function findPopularMenu(menu) {
    const maxNum = Math.max(...menu.map(([_, v]) => v));
    return menu.filter(([_, v]) => v === maxNum).map(([k, _]) => k);
}

function solution(orders, course) {
    const answer = [];
    
    course.forEach(r => {
        const menu = createMenu(orders, r);
        if(menu.length) answer.push(...findPopularMenu(menu));
    });
    
    return answer.sort();
}
