// 문제 오류로 마지막에 공백 추가

const readline = require('readline');

const solution = (a, b) => {
	const createCounter = (arr) => {
		return arr.reduce((map, cur) => {
			map.set(cur, map.get(cur) + 1);
			return map;
		}, new Map([
			[4, 0],
			[3, 0],
			[2, 0],
			[1, 0],
		]));
	};
	
	const counterA = createCounter(a);
	const counterB = createCounter(b);
	
	let result = '';
	
	// console.log(counterA);
	// console.log(counterB);
	
	for(let key = 4; key > 0; key--) {
		if(counterA.get(key) !== counterB.get(key)) {
			result = counterA.get(key) > counterB.get(key) ? 'A' : 'B';
			break;
		}
	}
	
	return result === '' ? 'D' : result;
};

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n = 0;
	let rnd = 0;
	const a = [];
	const b = [];
	
	for await (const line of rl) {
		if(n === 0) {
			n = (+line);
			continue;
		} else {
			if(rnd % 2 === 0) {
				a.push(line.split(' ').slice(1).map(e => +e));
			} else {
				b.push(line.split(' ').slice(1).map(e => +e));
			}
			rnd += 1;
		}
		if(rnd === n * 2) rl.close();
	}

	for(let i = 0; i < n; i++) {
		console.log(solution(a[i], b[i]));
	}
	console.log('');
	process.exit();
})();
