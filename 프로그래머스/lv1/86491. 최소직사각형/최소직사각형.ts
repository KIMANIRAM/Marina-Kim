function solution(sizes: number[][]) {
  const w: number[] = [];
  const h: number[] = [];
  sizes.forEach((size) => {
    if (size[0] > size[1]) {
      w.push(size[1]);
      h.push(size[0]);
    } else {
      w.push(size[0]);
      h.push(size[1]);
    }
  });
  const maxW = Math.max(...w);
  const maxH = Math.max(...h);

  return maxW * maxH;
}

const result = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

console.log(result); // tsnode 230621_greedy.ts
