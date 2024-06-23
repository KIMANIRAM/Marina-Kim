// https://app.codesignal.com/interview-practice/question/pMvymcahZ8dY4g75q/description?solutionId=i9fX4RzuvgAP9s2S3

function solution(a: number[]): number {
    const ht = a.reduce((map, e, i) => {
        map.set(e, (map.get(e) || []).concat(i));
        return map;
    }, new Map<number, number[]>());
    
    const dupIdc = [...ht].filter(([e, idc]) => idc.length >= 2).map(([e, idc]) => idc[1]);
    
    return dupIdc.length >= 1 ? a[Math.min(...dupIdc)] : -1;
}
