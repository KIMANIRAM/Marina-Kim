function solution(arr) {
    let result = [0, 0]; 

    const isCompress = (size, x, y, compareV) => { 
        for(let i = x; i < size + x; i++) {
            for(let j = y; j < size + y; j++) {
                if(arr[i][j] !== compareV) return false;
            }
        }
        return true;
    };

    const searchQuad = (s, x, y) => {
        if(isCompress(s, x, y, arr[x][y])) {
            result[arr[x][y]] += 1;
            return;
        }

        searchQuad(s/2, x, y);
        searchQuad(s/2, s/2+x, y);
        searchQuad(s/2, s/2+x, s/2+y);
        searchQuad(s/2, x, s/2+y);
    };

    searchQuad(arr.length, 0, 0);

    return result;
}
