function solution(num_list) {
    let count = 0;

    for(let i = 0; i < num_list.length; i++){
        let operator = num_list[i];
        while(operator > 1) {
            operator = operator % 2 === 0 ? operator / 2 : (operator - 1) / 2;
            count++;
        }
    }

    return count;
}
