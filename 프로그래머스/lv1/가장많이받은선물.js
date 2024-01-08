function pipe(...fns) {
    return (...args) => {
        return fns.reverse().reduceRight(
            (res, fn) => [fn.call(null, ...res)], args
        )[0];
    }
}

function solution(friends, gifts) {
    const friendsNameList = friends.reduce(
        (obj, friend, idx) => ({...obj, [friend]: idx})
        , {}
    );
    
    const createGiverTable = ($friends, $gifts, nameList) => {
        const table = Array($friends.length).fill()
            .map(e => Array($friends.length).fill(0));
        
        return $gifts.reduce((tb, gift) => {
            const [giver, reciever] = gift.split(' ');
            const [i, j] = [nameList[giver], nameList[reciever]];
            tb[i][j]++;
            
            return tb;
        }, table);
    }
   
    const createRankArr = table => {
        const given = table.map(row => row.reduce((total, cur) => total + cur, 0));
        const recieved = table[0].map(
            (_, colIdx) => table.reduce((total, row) => total + row[colIdx], 0)
        );
        
        return [table, given.map((given, idx) => given - recieved[idx])];
    }
    
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
