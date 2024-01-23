function solution(n, m, section) { 
    let start = section[0]; // 칠한 범위: start~start+m-1, 다음에 칠할 범위: start+m~
    let cnt = 1;
    
    for(let i = 0; i < section.length; i++){
        if(section[i] < start + m) continue;
        start = section[i];
        cnt += 1;
    };
    
    return cnt;
}
