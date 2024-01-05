function solution(lottos, win_nums) {
    const ranking = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
    
    let [correntCnt, unknownCnt, restWinNumCnt] = [0, 0, win_nums.length];
    
    const findWinNum = target => win_nums.find(num => num === target);
    
    lottos.forEach(lotto => {
        if(lotto === 0) {
            unknownCnt += 1;
        } else {
            if(findWinNum(lotto)) {
                correntCnt += 1;
                restWinNumCnt -= 1;
            }
        }
    });
    
    // console.log([correntCnt, unknownCnt, restWinNumCnt]);
    
    return [ranking[correntCnt + unknownCnt], ranking[correntCnt]]; 
}
