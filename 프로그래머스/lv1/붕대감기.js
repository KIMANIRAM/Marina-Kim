function solution(bandage, health, attacks) {
    const timeLimit = attacks[attacks.length - 1][0] + 1;
    const [hpTime, hpPerSec, bonus] = bandage;
    let [curHp, combo] = [health, 0];

    for(let curTime = 1; curTime < timeLimit; curTime++) {
        let isHit = false;
        let tempHp = curHp;

        for(let i = 0; i < attacks.length; i++) {
            if(attacks[i][0] === curTime) {
                curHp -= attacks[i][1];
                combo = 0;
                isHit = true;
                break;
            }
        }

        if(curHp < 1) return -1;

        if(isHit) continue;

        combo++;

        if(combo === hpTime || hpTime === 1) {
            tempHp += bonus;
            combo = 0;
        }

        tempHp += hpPerSec;
        curHp = Math.min(health, tempHp);
    }

    return curHp;
}
