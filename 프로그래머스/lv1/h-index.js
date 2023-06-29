// 테스트케이스가 적다면, 엣지케이스를 추가하기.
function solution(citations) {
    const CITATIONS = citations.sort((a, b) => a - b);

    for(let h = CITATIONS.length; h > -1; h--) {
        let more = CITATIONS.filter(a => a >= h);
        let less = CITATIONS.filter(a => a < h);

        if(more.length >= h && less.length <= h) {
            return h;
        }
    }
    
    return 0;
}
