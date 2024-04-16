// 첫 번째 풀이 실패 - (45/100)
function preProcessing(str) {
    //"img01.gif" -> "img1" -> ["img", 1]
    let left = "";
    let right = "";
    let isNumberStart = false;
    for(let i = 0; i < str.length; i++) {
        if(isNaN(str[i]) && !isNumberStart) {
            left += str[i];
        }
        if(!isNaN(str[i])) {
            right += str[i];
            isNumberStart = true;
        }
    }
    return [left, Number(right)];
}

function solution(files) {
    // ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
    // [["img", 12], [...]]
    const dict = files.reduce((map, str, i) => {
        map.set(i, preProcessing(str.toLowerCase()));
        return map;
    }, new Map());
    const st = [];
    const dictToArr = Array.from(dict);
    
    dictToArr.sort(([k1, v1], [k2, v2]) => {
        switch(true) {
            case v1[0].localeCompare(v2[0]) === 1:
                return 1;
            case v1[0].localeCompare(v2[0]) === -1:
                return -1;
            case v1[0].localeCompare(v2[0]) === 0:
                return v1[1] - v2[1];
            default:
                break;
        }
    });
    
    const result = dictToArr.reduce((arr, e) => {
        arr.push(files[e[0]]);
        return arr;
    }, []);
    
    return result;
}


// 두 번째 풀이 성공 - head의 조건 추가 (100/100)
function preProcessing(str) {
    //"img000001.gif" -> "img0" -> ["img", 0]
    let left = "";
    let right = "";
    for(let i = 0; i < str.length; i++) {
        if(isNaN(str[i]) || [".", "-", " "].some(e => e === str[i])) {
            if(right.length) break;
            left += str[i];
        } else {
            right += str[i];
        }
    }
    return [left.toLowerCase(), parseInt(right)];
}

function solution(files) {
    // console.log(preProcessing("i   mg10000"))
    const dict = files.reduce((map, str, i) => {
        map.set(i, preProcessing(str));
        return map;
    }, new Map());
    const st = [];
    const dictToArr = Array.from(dict);
    
    dictToArr.sort(([k1, v1], [k2, v2]) => {
        if(v1[0].localeCompare(v2[0]) === 1) return 1;
        if(v1[0].localeCompare(v2[0]) === -1) return -1;
        if(v1[0].localeCompare(v2[0]) === 0) return v1[1] - v2[1];
    });
    //console.log(dictToArr)
    const result = dictToArr.reduce((arr, e) => {
        arr.push(files[e[0]]);
        return arr;
    }, []);
    
    return result;
}
