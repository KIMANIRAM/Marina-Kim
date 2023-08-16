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

rl.on("line", function (x) {
  if(x == 0) {
    rl.close();
  } else {
    input.push(x);
  }
}).on("close", function () {
  // console.log(input);
  solution(input);

  process.exit();
});

// 내 알고리즘 -> 테스트케이스 1번 실패
function solution(input) {
    const answer = [];

    while(input.length) {
        // 입력형식 변환
        const n = +input.shift();
        const arr = [];
        for(let i = 0; i < n; i++) {
            if(input[0].length === 1) {
                arr.push([+input.shift()]);
            } else {
                const x = input.shift().split(' ').map(v => +v);
                arr.push(x);
            }
        }
        // console.log(n);
        // console.log(arr);

        // 로직
        let height = 0;
        let width = 0;
        let side = 0;
        for(let i = 0; i < arr.length; i++) {
           for(let j = 0; j < arr[i].length; j++) {
               if(i === j) {
                   side += arr[i][j];
               } else if(i > 0 &&  i < arr.length && j === 0) {
                   height += arr[i][j];
               } else if(i === arr.length - 1 && j > 0 && j < arr.length - 1) {
                   width += arr[i][j];
               }
           }
        }
        
        // console.log(`height = ${height}, width = ${width}, side = ${side}`);
        answer.push(height + width + side);
    }

    // 출력형식 변환
    for(let i = 0; i < answer.length; i++) {
        console.log(`Case #${i + 1}:${answer[i]}`);
    }
}
