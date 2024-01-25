function solution(today, terms, privacies) {
    const result = [];
    const [tYear, tMonth, tDay] = today.split('.').map(e => parseInt(e));
    const termsMap = terms.reduce((map, term) => {
        const [type, exp] = term.split(' ');
        map.set(type, exp);
        return map;
    }, new Map());

    // ex. 수집일자: [2008,11,3], 유효기간: 13개월  => 만기일자: [2009,12,2]
    const getExpDate = (date, exp) => {
        let expDay = date[2] + exp * 28; 
        let day = expDay % 28;
        let month = Math.floor(expDay / 28) + date[1];
        let year = date[0]; 

        if(day < 2) { 
            day += 27;
            month -= 1;
        } else {
            day -= 1;
        }

        if(month > 12) { 
            year += Math.floor(month / 12);
            month %= 12;
            if(month === 0) {
                year -= 1;
                month = 12;
            } 
        }

        return [year, month, day];
    }

    privacies.forEach((privacy, idx) => {
        const [date, type] = privacy.split(' '); 
        const [year, month, day] = 
              getExpDate(date.split('.').map(e => parseInt(e)), termsMap.get(type));
        console.log(year, month, day)
        if(tYear > year) {
            result.push(idx + 1);
        } else if(tYear === year) {
            if(tMonth > month) {
                result.push(idx + 1);
            } else if(tMonth === month) {
                if(tDay > day) result.push(idx + 1);
            }
        }
    });


    return result;
}
