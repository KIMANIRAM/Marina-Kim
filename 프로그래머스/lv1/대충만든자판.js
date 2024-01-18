function solution(keymap, targets) { 
    const NOT_FOUND_NUM = 1000;
    const result = [];

    for(const target of targets) {
        let cnt = 0;
        for(let i = 0; i < target.length; i++) {
            const findedTargetIdxes = keymap.map(key => key.indexOf(target[i]))
                .map(n => n < 0 ? NOT_FOUND_NUM : n);
            const min = Math.min(...findedTargetIdxes);

            if (min === NOT_FOUND_NUM) {
                cnt = -1;
                break;
            } else {
                cnt += (min + 1);
            }
        }
        result.push(cnt);
    }

    return result;
}
