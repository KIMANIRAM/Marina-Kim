function solution(lottos, win_nums) {
    const findWinNum = target => win_nums.find(num => num === target);
    
    const findLottoCnt = ([correctCnt, unknownCnt], lotto) => {
        if(lotto === 0) {
            unknownCnt++;
        } else {
            if(findWinNum(lotto)) correctCnt++;
        }
        return [correctCnt, unknownCnt];
    };
    
    const matchRanking = 
          ranking => 
            ([correctCnt, unknownCnt]) => 
                [ranking[correctCnt + unknownCnt], ranking[correctCnt]];
    
    // // 로또 순위표: {6개 번호가 모두 일치: 1등, 5개 번호가 모두 일치: 2등, ... , 1개 이하의 번호가 일치: 6등}
    const getRank = matchRanking({ 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 });
    
    return getRank(lottos.reduce(findLottoCnt, [0, 0]));
}
