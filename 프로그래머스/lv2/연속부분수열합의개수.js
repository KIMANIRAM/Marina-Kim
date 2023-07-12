// 이 문제를 풀기 위한 사전지식 - set자료구조, 슬라이딩윈도우(=투포인터) 알고리즘
/* sudo code
  set <- 중복되지 않는 연속부분수열의 합을 저장하는 자료구조
  n <- 입력 배열의 크기 n
  for: 연속부분수열의 길이는 1부터 입력배열의 크기까지
    sum <- 연속부분수열의 합 
    for: 연속부분수열의 시작 인덱스는 0부터 입력배열의 크기까지
      if: 시작 인덱스 = 0일 경우
        시작인덱스부터 (시작인덱스 + 연속부분수열 길이 - 1)까지 합을 계산
      else: 
        합에서 시작인덱스-1의 값을 빼서 현재 합을 계산
      set 자료구조에 연속부분수열의 합을 저장
  return: set의 길이
*/
function solution(elements) {
    let set = new Set();
    const n = elements.length;

    for(let i = 1; i <= n; i++) { 
        let sum = 0;
        for(let j = 0; j < n; j++) { 
            if(j === 0) {
                for(let k = 0; k < i; k++) {
                    sum += elements[k];
                } 
            } else {
                sum -= elements[j - 1];
                sum += elements[(j + i - 1) % n];
            }  
            set.add(sum);
        }
    }

    return set.size;
}
