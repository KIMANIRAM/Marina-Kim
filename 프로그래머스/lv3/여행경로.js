function solution(tickets) {
    const n = tickets.length + 1; // 모두 사용해야하는 티켓 수
    const answer = [];
    const visited = Array(n - 1).fill(false);
    
    const DFS = (path) => {
        if(path.length === n) {
            answer.push(path);
        } else {
            for(let i = 0; i < n - 1; i++) {
                if(!visited[i]) {
                    const [departure, arrive] = tickets[i];
                    if(path[path.length - 1] === departure) {
                        visited[i] = true;
                        DFS([...path, arrive]);
                        visited[i] = false;
                    }
                }
            }
        }
    };
    
    DFS(['ICN']);

    return answer.sort()[0];
}
