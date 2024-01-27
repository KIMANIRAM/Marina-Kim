/*
Backtracking: 답이 될 만한지 판단하고 그렇지 않으면 그 부분까지 탐색하지 않는 것
문제에서:
1. DFS 등으로 모든 경우의 수를 탐색하는 과정에서,조건문 등을 걸어 답이 절대로 될 수 없는 상황을 정의
(promising function을 정의)
2. 그러한 상황일 경우에는 탐색을 중지시킨 뒤 그 이전으로 돌아가서 다시 다른 경우를 탐색

=> 즉, 모든 경우의 수를 따져봐야 하고 제약 조건이 존재할 때 백트래킹 알고리즘을 사용한다.

예를 들어 아래 문제는 완전탐색 문제다. 
'남학생 2명, 여학생 1명과 의자 3개가 있다. 3명의 학생을 모든 의자에 배치하는 모든 경우의 수는?
(단, 여학생은 가운데 자리에 앉으면 안 된다.)'

참고:
Branch and Bound: 백트래킹과는 달리 BFS로 상태공간트리를 만들고, 큐 대신 우선순위 큐를 사용한다.
두 알고리즘의 공통점: 상태 공간 트리를 만들어 나가며 불필요한 경로에서는 더이상 가지를 만들지 않는다.
*/

// 백트래킹 대표문제: N-Queen
function solution(n) {
  let count = 0;
  let board = Array(n);
  
  const promising = (cdx) => {
    for(let i = 0; i < cdx; i++) {
      if(board[cdx] === board[i] || cdx - i === Math.abs(board[cdx] - board[i])) {
        return false;
      }
    }
    return true;
  };
  
  const nqueen = (cdx) => {
    if(cdx === n) {
      count++;
      return;
    }
    
    for(let i = 0; i < n; i++) {
      board[cdx] = i;
      if(promising(cdx)) {
        nqueen(cdx + 1);
      }
    }
  };
  
  nqueen(0);
  
  return count;
}

const t0 = performance.now();
console.log(solution(8)); 
const t1 = performance.now();

console.log(`Execution time: ${t1 - t0} milliseconds.`);
