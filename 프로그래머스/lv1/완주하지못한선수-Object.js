function solution(participant, completion) {
    // 배열 내 요소들을 각각 카운트해서 객체로 반환하는 함수
    const nameCountObj = (arr) => {
        return arr.reduce((prev, curr) => {
            prev[curr] = ++prev[curr] || 1;
            return prev;
        }, {})
    }
    
    const participantList = nameCountObj(participant);
    const completionList = nameCountObj(completion);
    
    // console.log(participantList);
    // console.log(completionList);
    
    let target = "";
    for(const [key, value] of Object.entries(participantList)) {
        if(completionList[key] !== value) {
            target = key;
            break;
        }
    }
    
     return target;
}
