function solution(k, n, lines) {
  let left = 1;
  let right = Math.pow(2, 31) - 1;

  const solve = (mid, n, lines) => {
    const x = lines.reduce((cnt, line) => cnt + Math.floor(line / mid), 0);
    return x >= n;
  };

  while(left < right) {
    const mid = ~~((left + right + 1) / 2);
    if(solve(mid, n, lines)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
} 

const k = 4;
const n = 11;
const lines = [802, 743, 457, 539]; 

console.log(solution(k, n, lines)); 
