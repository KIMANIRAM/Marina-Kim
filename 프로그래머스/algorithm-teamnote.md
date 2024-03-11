## 그리디, 정렬
- 대부분 그리디 + 문제에서 숨겨진 알고리즘을 사용해서 푼다.
- 문제를 풀기 위한 최소한의 아이디어(그리디) + 숨겨진 알고리즘(그 아이디어를 구체적으로 구현하는 방법)
- 숨겨진 알고리즘은 문제에서 주어진 입력개수로 판단 가능.
- 정렬 먼저 한 뒤에 문제를 풀어야 하는 경우가 많음

[최솟값 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12941)

[구명보트](https://school.programmers.co.kr/learn/courses/30/lessons/42885)

[귤고르기](https://school.programmers.co.kr/learn/courses/30/lessons/138476)



## 스택/큐
- 하나씩 검사하면서 조건에 일치하면 스택에 있는 걸 한꺼번에 처리하는 경우
- 문자열 문제에서 스택을 많이 사용함

[올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

[짝지어 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12973)

[괄호 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

## 해시

[영어 끝말잇기](https://school.programmers.co.kr/learn/courses/30/lessons/12981)
[할인행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127)



## 완전탐색, DFS, 백트래킹

## 최단거리, BFS

## 분할정복, 재귀, DP
- 특정 조건을 만족할 때까지 같은 작업을 계속 반복해야 하는 경우
- 문제에서 설명을 바텀업으로 해도 탑다운(재귀)으로 풀어야 할 때도 있음
- while문 또는 꼬리재귀만 생각해서 푸는 경우는 입력 개수가 십만 개 이하인 경우에 해당.
- 문제에서 **1234567를 나눈 나머지**가 보이면 무조건 DP

[이진변환 반복하기](https://school.programmers.co.kr/learn/courses/30/lessons/70129)

[피보나치 수](https://school.programmers.co.kr/learn/courses/30/lessons/12945)

[점프와 순간이동](https://school.programmers.co.kr/learn/courses/30/lessons/12980)

[멀리뛰기](https://school.programmers.co.kr/learn/courses/30/lessons/12914)




## 이진탐색
- 큰 범위를 절반씩 나눠서 탐색하는 경우
- 탑다운 방식(재귀 또는 while문)

[예상 대진표](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

## 슬라이딩윈도우, 투포인터, 구간 합
- 1차원 배열을 두 번 이상 반복해서 탐색해야 하는 경우
- O(n^2)의 시간복잡도를 O(n)으로 줄일 수 있음

### 슬라이딩 윈도우
- 부분배열의 크기가 고정되어 있는 경우
- 부분배열의 최댓값 갱신: `sum = sum + (arr[i] - arr[i - k])`
- 원형 수열에서 인덱스 탐색하기: `현재 인덱스 % 수열크기`

[연속 부분수열의 합](https://school.programmers.co.kr/learn/courses/30/lessons/131701)

### 투포인터
- 부분배열 또는 문자열이 연속적이고 가변적인 경우
- 정렬된(연속된) 배열 안에서 2개의 포인터 변수가 각각 시작점과 끝점(arr.length-1)에 위치한 경우
- 1차원 배열은 반드시 정렬되어 있어야 함
- ex. 연속된 수열 arr에서 전체 합이 n인 부분수열의 개수

[숫자의 표현](https://school.programmers.co.kr/learn/courses/30/lessons/12924)



## 조합, 순열, 중복조합


## 수학
### 소수
- n이 소수인지 아닌지 체크하는 경우
- [특정 자연수 범위 안에 해당해는 소수를 모두 구해야 하는 경우](https://github.com/marinarinarina/algorithm/blob/main/number-of-primes.js)

[카펫](https://school.programmers.co.kr/learn/courses/30/lessons/42842)


### 최대공약수와 최소공배수
```
const GCD = (min, max) => max % min === 0 ? min : GCD(max % min, min);
const LCM = (min, max) => min * max / GCD(min, max);
```

[n개의 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953)


### 이진수
- 이진수가 주어지거나 이진수를 반환해야 하는 경우 보통 문자열임. 하지만 join은 성능이 매우 느려 사용하면 시간초과됨
- 그래서 비트 연산 또는 스택을 같이 활용함.
- 이진수의 홀짝구분: 마지막 비트(0x1)만 보면 된다. `(num & 0x1) == 0`이면 짝수, 아니면 홀수
- 어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은 어떠한 수를 이진수로 변환한 수의 1의 개수와 같음
```
// nArr은 정수 n을 이진수로 변환한 배열 ex) n = 5  -> 4+0+1 -> [1,0,1]
nArr.reduce((a,b)=> a + b);
```

[다음 큰 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/12911)


## 기타 알고리즘
### 계수정렬
### 캐시
### 쿼드트리
### 등차수열과 등비수열
```
// 등차수열: f(n) = f(n-1) + a
// 등비수열: f(n) = f(n-1) * a
let result;

function solution(s, t, num) {
  let acc = 0;
  for(let i = 1; i <= num; i++) {
    if(i === 1) acc += s;
    else acc += t;
    console.log(acc);
  }
  return acc;
}

result = solution(3, 2, 5); // 첫항은 3, 공차는 2, 등차수열 5개 출력
console.log(result); // [3,5,7,9,11]
```

## 알고리즘 템플릿
2진수 홀짝 판별, 이진수에서 1의 개수 구하기, dx와 dy

슬라이딩윈도우, 투포인터, DFS, BFS, 소수판별, 에라토스테네스의 체, 최대공약수와 최소공배수

우선순위큐, 조합, 순열, 중복조합, 이진탐색, 서로소판별, 계수정렬, 

문자열 메소드:
- (*).repeat
- padStart(2, '0')와 padEnd
- replaceAll(바꿀문자, 적용할문자)
- subString(startIdx, endIdx)
- startsWith('C로시작하면 true아니면 false')
- indexOf, includes

등차수열의 합 = (첫째 항 + 마지막 항) * 항의 개수 / 2 

유클리드거리: Math.sqrt(Math.pow((x1- y1), 2) + Math.pow((x2- y2), 2))

맨해튼거리: Math.abs(x2 - x1) + Math.abs(y2 - y1);


