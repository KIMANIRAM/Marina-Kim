function solution(input) {
	let h = Math.ceil(input[0] / (input[2] + 1));
	let w = Math.ceil(input[1] / (input[3] + 1));

	console.log(h * w);
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
	input = line;
	rl.close();
}).on('close', function () {
	list = input.split(' ').map((el) => Number(el));

	solution(list);
	process.exit();
});
