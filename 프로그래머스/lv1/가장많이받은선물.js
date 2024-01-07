function pipe(...fns) {
    return (...curriedArgs) => 
        fns.reverse().reduceRight(
            (res, fn) => [fn.call(null, ...res)]
            , curriedArgs
        )[0];
}

function solution(friends, gifts) {
    const friendsNameList = friends.reduce(
        (obj, friend, idx) => ({...obj, [friend]: idx}), {});
    
    const createGiverTable = ($friends, $gifts, nameList) => {
        let table = Array($friends.length).fill()
            .map(e => Array($friends.length).fill(0));
        
        $gifts.forEach((gift) => {
            const [giver, reciever] = gift.split(' ');
            const i = nameList[giver];
            const j = nameList[reciever];
            table[i][j]++;
        });
        
        return table;
    };
    
    const createRankArr = (table) => {
        const ranks = []; 
        
        const givens = table.map(
            row => row.reduce((total, val) => total + val, 0)
        );
        
        const recieveds = table[0].map(
            (_, colIdx) => table.reduce((total, row) => total + row[colIdx], 0)
        );
        
        return [table, givens.map((given, idx) => given - recieveds[idx])];
    };
    
    const createNextMonthGiftArr = ([table, ranks]) => {
        let nextMonthGifts = Array(ranks.length).fill(0);
        
        for(let i = 0; i < table.length; i++) {
            for(let j = 0; j < table.length; j++) {
                switch(true) {
                    case (i === j): 
                        break;
                    case (table[i][j] > table[j][i]):
                        nextMonthGifts[i]++;
                        break;
                    case (table[i][j] === table[j][i]):
                        if(ranks[i] > ranks[j]) nextMonthGifts[i]++;
                        break;
                }
            }
        }
        return nextMonthGifts;
    }
    
    const findMaxGift = nextMonthGifts => Math.max(...nextMonthGifts);
   
    return pipe(
        createGiverTable,
        createRankArr,
        createNextMonthGiftArr,
        findMaxGift,
    )(friends, gifts, friendsNameList);
}
