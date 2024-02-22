/* 용어 정리
    LRU: 캐시가 가득 찼을 때 가장 오랫동안 사용되지 않은 페이지를 찾아서 없애는 알고리즘.
    큐의 tail에 있을 수록 가장 최근에 참조된 페이지이고, head에 있을 수록 가장 오랫동안 참조되지 않는 페이지임. 
    그래서 캐시 사이즈를 넘어서면 맨 앞에 있는 페이지가 삭제됨.
    
    캐시: 자주 사용하는 데이터를 미리 복사해놓는 임시 저장소
    캐시미스: CPU가 참조하고자 하는 메모리가 캐시에 없는 경우
    캐시히트: CPU가 참조하고자 하는 메모리가 캐시에 있는 경우
*/
function solution(cacheSize, cities) {
    const cacheMap = new Map();
    
    const cacheHit = (city, cache) => {
        cache.delete(city);
        cache.set(city, city);
        return 1;
    };
    
    const cacheMiss = (city, cache) => {
        if(cacheSize === 0) return 5;
        if(cache.size === cacheSize) {
            cache.delete(cache.keys().next().value);
        }
        cache.set(city, city);
        return 5;
    };

    const getTimeCache = (city, cache) => 
      (cache.has(city) ? cacheHit : cacheMiss)(city, cache);
    
    const totalTime = cities.map(
        city => getTimeCache(city.toLocaleLowerCase(), cacheMap))
                .reduce((total, time) => total + time, 0);
    
    return totalTime;
}
