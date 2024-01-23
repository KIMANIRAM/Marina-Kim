function solution(n, m, section) { 
    let start = section[0];
    let cnt = 0;
    
    for(let i = 0; i < section.length; i++){
        if(start + m > section[i]) continue;
        start = section[i];
        cnt += 1;
    };
    
    return cnt + 1;
}
