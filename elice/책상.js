const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (x) {
  input = x.split(' ').map(v => +v);
  rl.close();
}).on("close", function () {
  const [a, b, k] = input;
  console.log(solution(a, b, k));
// 테스트 케이스:
//   console.log(solution(1, 1, 1));
//   console.log(solution(8, 1, 1));
//   console.log(solution(1, 8, 1));
//   console.log(solution(2, 4, 2));
  process.exit();
});

function solution(a, b, k) {
    if(k > a || k > b) return 0;
    if(a === k && k === b) return 1;
    if(a === 1 && k === a) return b;
    if(b === 1 && k === b) return a;

    const x = Math.floor(a / k) * 2;
    const y = Math.floor((b - 2 * k) / k) * 2;

    return x + y;
}
