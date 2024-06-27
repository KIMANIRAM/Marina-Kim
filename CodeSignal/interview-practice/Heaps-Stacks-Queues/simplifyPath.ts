// https://app.codesignal.com/interview-practice/question/aRwxhGcmvhf6vKPCp/solutions

function solution(path: string): string {
    const st: string[] = [];
 
    path.split('/').forEach(x => {
        if(x === '' || x === '.') return;
        if(x === '..') {
            if(st.length) st.pop();
        } else st.push(x);
    });
    
    return '/' + st.join('/');
}
