function combinations(n, arr) {
	const answer = [];
	const temp = Array(n);

	const DFS = (L, s) => {
		if (L >= n) {
			answer.push(temp.slice());
		} else {
			for (let i = s; i < arr.length; i++) {
				temp[L] = arr[i];
				DFS(L + 1, i + 1);
			}
		}
	};

	DFS(0, 0);

	return answer;
}

function permutations(n, arr) {
	const answer = [];
	const temp = Array(n);
	const visited = Array(n).fill(false);

	const DFS = (L) => {
		if (L >= n) {
			answer.push(temp.slice());
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (!visited[i]) {
					visited[i] = true;
					temp[L] = arr[i];

					DFS(L + 1);

					visited[i] = false;
				}
			}
		}
	};

	DFS(0);

	return answer;
}

console.log(combinations(2, [1, 2, 3, 4]));
console.log(permutations(2, [1, 2, 3]));
