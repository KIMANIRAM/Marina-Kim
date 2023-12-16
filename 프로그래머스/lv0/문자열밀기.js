function solution(A, B) {
   if (A === B) return 0;

	let count = A.length;
	let arr = A.split('');
	let result = '';

	do {
		if (count === -1) return count;
		let last = arr.pop();
		arr.unshift(last); 
		result = arr.join(''); 
		count -= 1;
	} while (result !== B);

	return A.length - count;
}
