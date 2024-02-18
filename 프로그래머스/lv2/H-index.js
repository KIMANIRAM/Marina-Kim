// 코너케이스 추가: https://school.programmers.co.kr/learn/courses/14743/lessons/118838
function solution(citations) {
    const CITATIONS = citations.sort((a, b) => a - b);

    for(let h = CITATIONS.length; h > -1; h--) {
        let more = CITATIONS.filter(a => a >= h).length;
        let less = CITATIONS.filter(a => a < h).length;
        
        if(more >= h && less <= h) {
            return h;
        }
    }

    return 0;
}
