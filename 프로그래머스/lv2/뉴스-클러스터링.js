function solution(str1, str2) {
    const pattern = /[a-zA-Z]/;
    const multipleSetfy = (str) => { 
        str = str.toLowerCase();
        const set = [];
        for(let i = 0; i < str.length - 1; i++) {
            if(pattern.test(str[i]) && pattern.test(str[i + 1])) {
                set.push(str[i] + str[i + 1]);
            }
        }
        return set;
    };

    const createMinmaxMap = (setArr, mapA, mapB) => {
        const minmax = new Map();
        for(const e of setArr) {
            const cntA = mapA.get(e) || 0;
            const cntB = mapB.get(e) || 0;
            if(cntA && cntB) {
                if(cntA > cntB) {
                    minmax.set(e, [cntB, cntA]);
                } else {
                    minmax.set(e, [cntA, cntB]);
                }
            } else if(cntA) {
                minmax.set(e, [0, cntA]);
            } else if(cntB) {
                minmax.set(e, [0, cntB]);
            }
        }
        return minmax;
    };

    const getSimilarity = (minmax) => {
        let intersectionSize = 0;
        let unionSize = 0;
        for(const [_, minmaxs] of minmax) {
            const [min, max] = minmaxs;
            intersectionSize += min;
            unionSize += max;
        }
        if(!intersectionSize && !unionSize) return 65536;
        return Math.floor(intersectionSize / unionSize * 65536)
    };

    const setA = multipleSetfy(str1); 
    const setB = multipleSetfy(str2);

    const minmaxMap = createMinmaxMap(
        Array.from(new Set([...setA, ...setB])),
        setA.reduce((map, e) => {
            map.set(e, (map.get(e) || 0) + 1);
            return map;
        }, new Map()),
        setB.reduce((map, e) => {
            map.set(e, (map.get(e) || 0) + 1);
            return map;
        }, new Map())
    );

    return getSimilarity(minmaxMap);
}
