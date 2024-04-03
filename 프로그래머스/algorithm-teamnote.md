## 시간복잡도
- **문제를 볼 때마다 시간복잡도 작성하기**

- 기술면접에서는 코테 문제를 보여주고 시간복잡도를 묻는 경우가 자주 발생함:
  - 가장 안쪽 함수부터 확인한다. 함수를 딱 한번만 호출하면 O(1)이지만, 바깥에서 for loop를 돌며 호출하고 있다면 최종 시간복잡도는 `N * O(1) = O(N)`이다.

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


## 스택/큐
- 하나씩 검사하면서 조건에 일치하면 스택에 있는 걸 한꺼번에 처리하는 경우
- 문자열 문제에서 스택을 많이 사용함

[올바른 괄호](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

[짝지어 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12973)

[괄호 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

## 우선순위큐
- 스택이나 큐를 사용해야 할 것 같은데 값을 큰 순서대로/작은 순서대로 꺼내야 할 때

- 그냥 우선순위큐:  최소 힙을 기준으로 부모 노드가 항상 자식 노드보다 작은 형태의 완전 이진 트리로 구현

- 이중 우선순위큐: Set으로 구현

[호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)

[이중우선순위큐](https://school.programmers.co.kr/learn/courses/30/lessons/42628)

## 해시
- 입력으로 배열이 주어지는데 각각의 원소의 개수를 세어야 하는 경우
- 완전탐색인데 n이 큰 경우
- 해시와 셋 둘 다 삽입삭제탐색 O(1)이지만 해시는 값의 순서가 보장되고 셋은 보장되지 않음

[영어 끝말잇기](https://school.programmers.co.kr/learn/courses/30/lessons/12981)

[할인행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127)

[롤케이크 자르기](https://school.programmers.co.kr/learn/courses/30/lessons/132265)

## 완전탐색, DFS(재귀), 백트래킹
- 컴퓨터는 1초에 천만 번 연산한다. n에 따라 사용하는 알고리즘이 달라진다. (500, 2000, 십만, 천만)

- 모든 경우를 탐색해야 하면 DFS를 사용한다.

- 상태트리를 그리는데 여러 개로 갈라진다 -> dfs를 여러 번 사용한다.

- 백트래킹: DFS를 통해 모든 노드를 깊이 우선 탐색을 하면서 현재 노드가 제한조건을 위배한다면 그 노드를 제외

[마법의 엘리베이터](https://school.programmers.co.kr/learn/courses/30/lessons/148653)

[n-queens](https://school.programmers.co.kr/learn/courses/30/lessons/12952)

[하노이 탑](https://school.programmers.co.kr/learn/courses/30/lessons/12946)

[삼각 달팽이](https://school.programmers.co.kr/learn/courses/30/lessons/68645)

## 최단거리, BFS
- 그리드 형태의 맵이 주어지고 목적지에 도착했을 때의 최단거리(최소비용)을 구하는 문제 -> 전형적인 BFS

[미로탈출](https://school.programmers.co.kr/learn/courses/30/lessons/159993)

[무인도 여행](https://school.programmers.co.kr/learn/courses/30/lessons/154540)

## 분할정복
- 특정 조건을 만족할 때까지 같은 작업을 계속 반복해야 하는 경우

- **문제에서 주어진 입력값부터 시작해서 아래로 내려가며 구현**

[이진변환 반복하기](https://school.programmers.co.kr/learn/courses/30/lessons/70129)

[점프와 순간이동](https://school.programmers.co.kr/learn/courses/30/lessons/12980)


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

- 중복된 값이 있는 배열이라면 upperBound와 lowerBound로 푼다.

[예상 대진표](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

[입국 심사](https://school.programmers.co.kr/learn/courses/30/lessons/43238)

[시소 짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/152996)

## 최단경로
- 그리디와 DP를 합친 유형.

- 다익스트라: 한 지점에서 다른 모든 지점까지의 최단 경로를 구해야 하는 경우, 시간복잡도 `O(ElogV)`

- 플로이드 워셜: 모든 지점에서 다른 모든 지점까지의 최단 경로를 구해야 하는 경우, 시간복잡도 `O(V³)`

[가장 먼 노](https://school.programmers.co.kr/learn/courses/30/lessons/49189)

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
백트래킹 기본 템플릿, bfs 기본 템플릿

슬라이딩윈도우, 투포인터, 소수판별, 에라토스테네스의 체, 최대공약수와 최소공배수

조합, 순열, 중복조합, 이진탐색, 서로소판별, 계수정렬, 

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
// 간선 정보 edge: [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
function solution(n, edge) {
    const d = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    const graph = Array.from(Array(n + 1), () => []);
    // a에서 b로 지나가는 비용은 1
    for(const [a, b] of edge) {
        graph[a].push([b, 1]); // [노드, 비용]
        graph[b].push([a, 1]);
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

맨해튼거리: Math.abs(x2 - x1) + Math.abs(y2 - y1);

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

이진탐색 활용 - upperBound와 lowerBound

```
function upperBound(target, arr, left, right) {
    while(left < right) {
        let mid = ~~((left + right) / 2);
        if(target < arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function lowerBound(target, arr, left, right) {
    while(left < right) {
        let mid = ~~((left + right) / 2);
        if(target <= arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```
