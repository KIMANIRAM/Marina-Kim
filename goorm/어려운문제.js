const readline = require('readline');

const solution = n => {
	const dp = Array(n + 1).fill(0);
	dp[0] = 1;
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 6;

	if(n < 4) return dp[n];
	
	const convertUnits = a => {
		if(parseInt(a / 10) === 0) return a;

		return convertUnits([...String(a)].reduce((acc, cur) => acc + (+cur), 0));
	};
	
	for(let i = 4; i <= n; i++) {
		dp[i] = convertUnits(i * dp[i - 1]);
	}

	return dp[n];
};

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = null;
	for await (const line of rl) {
		input = (+line);
		rl.close();
	}
	console.log(solution(input));
	process.exit();
})();
