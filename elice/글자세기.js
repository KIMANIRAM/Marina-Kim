const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on("line", function (x) {
  input = x;

  rl.close();
}).on("close", function () {
  const result = solution(input);
  for(const line of result) {
      console.log(line);
  }

  process.exit();
});


function solution(txt) {
  const alphabets = Array(26).fill().map((v, i) => String.fromCharCode(i + 65));
  const results = Array(26).fill().map((v, i) => String.fromCharCode(i + 65) + ' | ');

  for(let i = 0; i < 26; i++) {
    const regex = new RegExp(`${alphabets[i]}`, 'gi');
    const count = (txt.match(regex) || []).length;
    results[i] += '*'.repeat(count);
  }
  
  return results;
}
