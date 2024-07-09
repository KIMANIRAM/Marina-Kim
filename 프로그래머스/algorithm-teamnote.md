## 팁

1. 큰 숫자는 `e+총 자릿수`를 활용한다. (ex. 1000000007로 나눈 결과를 출력하시오 => le9 + 7)

2. **구름 입력형식에서 `process.exit()`을 제거해도 테스트에서 문제가 없으면 제거한다.**

3. 정수는 0 포함이다.




## 백준, 엘리스, 구름 입출력 형식

1. 한줄
```
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	for await (const line of rl) {
		console.log(숫자를받아숫자를리턴하는함수(+line));
		rl.close();
	}
	
	process.exit();
})();
```

2. 두줄
```
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let [N, M] = [0, 0];
	const data = [];
	
	for await (const line of rl) {
		if(!N) {
			N = (+line.split(' ')[0]);
			M = (+line.split(' ')[1])
		} else {
			data.push(...line.split(' ').map(e => +e));
		}
		if(data.length === N) {
			rl.close();
		}
	}
	
	solution(N, M, data);
	process.exit();
})();

function solution(N, M, data) {
	console.log(N, M, data);
}
```

3. 여러줄
```

```

## 시간복잡도
- **문제를 볼 때마다 시간복잡도 작성하기**

- 보통 컴퓨터는 1초당 최대 **1억 번** 연산 가능.

- O(logN): 100억 번(최대 연산 횟수 = n의 범위)
- O(N): 천만 번
- O(NlogN): 10만 번
- O(N^2): 1만 번
- O(N^3): 500 번
- O(2^N): 20 번
- O(N!): 최대 10 번

- 기술면접에서는 코테 문제를 보여주고 시간복잡도를 묻는 경우가 자주 발생함:
  - 가장 안쪽 함수부터 확인한다. 함수를 딱 한번만 호출하면 O(1)이지만, 바깥에서 for loop를 돌며 호출하고 있다면 최종 시간복잡도는 `N * O(1) = O(N)`이다.
  - 이때 N을 넣었을 때 연산횟수가 1억 번이 넘어가면 해당 알고리즘은 사용할 수 없다.

- 하노이 탑 알고리즘의 시간복잡도: `O(2^n - 1)`

- 피보나치 수열의 시간 복잡도: 재귀함수는 `O(2^n)`, dp를 사용하면 `O(n)`


## 그리디, 정렬
- 관찰을 통해 탐색 범위를 줄이는 알고리즘

- 문제를 보자마자 시간복잡도를 확인하고 탐색범위를 줄이기 위한 최소한의 아이디어를 고안한다.
- 실전에서는?
  - 비슷한 문제를 풀어봤거나 간단한 문제여서 나의 그리디 풀이를 100% 확신한다. -> 일단 한번 제출해보고 틀리면 손절하고 다음 문제로 넘어간다.
  - 그리디 풀이를 찾아냈지만 100% 확신 못함 -> 일단 다음 문제로 넘어가고 시간이 남는다면 코딩 시작

- 정렬 먼저 한 뒤에 문제를 풀어야 하는 경우가 많음

- 대표적인 문제 유형: task scheduling problem, 재배열부등식

- **잘못된 그리디** DP 문제를 그리디로 착각해서 푸는 경우를 주의하자. (0-1 knapsack)

[최솟값 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12941)

[구명보트](https://school.programmers.co.kr/learn/courses/30/lessons/42885)

[귤고르기](https://school.programmers.co.kr/learn/courses/30/lessons/138476)

[호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)

[요격 시스템](https://school.programmers.co.kr/learn/courses/30/lessons/181188)

[단속 카메라](https://school.programmers.co.kr/learn/courses/30/lessons/42884?language=javascript)

[광물 캐기](https://school.programmers.co.kr/learn/courses/30/lessons/172927?language=javascript)


## 스택/큐
- 최대/최소를 물어보면서 주어진 배열을 정렬해서는 안 되는 문제
- 하나씩 검사하면서 스택에 넣었다가 조건에 일치하면 스택에 있는 걸 한꺼번에 처리
- 문자열 문제에서 스택을 많이 사용함
- 일련의 과정을 하나씩 수행하고, n이 최대 10000이면 큐 사용 가능.
- n이 10000을 초과 => for 문 내에서 shift를 사용하면 시간복잡도는 O(N^2)이 되서 시간 초과남.

[올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

[짝지어 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12973)

[괄호 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

[기능 개발](https://school.programmers.co.kr/learn/courses/30/lessons/42586)

[프로세스](https://school.programmers.co.kr/learn/courses/30/lessons/42587)

[다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

[주식가격](https://school.programmers.co.kr/learn/courses/30/lessons/42584)

[두 큐 합 같게 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/118667)


## 우선순위큐
- 스택이나 큐를 사용해야 할 것 같은데 값을 큰 순서대로/작은 순서대로 꺼내야 할 때

- 그냥 우선순위큐:  최소 힙을 기준으로 부모 노드가 항상 자식 노드보다 작은 형태의 **완전 이진 트리**로 구현

- 이중 우선순위큐: Set으로 구현

[호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)

[더 맵게](https://school.programmers.co.kr/learn/courses/30/lessons/42626)

[이중우선순위큐](https://school.programmers.co.kr/learn/courses/30/lessons/42628)


## 해시
- 입력으로 배열이 주어지는데 각각의 원소의 개수를 세어야 하는 경우
- 조합유형의 완전탐색 문제인데 n이 큰 경우(n이 10 이상인 경우)
- 해시와 셋 둘 다 삽입삭제탐색 O(1)이지만 해시는 값의 순서가 보장되고 셋은 보장되지 않음

[완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

[전화번호 목록](https://school.programmers.co.kr/learn/courses/30/lessons/42577)

[의상](https://school.programmers.co.kr/learn/courses/30/lessons/42578)

[영어 끝말잇기](https://school.programmers.co.kr/learn/courses/30/lessons/12981)

[할인행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127)

[롤케이크 자르기](https://school.programmers.co.kr/learn/courses/30/lessons/132265)


## 시뮬레이션, 완전탐색
- 문제에서 설명을 자세하게 하고 있다 -> 이대로 구현하기만 하면 된다.

- 탐색 범위가 작다면 최적화를 신경쓰지 않고 문제에서 설명하는 대로 구현만 하면 된다. (중첩 for문 사용 가능)

- 시간 절약 팁: 일단 선언적으로 작성한 다음 세부적인 함수를 구현한다.

- 다른 알고리즘이랑 같이 나오는 경우가 대부분이다.

완전탐색 -> [거리두기 확인하기](https://school.programmers.co.kr/learn/courses/30/lessons/81302), [행렬 테두리 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/77485), [프렌즈 4블록](https://school.programmers.co.kr/learn/courses/30/lessons/17679)

스택, 재귀 -> [괄호 변환](https://school.programmers.co.kr/learn/courses/30/lessons/60058)

조합(DFS), 해시 -> [메뉴 리뉴얼](https://school.programmers.co.kr/learn/courses/30/lessons/72411)

스택, 재귀, 순열(DFS) -> [수식 최대화](https://school.programmers.co.kr/learn/courses/30/lessons/67257)

해시, 정렬 -> [파일명 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/17686)


## DFS(재귀), 백트래킹
- 완전탐색(모든 경우를 탐색)인데 범위가 큰 경우에는 DFS/BFS/백트래킹을 사용한다.(그래도 안 풀리면 그리디 or DP)

- 상태트리를 그리는데 여러 개로 갈라진다 -> dfs를 여러 번 사용한다.

- DFS/BFS의 시간복잡도: 인접행렬을 사용하여 만든 그래프의 경우에는 O(n^2)의 시간복잡도를 가지고, 인접리스트를 사용하여 만든 그래프의 경우에는 O(n+e)이다.

- 백트래킹: DFS를 통해 모든 노드를 깊이 우선 탐색을 하면서 현재 노드가 제한조건을 위배한다면 그 노드를 제외

- DFS인데 n이 큰 경우 백트래킹을 사용한다. (n-queens, 여행경로, 단어변환 ...)

[마법의 엘리베이터](https://school.programmers.co.kr/learn/courses/30/lessons/148653)

[하노이 탑](https://school.programmers.co.kr/learn/courses/30/lessons/12946)

[삼각 달팽이](https://school.programmers.co.kr/learn/courses/30/lessons/68645)

[n-queens](https://school.programmers.co.kr/learn/courses/30/lessons/12952)

[단어 변환](https://school.programmers.co.kr/learn/courses/30/lessons/43163)

[여행 경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)


## 최단거리, BFS
- 그리드 형태의 맵이 주어지고 목적지에 도착했을 때의 최단거리(최소비용)을 구하는 문제 -> 전형적인 BFS

[게임 맵 최단거리](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

[미로탈출](https://school.programmers.co.kr/learn/courses/30/lessons/159993)

[무인도 여행](https://school.programmers.co.kr/learn/courses/30/lessons/154540)

## 분할정복
- 특정 조건을 만족할 때까지 같은 작업을 계속 반복해야 하는 경우

- **문제에서 주어진 입력값부터 시작해서 아래로 내려가며 구현**

[이진변환 반복하기](https://school.programmers.co.kr/learn/courses/30/lessons/70129)

[점프와 순간이동](https://school.programmers.co.kr/learn/courses/30/lessons/12980)

## 서로소 집합, 사이클 판별
- make 연산: 부모 노드의 인덱스를 저장하는 parents 배열. 초기에는 자기 자신만을 가리킨다. 이때 시간복잡도는 O(1)

- find 연산: 어떤 원소가 주어지면, 이 원소가 속한 집합의 대표 원소(=루트 노드)를 반환하는 연산

- Path Compression: find 연산을 수행할 때마다 트리를 평평하게 만드는 것. 평평한 트리가 만들어진 이후에는 O(1)만에 find를 수행 가능. 평균적으로 O(logN)

- union 연산: 두 개의 집합을 하나의 집합으로 합치는 연산. 즉 한 트리의 루트를 다른 트리의 루트에 연결해서 하나의 트리로 합치는 것. 이때 시간복잡도는 O(1)

[네트워크](https://school.programmers.co.kr/learn/courses/30/lessons/43162)

## DP
- 가장 작은 값부터 시작해서 이 값을 저장하고, 미리 구한 값을 이용해서 상위 문제를 풀어나가는 방식

- '`d[n]`은 처리하고자 하는 n번째 값' 이라는 아이디어를 시작으로 점화식부터 구한다.

- 문제에서 **~를 나눈 나머지**가 보이면 무조건 DP

- dp테이블은 미리 주어진 크기만큼 초기화 한 후 값을 변경한다. 동적으로 push하면 시간초과 주의!

[피보나치 수](https://school.programmers.co.kr/learn/courses/30/lessons/12945)

[N으로 표현](https://school.programmers.co.kr/learn/courses/30/lessons/42895)

[숫자 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/154538)

[멀리뛰기](https://school.programmers.co.kr/learn/courses/30/lessons/12914)

## 이진탐색
- 큰 범위를 절반씩 나눠서 탐색하는 경우

- 탐색 범위가 억단위인데 최소 결과값과 최대 결과값을 문제에서 바로 구할 수 있고 그 범위가 연속적인 경우

- 문제에서는 보통 while문을 사용

- **그냥 이진탐색만 알고있으면 문제를 풀 수 없는 경우가 많다.** 파라메트릭 서치, upperBound와 lowerBound를 알고 있어야 한다.
	- 중복된 값이 있는 배열이라면 upperBound와 lowerBound로 푼다.
	- start, end의 인덱스를 잘못 설정하는 경우 무한루프가 발생함 -> start와 end가 붙어 있고 두 값이 같으면 `mid = (start + end + 1) / 2` 로 설정해본다.
	- **숨겨진 이진탐색 문제**: 파라메트릭 서치(조건을 만족하는 최소/최댓값을 구하는 문제를 결정 문제로 변환해 이분 탐색을 수행하는 방법
	- BOJ 1654번 랜선자르기: N개를 만들 수 있는 랜선의 최대 길이 -> 랜선의 길이가 x일때 랜선이 N개 이상인가 아닌가?

[예상 대진표](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

[입국 심사](https://school.programmers.co.kr/learn/courses/30/lessons/43238)

[시소 짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/152996)

[디펜스 게임](https://school.programmers.co.kr/learn/courses/30/lessons/142085?language=javascript)


## 최단경로
- 그리디와 DP를 합친 유형.

- 다익스트라: 한 지점에서 다른 모든 지점까지의 최단 경로를 구해야 하는 경우, 시간복잡도 `O(ElogV)` (E: 간선 수, V: 노드 수)

- 플로이드 워셜: 모든 지점에서 다른 모든 지점까지의 최단 경로를 구해야 하는 경우, 시간복잡도 `O(V³)`

[가장 먼 노드](https://school.programmers.co.kr/learn/courses/30/lessons/49189)

[배달](https://school.programmers.co.kr/learn/courses/30/lessons/12978?language=javascript)

## 세그먼트 트리(인덱스 트리)
- 주어진 데이터의 **구간 합**과 **데이터 업데이트**를 빠르게 수행하기 위해 사용하는 알고리즘

- 세그먼트 트리의 타입 별 예제: 구간 합, 구간 곱, 최대, 최소(질의에 해당하는 노드 선택 방법)
  - 구간 합: 선택된 노드를 모두 더한다.
  - 최댓값: 선택된 노드 중 Max값을 선택
  - 최솟값: 선택된 노드 중 Min값을 선택

- 구간합을 구하는데 중간 중간에 데이터가 업데이트 되는 문제 -> 무조건 세그먼트 트리

- O(nlogn)으로 해결 가능.


[억억단을 외우자](https://school.programmers.co.kr/learn/courses/30/lessons/138475)

[징검다리 건너기](https://school.programmers.co.kr/learn/courses/30/lessons/64062?language=javascript)

## 슬라이딩윈도우, 투포인터
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
- 순열 시간 복잡도: O(n!)
- 조합 시간 복잡도: O(2ⁿ)
- 기본 순열과 조합 알고리즘은 n이 십만 이하일 때 사용해야 함

[땅따먹기](https://school.programmers.co.kr/learn/courses/30/lessons/12913)

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

[멀쩡한 사각형](https://school.programmers.co.kr/learn/courses/30/lessons/62048)


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
- 배열의 원소가 모두 양수이면서, 가장 큰 값과 가장 작은 값의 차이가 백만 이하일 경우 사용 가능

- 특정 조건에서는 씹사기 알고리즘: 정렬해야 하는 데이터 개수가 매우 많으면서, 데이터의 차이가 백만 이하, 많이 중복될 때

-시간복잡도: O(M + K), 데이터수: M, 최댓값: K

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

알파벳 배열: `[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]`

백트래킹 기본 템플릿

슬라이딩윈도우, 투포인터, 소수판별, 에라토스테네스의 체

조합, 순열, 중복조합(n이 10이하, 20 이하일 때만 사용)

```
// 조합
function getCombinations(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr.map((e) => e); // 배열을 원한다면 [e]

	arr.forEach((fixed, idx, origin) => {
		const rest = origin.slice(idx + 1);
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map(e => fixed + e); // 배열을 원한다면 [fixed, ...e]
		result.push(...attached);
	});

	return result;
}
// 순열
function getPermutations(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr.map((e) => [e]);

	arr.forEach((fixed, idx, origin) => {
		const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map((subSet) => [fixed, ...subSet]);
		result.push(...attached);
	});

	return result;
}
// 중복조합
function getMultisets(arr, selectedNum) {
	const result = [];
	if (selectedNum === 1) return arr;

	arr.forEach((fixed, idx, origin) => {
		const rest = origin;
		const combs = getCombinations(rest, selectedNum - 1);
		const attached = combs.map((subSet) => fixed + subSet);
		result.push(...attached);
	});

	return result;
}
```

서로소판별
```
//특정 원소가 속한 집합 찾기 (루트 찾기)
const findParent = (parent, x) => {
	if (parent[x] === x) return parent[x];
	return (parent[x] = findParent(parent, parent[x]));
};

//두 원소가 속한 집합을 합치기 (루트 갱신)
const unionParent = (parent, a, b) => {
	a = findParent(parent, a);
	b = findParent(parent, b);
	if (a < b) parent[b] = a;
	else parent[a] = b;
};

function solution(n, m, edges) {
	//부모 테이블 초기화
	let parent = [...Array(n + 1).fill(0)];
	for (let i = 1; i <= n; i++) {
		parent[i] = i;
	}

	//union 연산 수행
	for (const edge of edges) {
		const [a, b] = edge;
		unionParent(parent, a, b);
	}

	//각 원소가 속한 집합 출력
	let sets = '';
	for (let i = 1; i <= n; i++) {
		sets += findParent(parent, i);
	}

	console.log(`각 원소가 속한 집합: ${sets.split('').join(' ')}`);
	console.log(`부모 테이블: ${parent.slice(1, n).join(' ')}`);
}

const n = 5;
const m = 4;
const edges = [
	[4, 5],
	[3, 4],
	[2, 3],
	[1, 2],
];

solution(n, m, edges);
```

사이클 판별
```
function solution(n, m, edges) {
	let parent = [...Array(n + 1).fill(0)];
	for (let i = 1; i <= n; i++) {
		parent[i] = i;
	}

	let isCycle = false;
	for (const edge of edges) {
		const [a, b] = edge;
		if (parent[a] !== parent[b]) unionParent(parent, a, b);
		else {
			isCycle = true;
			break;
		}
	}

	console.log(isCycle ? '사이클이 발생했습니다.' : '사이클이 발생하지 않았습니다.');
}

const n = 3;
const m = 3;
const edges = [
	[1, 2],
	[1, 3],
	[2, 3],
];

solution(n, m, edges);
```

계수정렬
```
function countingSort(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let count = {};

	// min~max 사이의 모든 범위를 포함하는 배열 선언
	for (let i = min; i <= max; i++) {
		count[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		count[arr[i]] += 1; // 각 데이터에 해당하는 인덱스 값 증가
	}

	const sortedArr = [];
	for (let i = min; i < max; i++) {
		while (count[i] > 0) {
			// count의 원소가 0이 되면 정렬 멈춤
			sortedArr.push(i);
			count[i]--;
		}
	}

	return sortedArr;
}

const INPUT = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const OUTPUT = countingSort(INPUT);

console.log(OUTPUT); // [1, 2, 3, 6, 7, 9]
```

우선순위큐
```
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    empty() {
        return this.heap.length === 0;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(data) {
        this.heap.push(data);
        let i = this.heap.length - 1;
        
        while(i > 0) {
            const parent = ~~((i - 1) / 2);
            if(this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    
    pop() {
        if(this.empty()) return;
        
        const value = this.peek();
        
        [this.heap[0], this.heap[this.heap.length - 1]] = [
            this.heap[this.heap.length - 1],
            this.heap[0]
        ]
        this.heap.pop();
        this._heapify();
        
        return value;
    }
    
    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;
        
        while(2 * cur + 1 < n) {
            let left = 2 * cur + 1;
            let right = left + 1;
            let smaller = right < n &&
                this.heap[right] < this.heap[left] ? right : left;
            
            if(x > this.heap[smaller]) {
                [this.heap[cur], this.heap[smaller]] =
                    [this.heap[smaller], this.heap[cur]];
                cur = smaller;
            } else {
                break;
            }
        }
    }
}
```

다익스트라
```
// 노드 개수 n: 6
// 간선 정보 edge: [[3, 6, 1], [4, 3, 1], [3, 2, 1], [1, 3, 1], [1, 2, 1], [2, 4, 1], [5, 2, 1]]
function solution(n, edge) {
    const d = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    const graph = Array.from(Array(n + 1), () => []);
    // a에서 b로 지나가는 비용은 c
    for(const [a, b, c] of edge) {
        graph[a].push([b, c]); // [노드, 비용]
        graph[b].push([a, c]);
    }
    
    const dijkstra = (start) => {
        const pq = new PriorityQueue();
        pq.push([0, start]); // [비용, 노드]

        d[start] = 0;
        
        while(!pq.empty()) {
            const [dist, cur] = pq.pop();
            
            if(d[cur] < dist) continue;
            
            for(const i of graph[cur]) { 
                const node = i[0];
                const cost = dist + i[1];
                if(cost < d[node]) {
                    pq.push([cost, node]);
                    d[node] = cost;
                }
            }
        }
    };
    
    dijkstra(1); // 1번 노드에서 각 노드까지 갈때의 최단 경로
    
    return d; 
}
```

플로이드워셜
```
// 노드의 개수 n
// 간선 정보 edges = [[1,2,3], [1,4,3], [2,1,3], [2,3,1], [3,4,5], ...]
function solution(n, edges) {
  const d = Array(n + 1).fill().map(e => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  // a에서 b로 가는 비용은 c
  for(let i = 1; i <= n; i++) d[i][i] = 0;
  for(const [a, b, c] of edges) {
    d[a][b] = c;
    d[b][a] = c;
  }
	
  // 경유지 - 출발지 - 도착지
  for(let k = 1; k <= n; k++) {
    for(let a = 1; a <= n; a++) {
      for(let b = 1; b <= n; b++) {
        if(a === k || k === b) continue; // 대각원소는 무조건 0이라서 제외
        d[a][b] = Math.min(d[a][b], d[a][k] + d[k][b]);
      }
    }
  }
}
```

문자열 메소드:
- (*).repeat(반복개수)

- padStart(2, '0')와 padEnd

- replaceAll(바꿀문자, 적용할문자)

- subString(startIdx, endIdx)

- startsWith('C로시작하면 true아니면 false')

- indexOf, includes

등차수열의 합 = (첫째 항 + 마지막 항) * 항의 개수 / 2 

유클리드거리: Math.sqrt(Math.pow((x1- y1), 2) + Math.pow((x2- y2), 2))

맨해튼거리: Math.abs(x2 - x1) + Math.abs(y2 - y1)

DFS
```
const graph = {
  1: [2, 3, 8],
  2: [1, 7],
  3: [4, 5],
  4: [3, 5],
  5: [3, 4],
  6: [7],
  7: [2, 6, 8],
  8: [1, 7],
};

function dfs(start) {
  let result = '';
  const _dfs = (v, visited = new Set()) => {
    if(visited.has(v)) return;
    visited.add(v);
    result += v + ' ';
    graph[v].forEach(node => _dfs(node, visited));
  };
  _dfs(start);
  return result;
}

console.log(dfs(1));
```

BFS
```
function bfs(start, visited = new Set()) {
  let result = '';
  const q = [];
  q.push(start);
  visited.add(start);
  
  while(q.length) {
    const v = q.shift();
    result += v + ' ';
    graph[v].forEach(node => {
      if(!visited.has(node)) {
        q.push(node);
        visited.add(node);
      }
    })
  }
  return result;
}

console.log(bfs(1));
```

이진탐색
```
function binary_search(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = ~~((start + end) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

const INPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const OUTPUT = binary_search(INPUT, 8);

console.log(OUTPUT); // 7		
```

이진탐색 활용 - upperBound와 lowerBound

```
const INPUT = [1, 2, 2, 3, 3, 3, 4, 6, 7, 8];

function lowerBound(arr, target, left, right) {
	while (left < right) {
		const mid = ~~((left + right) / 2);
		if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return left;
}

function upperBound(arr, target, left, right) {
	while (left < right) {
		const mid = ~~((left + right) / 2);
		if (arr[mid] <= target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return left;
}

const moreOrEqual = lowerBound(
	INPUT.sort((a, b) => a - b),
	9,
	0,
	INPUT.length
);
const more = upperBound(
	INPUT.sort((a, b) => a - b),
	9,
	0,
	INPUT.length
);

console.log(`id: ${moreOrEqual}`);
console.log(`id: ${more}`);
console.log(`배열에 있는 target의 개수: ${more - moreOrEqual}`);
```

세그먼트 트리
```
const array = [5, 8, 4, 3, 7, 2, 1, 6];
const N = array.length;

function createSegmentTree(array, N) {
	const k = Math.ceil(Math.log2(N));
	const start = Math.pow(2, k);
	const size = start * 2;
	const st = Array(size).fill(0);

	for (let i = 0; i < N; i++) {
		st[start + i] = array[i];
	}

	for (let i = start - 1; i > 0; i--) {
		st[i] = st[i << 1] + st[(i << 1) | 1];
	}

	const getTree = () => st;

	const query = (min, max) => {
		let start = min + Math.pow(2, k) - 1;
		let end = max + Math.pow(2, k) - 1;
		let result = 0;

		while (start <= end) {
			if (start % 2 === 1) {
				result += st[start];
			}
			if (end % 2 === 0) {
				result += st[end];
			}
			start = (start + 1) >> 1;
			end = (end - 1) >> 1;
		}

		return result;
	};

	const update = (idx, val) => {
		let i = idx + Math.pow(2, k) - 1;
		st[i] = val;

		while (i > 1) {
			if (i % 2 === 0) {
				st[i >> 1] = st[i] + st[i + 1];
			} else {
				st[i >> 1] = st[i] + st[i - 1];
			}
			i = i >> 1;
		}
	};

	return { getTree, query, update };
}

const ST = createSegmentTree(array, N);

// 2~6까지의 구간 합? -> A[9]~A[13]까지의 구간합
// 1~4까지의 구간 합? -> A[8]~A[11]까지의 구간합
console.log(ST.query(2, 6)); // 24
console.log(ST.query(1, 4)); // 20

// 5번 데이터의 값을 10으로 업데이트
console.log('before: ', ST.getTree());
ST.update(5, 10);
console.log('after: ', ST.getTree());
```
