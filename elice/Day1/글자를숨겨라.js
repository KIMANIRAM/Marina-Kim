const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  if(!line) {
    rl.close();
  } else {
    input.push(line);
  }
  
}).on("close", function () {
  for(let i = 0; i < input.length - 1; ++i) {
    const except = input.shift().split(' ');
    const n = parseInt(input.shift());
    const testCase = [];

    for(let j = 0; j < n; j++) {
      testCase.push(input.shift());
    }
    console.log(`Case ${i + 1}`);

    const result = solution(except, testCase);

    result.forEach(answer => console.log(answer));
    console.log();
  }
  process.exit();
});

function solution(except, testCase) {
  const result = testCase
    .map(val => val.replace(new RegExp(except[0], 'gi'), '_')) //g: 전역범위, i: 대소문자 구분 없이 매칭
    .map(val => val.replace(new RegExp(except[1], 'gi'), '_'));
  
  return result;
}
