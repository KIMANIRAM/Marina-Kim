function upperBound(target, arr, left, right) {
    while(left < right) {
        let mid = ~~((left + right) / 2);
        if(target < arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function lowerBound(target, arr, left, right) {
    while(left < right) {
        let mid = ~~((left + right) / 2);
        if(target <= arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function solution(weights) {
    weights.sort((a, b) => a - b);
    //console.log(weights);
    let cnt = 0;
    const rates = [[1, 1], [3, 2], [4, 2], [4, 3]];
    const getWeight = (x, rate) => x * rate[0] / rate[1];
    
    for(const rate of rates) {
        for(let i = 0; i < weights.length; i++) {
            let x = weights[i];
            if(x * rate[0] % rate[1] === 0) {
                const y = getWeight(x, rate);
                const upper = upperBound(y, weights, i + 1, weights.length);
                const lower = lowerBound(y, weights, i + 1, upper);
                //console.log(`upperBound 범위: ${i + 1} ~ ${weights.length}`);
                //console.log(`lowerBound 범위: ${i + 1} ~ ${upper}`);
                //console.log(x, y, upper, lower, upper - lower);
                cnt += (upper - lower);
            }
        }
    }
    
    return cnt;
}
