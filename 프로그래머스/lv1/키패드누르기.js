// 유클리드 거리(대각선 거리)가 아니라 맨해튼 거리(직선 거리)를 구해야 함.
function twoPointDistance([x1, y1], [x2, y2]) {
    // 아래는 유클리드 거리 공식임:
    // return Math.sqrt(Math.pow((x1- y1), 2) + Math.pow((x2- y2), 2))
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function solution(numbers, hand) {
    const positions = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    }

    let [lpos, rpos] = [positions['*'], positions['#']];
    let pressedHands = '';

    numbers.forEach((number, idx) => {
        const npos = positions[String(number)];

        switch(number) {
            case 1:
            case 4:
            case 7:
                lpos = npos;
                pressedHands += 'L';
                break;
            case 3:
            case 6:
            case 9:
                rpos = npos;
                pressedHands += 'R';
                break;
            case 0:
            case 2:
            case 5:
            case 8:
                const posCompare = twoPointDistance(lpos, npos) - twoPointDistance(rpos, npos);
                if(posCompare < 0) {
                    lpos = npos;
                    pressedHands += 'L';
                } else if(posCompare > 0) {
                    rpos = npos;
                    pressedHands += 'R';
                } else {
                    if(hand === "left") {
                        lpos = npos;
                        pressedHands += 'L';
                    } 
                    if(hand === "right") {
                        rpos = npos;
                        pressedHands += 'R';
                    } 
                }
                break;
        }

    });

    return pressedHands;
}
