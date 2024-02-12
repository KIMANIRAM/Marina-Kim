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

/* (추가) 비트연산을 활용한 트릭

(1) 홀짝 구분하기

이진수에서 유일하게 홀수인 부분은 제일 첫번째 비트인 2^0, 즉 1이다.
따라서 2진수에서 홀수와 짝수를 구분할 수 있는 방법은 마지막 비트만 보면 된다.

if ((num & 0x1) == 0) /* 짝수 */ 
{

}

if ((num & 0x1) != 0) /* 홀수 */ 
{

}

(2) 정수 n의 2진수 값에 해당하는 1의 개수를 반환하기

어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은 어떠한 수를 이진수로 변환한 수의 1의 개수와 같다.
    => 그 이진수의 1의 개수는 점프(에너지 1 사용) 횟수다.

// nArr은 정수 n을 이진수로 변환한 배열 ex) n = 5  -> 4+0+1 -> [1,0,1]
nArr.reduce((a,b)=> a + b);

따라서 비트 연산을 활용한 풀이:
function solution(n)
{ 
    const binary = (n).toString(2); 
    return [...binary].reduce((acc, cur) => (+acc) + (+cur), 0);
}
*/
