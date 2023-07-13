// 각 알파벳에 대해서 최소 (상하이동 횟수 + 좌우이동 횟수)를 구한다.
function solution(name) { 
    const N = 'N'.charCodeAt();
    let alphabetCnt = 0;
    // 오른쪽으로 쭉 갈 경우
    let cursorCnt = name.length - 1;
    
    for(let i = 0; i < name.length; i++) {
        // 상하이동 횟수 구하기
        let curr = name.charCodeAt(i);
        
        if(curr < N) {
            alphabetCnt += curr % 65;
        } else {
            // x - 90 = 1, x - 89 = 2, ... x = 91
            alphabetCnt += 91 - curr;
        }
        
        let nextIdx = i + 1;
        while(name[nextIdx] === 'A') {
            nextIdx += 1;
        }
        // 좌우이동 횟수 구하기
        cursorCnt = Math.min(
            cursorCnt,
            // 앞에서부터 현재 인덱스까지 왔다가, 다시 돌아가서, 뒤에서부터 nextIdx까지 가는 경우
            i * 2 + name.length - nextIdx,
            // 뒤에서부터 nextIdx까지 갔다가, 다시 돌아가서, 앞에서부터 현재 인덱스까지 오는 경우
            i + (name.length - nextIdx) * 2
        );
    }
    
    // 정답: 상하이동 횟수 + 좌우이동 횟수
    alphabetCnt += cursorCnt;
    
    return alphabetCnt; 
}
