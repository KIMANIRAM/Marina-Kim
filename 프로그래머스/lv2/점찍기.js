// 첫 번째 풀이 - 시간초과(81/100), 완전탐색
function solution(k, d) {
    const D = Math.pow(d, 2);
    let [diagonal, lowerTriangular] = [0, 0];
    
    const compareDistance = (x, y) => Math.pow(x, 2) + Math.pow(y, 2) <= D;
    
    for(let a = 0; a <= d; a += k) {
        for(let b = 0; b <= d; b += k) {
            if(a > b) continue;
            const dist = compareDistance(a, b);
            if(dist) {
                if(a === b) {
                    diagonal += compareDistance(a, b);
                }
                if(b > a) {
                    lowerTriangular += compareDistance(a, b);
                } 
            } else {
                break;
            }
        }
    }
    
    return diagonal + lowerTriangular * 2;
}

// 두 번째 풀이 - 성공 (100/100), 수학(원점과 직선사이의 거리)
function solution(k, d) {
    const D = d * d;
    let ans = 0;
    
    for(let x = 0; x <= d; x++) {
        if(x * k > d) {
            break;
        } 
        const y = Math.floor(Math.sqrt(D - ((x * k) * (x * k))) / k);
        ans += (y + 1);
    }
    
    return ans;
}
