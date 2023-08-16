let n = 5;
let r = 3;
 
console.log(solution(n, r));
 
function solution(n, r){
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));
 
  function DFS(n, r){ 
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
  }
 
  answer = DFS(n, r);
  return answer;
}
