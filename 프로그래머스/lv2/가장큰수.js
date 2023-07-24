// 몰랐던 것: 자바스크립트 sort 메소드의 동작과정
// 그냥 sort() 이렇게만 사용하면 유니코드를 기준으로 값을 비교함. 만약 [10, 4, 3] 이라면 10은 첫 번째 문자열의 유니코드로 비교함. 그래서 정렬 결과는[10, 3, 4] 가 됨.
// sort의 compareFunction 파라미터 a, b에서,
// 반환값 < 0: a, b 순서 바뀜
// 반환값 >= 0: a, b 순서 안바뀜
function solution(numbers) { 
    const answer = numbers.map(num => num.toString()).sort((a, b) => (b + a) - (a + b)).join('');
    return answer[0] === '0' ? '0' : answer;
}
