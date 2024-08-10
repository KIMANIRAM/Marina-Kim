const readline = require('readline');

const solution = (s, arr) => {
	const m = new Map();
	arr.forEach((e, i) => m.has(e) ? m.delete(e) : m.set(e, i));
	const result = Array.from(m).map(e => e[1]);
	
	return s[result[0]] + s[result[1]];
};



(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n = 0;
	let cnt = 0;
	const s = [];
	const arr = [];
	
	for await (const line of rl) {
		cnt += 1;
		if(!n) {
			n = (+line);
		} else {
			s.push(...line.split(' ').map(e => +e));
			arr.push(...line.split(' ').map(e => {
				if(e[0] === '-') return +(e.slice(1));
				return +e;
			}));
		}
		if(cnt === 2) rl.close();
	}
	console.log(solution(s, arr));
	process.exit();
})();
