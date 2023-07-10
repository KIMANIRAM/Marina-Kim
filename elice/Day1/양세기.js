// I/O
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = []; 

rl.on("line", function (line) {
  if(!line) {
      rl.close();
  } else {
      input.push(line);
  }
  
}).on("close", function () {
  const testCaseCount = parseInt(input.shift());
  const arr = parse(input);
  
  const result = solution(testCaseCount, arr);

  for(let i = 0; i < testCaseCount; i++) {
    console.log(`Case ${i + 1}: This list contains ${result[i]} sheep.\n`);
  }
  
  process.exit();
});


// parsing
function parse(input) {
   const inputTestCase = [];
    for(let i = 0; i < input.length; ++i) { 
        if(i % 2 === 1) {
            inputTestCase.push(input[i].split(' ')); // [shepp, sheep, sheep, ship, Sheep]
        }
    }
    return inputTestCase;
}


// logic
function solution(n, input) {
    const result = [];
    for(let i = 0; i < n; i++) {
        let count = input[i].filter(val => 'sheep' === val).length;
        result.push(count);
    }
    r
