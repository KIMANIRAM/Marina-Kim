// 한 번만 사용해야 함 => 두번째 인덱스를 반대로 접근한다.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", function (x) {
  n = +x;
  rl.close();
}).on("close", function () {
  console.log(solution(n)); 
  process.exit();
});

function solution(n) {
  const mod = 10**9 + 7;
  let d = Array(n + 1).fill(0);
  d[0] = 1;


  for(let i = 1; i <= n; i++) {
    for(let j = n; j >= i; j--) {
      d[j] = (d[j - i] + d[j]) % mod;
    }
  }

  return d.splice(1).join(' ').trim();
}
