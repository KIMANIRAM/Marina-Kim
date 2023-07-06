function solution(n, arr1, arr2) {
    const merged = [];

    // 이진수 구하기
    const decoded1 = arr1.map((dec) => dec.toString(2));

    // decoded[i].length !== n이라면, length === n이 될 때까지 앞자리를 0으로 채워줌
    const filled1 = decoded1.map((binary) => {
        let gap = n - binary.length;
        if (gap !== 0) {
            let fill = ('0').repeat(gap);
            return fill + binary;
        }
        return binary;
    });

    const map1 = filled1.map((str) => str.split('').map(num => Number(num)));

    const decoded2 = arr2.map((dec) => dec.toString(2));

    const filled2 = decoded2.map((binary) => {
        let gap = n - binary.length;
        if (gap !== 0) {
            let fill = ('0').repeat(gap);
            return fill + binary;
        }
        return binary;
    });

    const map2 = filled2.map((str) => str.split('').map(num => Number(num)));

    // #은 양수
    for(let i=0; i<n; i++){
        const temp = [];
        for(let j=0; j<n; j++){
            temp.push(map1[i][j] + map2[i][j]);
        }
        // [ 2, 0, 1, 0, 1 ] -> "# # #"
        const str = temp.map((binary) => binary > 0 ? '#': ' ').join('');
        merged.push(str);
    }

    return merged;
}
