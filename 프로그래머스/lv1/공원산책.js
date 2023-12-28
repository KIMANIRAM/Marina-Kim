function solution(park, routes) {
    const directions = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1],
    }
    const xlimit = park.length;
    const ylimit = park[0].length;
    let xpos = 0;
    let ypos = 0;

    park.forEach((str, idx) => {
        const y = str.indexOf('S');
        if(y !== -1) {
            xpos = idx;
            ypos = y;
        }
    });

    routes.forEach((route) => {
        const [dir, distance] = route.split(' ');
        let [tx, ty] = [xpos, ypos];
        let flag = true;

        for(let i = 1; i <= parseInt(distance); i++) {
            tx += directions[dir][0];
            ty += directions[dir][1];

            if(tx <= -1 || tx >= xlimit || ty <= -1 || ty >= ylimit || park[tx][ty] === 'X') {
                flag = false;
                break;
            }
        }
      
        if(flag) {
            xpos = tx;
            ypos = ty;
        }
    });

    return [xpos, ypos];
}
