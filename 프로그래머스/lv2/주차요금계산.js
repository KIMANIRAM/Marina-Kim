function solution(fees, records) {
    const LIMIT = '23:59';
    const totalTimes = new Map(); 
    const minutes = new Map(); 

    const toMinutes = (time) => {
        const [h, m] = time.split(':').map(t => +t);
        return 60 * h + m;
    };

    const getAccTime = ([time, id, type]) => {
        time = toMinutes(time);
        if(minutes.has(id)) {
            const range = time - minutes.get(id);
            minutes.delete(id);
            totalTimes.set(id, (totalTimes.get(id) || 0) + range);
        } else {
            minutes.set(id, time); 
        }

        return minutes;
    };

    const getTotalFee = (time) => {
        return time < fees[0] ? fees[1] : fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    };

    records.forEach(record => getAccTime(record.split(' ')));

    if(minutes.size) {
        for(const [id, m] of minutes) {
            totalTimes.set(id, (totalTimes.get(id) || 0) + toMinutes(LIMIT) - m);
        }
    }

    for(const [id, time] of totalTimes) {
        totalTimes.set(id, getTotalFee(time));
    }

    return Array.from(totalTimes).sort((a, b) => a[0] - b[0]).map(e => e[1]);
}
