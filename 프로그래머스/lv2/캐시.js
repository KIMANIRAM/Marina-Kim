/* 용어 정리
    LRU: 캐시가 가득 찼을 때 가장 오랫동안 사용되지 않은 페이지를 찾아서 없애는 알고리즘.
    큐의 tail에 있을 수록 가장 최근에 참조된 페이지이고, head에 있을 수록 가장 오랫동안 참조되지 않는 페이지임. 
    그래서 캐시 사이즈를 넘어서면 맨 앞에 있는 페이지가 삭제됨.
    
    캐시: 자주 사용하는 데이터를 미리 복사해놓는 임시 저장소
    캐시미스: CPU가 참조하고자 하는 메모리가 캐시에 없는 경우
    캐시히트: CPU가 참조하고자 하는 메모리가 캐시에 있는 경우
*/
function solution(cacheSize, cities) {
    const cache = [];
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    let time = 0;

    if(cacheSize === 0) {
        return cities.length * CACHE_MISS;
    }

    for(let i = 0; i < cities.length; i++) {
        const city = cities[i].toLowerCase();
        const index = cache.indexOf(city);
        if(index !== -1) {
            time += CACHE_HIT;
            cache.splice(index, 1);
            cache.push(city);
        } else {
            time += CACHE_MISS;
            if(cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(city);
        }
    }

    return time;
}
