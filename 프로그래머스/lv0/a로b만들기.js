function solution(before, after) {
    const toObj = (iter) => {
        return iter.reduce((acc, cur) => {
            acc[cur] = ++acc[cur] || 1;
            return acc;
        }, {});
    };

    const beforeObj = toObj(before.split(''));
    const afterObj = toObj(after.split(''));
    let count = Object.keys(beforeObj).length;

    for(const [key, value] of Object.entries(beforeObj)) {
        if(afterObj[key] === value) count--;
    }
    return count === 0 ? 1 : 0;
}
