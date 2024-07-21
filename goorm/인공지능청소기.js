const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let testCaseN = 0;
let cnt = 0;
const xyn = [];

const solution = (x, y, n) => {
	const sum = Math.abs(x) + Math.abs(y);
	return (sum <= n) && ((sum - n) % 2 === 0) ? 'YES' : 'NO';
};

rl.on("line", function(line) {
	if(testCaseN === 0) {
		testCaseN = (+line);
	} else {
		xyn.push(line.split(' ').map(e => +e));
		cnt++;
	}
	if(cnt === testCaseN) {
		rl.close();
	}
}).on("close", function() {
	xyn.forEach(([x, y, n]) => console.log(solution(x, y, n)));
	process.exit();
});
