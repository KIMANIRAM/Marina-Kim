// 파라메트릭 서치
function isDefence(enemy, x, n, k) {
    if(x + 1 <= k) return true;
    const selectedEnemy = enemy.slice(0, x + 1).sort((a, b) => a - b);
    const total = selectedEnemy.slice(0, selectedEnemy.length - k).reduce((a, b) => a + b, 0);
    return total <= n;
}

function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(isDefence(enemy, mid, n, k)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
