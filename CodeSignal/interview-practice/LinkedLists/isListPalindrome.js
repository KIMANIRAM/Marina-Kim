function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(l) {
  if(!l) return true;
  const arrayLikeObj = l.toJSON();
  const originStr = JSON.stringify(arrayLikeObj);
  const reversedStr = JSON.stringify(Array.prototype.reverse.call(arrayLikeObj));
  return originStr === reversedStr;
}
