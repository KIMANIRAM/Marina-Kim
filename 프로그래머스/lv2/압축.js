function solution(msg) {
    const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const dict = [...ALPHABETS].reduce((map, alphabet, i) => {
        map.set(alphabet, i + 1);
        return map;
    }, new Map()); 
    const prints = [];
    let w = '';
    let end = 26; 
    
    for(let i = 0; i < msg.length; i++) { 
        w += msg[i];
        if(!dict.has(w)) {
            prints.push(dict.get(w.slice(0, -1)));
            end++;
            dict.set(w, end);
            w = msg[i];
        }
    }
    
    if(w) {
        prints.push(dict.get(w));
    }
    
    return prints;
}
