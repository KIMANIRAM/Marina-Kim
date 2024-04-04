function solution(routes) {
    routes.map(route => route.sort((a, b) => a - b));
    routes.sort((a, b) => a[1] - b[1]);
    let min = 1;
    let preV = routes[0][1];

    for(let i = 1; i < routes.length; i++) {
        const [enter, leave] = routes[i];
        if(enter > preV) {
            preV = leave;
            min++;
        }
    }

    return min;
}
