function solution(sizes) {
    const w = [];
    const h =[];
    sizes.forEach(size => {
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