// https://app.codesignal.com/interview-practice/question/BG94ZFECSNo6Kv7XW/description

function solution(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
}
