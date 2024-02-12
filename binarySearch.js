/* 이진 탐색 (탐색 전 반드시 정렬 필요)
bad case: target이 양쪽 끝에 있는 경우, O(n)
good case: target이 중간값인 경우
평균 시간 복잡도: O(logN)

ex. 1부터 100 사이의 숫자 중 이진 탐색을 사용하면 어떤 숫자든지 7번 안에는 정답이 나온다.
*/
find_1_to_100();

function find_1_to_100() {
  const arr = Array(100).fill().map((_, i) => i + 1);
  
  for(let i = 1; i <= 100; i++) {
    const [_, searchCount] = binarySearch(i, arr); 
    console.log(`타겟이 ${i}일때 탐색 횟수는 ${searchCount}번`);
  }
}

function binarySearch(target, arr) {
  let count = 1;
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  
  while(target !== arr[mid]) {
    if(target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
    count++;
  }
  
  return [arr[mid], count];
}
