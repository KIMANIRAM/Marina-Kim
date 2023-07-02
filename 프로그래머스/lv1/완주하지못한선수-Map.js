function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}

/*
입력: ["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]

(0) init map = {}

(1) a = "mislav" 일때
map.get("mislav")의 결과는 undefined라서 "mislav"의 값은 0 + 1 = 1.
{
  mislav => 1
}

(2) b = "stanko" 일때
map.get("stanko")의 결과는 undefined라서 "stanko"의 값은 0 - 1 = -1.
{
  mislav => 1,
  stanko => -1
}

(3) a = "stanko" 일때
map.get("stanko")의 결과는 -1이라서 "stanko"의 값은 -1 + 1 = 0.
{
  mislav => 1,
  stanko => 0
}

(3) b = "ana" 일때
map.get("ana")의 결과는 undefined라서 "ana"의 값은 0 - 1 = -1.
{
  mislav => 1,
  stanko => 0,
  ana => -1
}

(4) a = "mislav" 일때
map.get("mislav")의 결과는 1이라서 "mislav"의 값은 1 + 1 = 2로 업데이트됨.
{
  mislav => 2,
  stanko => 0,
  ana => -1
}

(5) b = "mislav" 일때
map.get("mislav")의 결과는 2라서 "mislav"의 값은 2 - 1 = 1로 업데이트됨.
{
  mislav => 1,
  stanko => 0,
  ana => -1
}

(6) a = "ana" 일때
map.get("ana")의 결과는 -1이라서 "ana"의 값은 -1 + 1 = 0.
{
  mislav => 1,
  stanko => 0,
  ana => 0
}
*/
