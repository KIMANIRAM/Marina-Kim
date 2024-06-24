// https://app.codesignal.com/interview-practice/question/TG4tEMPnAc3PnzRCs/description

// Binary trees are already defined with this interface:
class Tree<T> {
  value: T;
  left: Tree<T>;
  right: Tree<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(t: Tree<number>, s: number): boolean {
    if(t === null) return false;
    
    let result = false;
    
    const dfs = (subT: Tree<number>, sum: number) => {
        //console.log(JSON.stringify(subT), sum)
        if(subT.left === null && subT.right === null) {
            // console.log(sum)
            if(sum + subT.value === s) result = true;
            return;
        }
        if(subT.left !== null) dfs(subT.left, sum + subT.value);
        if(subT.right !== null) dfs(subT.right, sum + subT.value);
    };
    
    dfs(t, 0);
    
    return result;
}
