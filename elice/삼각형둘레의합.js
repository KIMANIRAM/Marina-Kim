const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (x) {
  if(x == 0) {
    rl.close();
  } else {
    input.push(x);
  }
}).on("close", function () {
  console.log(input);
  solution(input);

  process.exit();
});

function solution(input) {
    const answer = []; // 문자열 배열

    while(input[0] != 0) {
        // 입력형식 변환
        const n = +input.shift();
        const arr = [];
        for(let i = 0; i < n; i++) {
            if(input[0].length === 1) {
                arr.push(+input.shift());
            } else {
                const x = input.shift().split(' ').map(v => +v);
                arr.push(x);
            }
        }

        // 로직
        console.log(n + ', ' + arr);
    }

    // 출력형식 변환
    // console.log(`Case #${i + 1}`);
}
