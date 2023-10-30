function solution(input) {
	for (const line of input) {
		if (line[0] === 0) break;
		else {
			let max = Math.max(line[0], line[1], line[2]);
			let rest = line[0] + line[1] + line[2] - max;

			if (max >= rest) console.log('Invalid');
			else if (line[0] === line[1] && line[0] === line[2]) console.log('Equilateral');
			else if (line[0] === line[1] || line[0] === line[2] || line[1] === line[2]) console.log('Isosceles');
			else console.log('Scalene');
		}
	}

	return;
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	input.forEach((val) => {
		list.push(val.split(' ').map((el) => parseInt(el)));
	});

	solution(list);
	process.exit();
});
