function getTimeDiff(t1, t2) {
    const [h1, m1] = t1.split(':').map(e => +e);
    const [h2, m2] = t2.split(':').map(e => +e);
    return 60 * (h2 - h1) + (m2 - m1);
}

function tokenize(chord) {
    const st = []; 
    for(let i = 0; i < chord.length; i++) {
        if(chord[i] === '#') {
            st.push(st.pop() + '#');
        } else {
            st.push(chord[i]);
        }
    }
    return st;
}

function solution(m, musicinfos) {
    const updatedInfos = musicinfos.map(mi => {
        const [start, end, title, chord] = mi.split(',');
        const runtime = getTimeDiff(start, end);
        const chordToArray = tokenize(chord);
        let stream = chord.repeat(~~(runtime / chordToArray.length));
        stream += chordToArray.slice(0, runtime % chordToArray.length).join('');
        
        return [title, runtime, stream];
    });
    // ABC#EFGABC, m= ABC
    const answer = updatedInfos.filter(([title, playTime, score]) => {
        let i = score.indexOf(m);
        if(i === -1) return false;
        while(i !== -1) {
            let nextScore = score[i + m.length];
            if(nextScore !== '#') return true;
            i = score.indexOf(m, i + 1);
        }
    });
    
    if(!answer.length) return '(None)';
    
    answer.sort((a, b) => {
        if(a[1] === b[1]) return 0;
        return b[1] - a[1];
    });
    
    return answer[0][0];
}
