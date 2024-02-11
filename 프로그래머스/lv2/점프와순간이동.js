function solution(n) {
    const move = (restDis, btr) => {
        if(restDis === 0) return btr;

        if((restDis % 2) === 0) {
            restDis = restDis / 2;
        } else {
            restDis -= 1;
            btr += 1;
        }
        
        return move(restDis, btr);
    };
    
    return move(n, 0);
}
