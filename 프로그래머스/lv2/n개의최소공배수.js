function solution(arr) {
    arr.sort((a, b) => a - b);

    const GCD = (min, max) => max % min === 0 ? min : GCD(max % min, min);
    const LCM = (min, max) => min * max / GCD(min, max);
    
    const getExtendLCM = (nums) => {
        if(nums.length === 1) return nums[0];
        const max = nums.pop();
        const min = nums.pop();
        const lcm = LCM(min, max);
        nums.push(lcm);
        return getExtendLCM(nums);
    };
    
    return getExtendLCM(arr);
}
