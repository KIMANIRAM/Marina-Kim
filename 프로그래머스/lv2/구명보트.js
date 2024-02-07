function solution(people, limit) {
    people.sort((a, b) => a - b); 
    let [start, end] = [0, people.length - 1];
    let cnt = 0;

    while(start < end) {
        if(people[start] + people[end] <= limit) {
            cnt++;
            start++;
        } 
        end--;
    }
    
    return people.length - cnt;
}
