/* sudo code
if: number가 모두 같은 수 또는 내림차순일 경우 뒤에서부터 k까지 자르면 됨.
else: 그 외의 경우
  for: number의 앞과 뒤를 비교
        if: k>0 이고 앞이 뒤보다 작다면
          앞을 pop
          k-=1
          k=0 또는 앞이 뒤보다 크거나 비교배열이 빌 때까지 if문을 반복
        아니라면 비교배열에 앞을 push
*/
function solution(number, k) {
    const arr = []; // 결과배열

    for(let i = 0; i < number.length; i++) {
        (function compare() {
            if(k > 0 && arr[arr.length - 1] < number[i]) {
                arr.pop();
                k -= 1;
                compare();
            }
         })()
        arr.push(number[i]);
    }

    return arr.slice(0, arr.length - k).join('');
}
