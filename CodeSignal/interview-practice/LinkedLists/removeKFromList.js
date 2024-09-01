function ListNode(x) {
  this.value = x;
  this.next = null;
}

function solution(l, k) {
  if(!l) return [];
  const arrayLikeObj = l.toJSON();
  const result = Array.prototype.filter.call(arrayLikeObj, (e) => e !== k);
  return result;
}
