// "50*6-3*2" -> [50, '*', 6, '-', 3, '*', 2]
function expressionToArr(expression) {
    const expArr = [];
    const operators = new Set();
    let temp = expression[0];

    for(let i = 1; i < expression.length; i++) {
        if(isNaN(expression[i])) {
            expArr.push(+temp);
            expArr.push(expression[i]);
            operators.add(expression[i]);
            temp = "";
        } else {
            temp += expression[i];
        }
    }
    expArr.push(+temp);
    return { expArr, operators };
}

// [ '*', '-' ] -> [[*,-], [-,*]]
function getPriority(arr, selectedNum) {
    const result = [];

    if(selectedNum === 1) return arr.map(e => [e]);

    arr.forEach((fixed, idx, origin) => {
        const tails = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const heads = getPriority(tails, selectedNum - 1);
        const attached = heads.map(head => [fixed, ... head]);
        result.push(...attached);
    });

    return result;
}

function calculate(t1, t2, targetOp) {
    switch(targetOp) {
        case '+':
            return t1 + t2;
        case '-':
            return t1 - t2;
        case '*':
            return t1 * t2;
    }
}

function updateExp(expArr, operators) {
    if(expArr.length === 1) {
        return expArr[0];
    }
    const i = expArr.indexOf(operators[0]);
    if(i === -1) {
        operators.shift();
        return updateExp(expArr, operators);
    }
    if(i !== -1) {
        const term = calculate(expArr[i - 1], expArr[i + 1], operators[0]);
        const updatedExpArr = [...expArr.slice(0, i - 1), term, ...expArr.slice(i + 2)];
        return updateExp(updatedExpArr, operators);
    }
}

function solution(expression) {
    let max = 0;
    const { expArr, operators } = expressionToArr(expression); 
    const q = getPriority([...operators], operators.size); 

    q.forEach(op => {
        const temp = updateExp(expArr, op);
        max = Math.max(max, Math.abs(temp));
    });

    return max;
}
