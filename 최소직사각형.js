// 가장 작은 지갑을 만들 수 있는 방법 => w는 가장 큰 원소들 중에서 최댓값, h는 가장 작은 원소들 중에서 최솟값
function solution(sizes) {
    let widths = [];
    let heights = [];
    let max_width = 0;
    let max_height = 0;
    
   for(let i = 0; i < sizes.length; i++) {
       if (sizes[i][0] > sizes[i][1]) {
           widths.push(sizes[i][0]);
           heights.push(sizes[i][1]);
       } else {
           widths.push(sizes[i][1]);
           heights.push(sizes[i][0]);
       }
   }
    max_width = widths.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
    max_height = heights.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
    
    return max_width * max_height;
}
