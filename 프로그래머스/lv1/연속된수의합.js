function solution(num, total) {
    let start = 0;
    let prefixes = [];

    while(true) {
        let now_total = 0; 
        for(let i = start; i < start + num; i++) {
            now_total += i;
        }
        if(now_total === total) {
            for(let i = 0; i < num; i++) {
                prefixes[i] = start;
                start++;
            } break;
        } else if(now_total < total) {
            start++;
        } else {
            start--;
        }
    }

    return prefixes;
}
