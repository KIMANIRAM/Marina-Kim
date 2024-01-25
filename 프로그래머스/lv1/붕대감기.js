// attacks의 길이: N, 1 ≤ N ≤ 100
function solution(bandage, health, attacks) {
    const attackTimes = attacks.map(attack => attack[0]);
    const attackAmounts = attacks.map(attack => attack[1]);
    const getIsHit = (time, attimes) =>  time === attimes[0] ? true : false;

    const N = attacks[attacks.length - 1][0] + 1;
    const [hpTime, hpPerSec, bonus] = bandage;
    let [curHp, combo] = [health, 0];
    
    const startTime = performance.now();
    
    for(let curTime = 1; curTime < N; curTime++) {
        let isHit = getIsHit(curTime, attackTimes);
        
        if(isHit) {
            attackTimes.shift();
            curHp -= attackAmounts.shift();
            combo = 0;
        } else {
            combo++;
            if(combo === hpTime || hpTime === 1) {
                combo = 0;
                curHp += bonus;
            }
            curHp = Math.min(health, curHp + hpPerSec);
        }
        
        if(curHp < 1) return -1;
    }
    
    const endTime = performance.now();
    
    console.log(`${endTime - startTime}ms`);
  
    return curHp;
}
