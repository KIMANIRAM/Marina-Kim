function solution(id_pw, db) {
    let id;
    let pw;
    let answer = 'fail';
    
    db.forEach((v, i) => {
        id = (v[0] === id_pw[0]) ? true : false;
        pw = (v[1] === id_pw[1]) ? true : false;
        
        if(id && pw) {
            answer = 'login';
            return;
        } else if(id) {
            answer = 'wrong pw';
        } 
    });
    
    return answer;
}
