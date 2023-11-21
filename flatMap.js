// 1. 문자열 배열의 모든 조합 찾기
const array = ["apple", "banana", "lemon", "mango"];

const result = array.flatMap(
    (v, i) => array.slice(i+1).map( w => v + ' ' + w )
);

console.log(result);
/* result
[
  "apple banana",
  "apple lemon",
  "apple mango",
  "banana lemon",
  "banana mango",
  "lemon mango"
]
*/


// 2. 단어 목록 생성
const arr1 = ["it's Sunny in", "", "California"];

arr1.flatMap((x) => x.split(" "));
/* result
["it's","Sunny","in", "", "California"]
*/


// 3. 두 배열 간의 모든 단어 조합
var arr2=["A","B","C"];
var arr3=["1","2","3","4"];

arr2.flatMap(d => arr3.map(v => d + v));
/* result
["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"]
*/

// 4. 깊은 배열 평탄화
const arr4 = [1, 2, [4, 5], 6, 7, [8]] ;

arr4.flatMap((element) => element); 
/* result 
[1, 2, 4, 5, 6, 7, 8]
*/
