/*
const N = nums.length;
const R = 3;
const NUMBER_OF_CASE = [];
const temp = Array(R);
    
// nCr의 조합을 구하는 함수
const DFS = (depth, startIdx) => {
    if(depth === R) {
        NUMBER_OF_CASE.push(temp.slice());
    } else {
        for(let i = startIdx; i < N; i++) {
            temp[depth] = nums[i];
            DFS(depth + 1, i + 1);
        }
    }
};

DFS(0, 0);
*/

function solution(nums) {
    const N = nums.length;
    const R = 3;
    const temp = Array(R);
    const NUMBER_OF_CASE = [];
    
    (function DFS(depth, startIdx) {
        if(depth === R) {
            NUMBER_OF_CASE.push(temp.slice());
        } else {
            for(let i = startIdx; i < N; i++) {
                temp[depth] = nums[i];
                DFS(depth + 1, i + 1);
            }
        }
    })(0, 0);
    
    const sums = NUMBER_OF_CASE.map(arr => arr.reduce((acc, cur) => acc + cur), 0);

    const isPrime = (x) => {
        if(x === 1) return false;
        for(let i = 2; i <= Math.sqrt(x); i++) {
            if(x % i === 0) return false;
        }  
        return true;
    };

    const count = sums.filter(v => isPrime(v)).length;
        
    return count;
}
