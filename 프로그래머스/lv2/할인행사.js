function solution(want, number, discount) {
    let day = 0;
    const wishList = want.reduce((map, e, i) => {
        map.set(e, number[i]);
        return map;
    }, new Map());

    const isSignup = (i) => {
        let flag = true;
        const slicedDiscount = discount.slice(i, i + 10); // 2~11
        const basket = slicedDiscount.reduce((map, e) => {
            if(wishList.has(e)) {
                map.set(e, (map.get(e) || 0) + 1);
            }
            return map;
        }, new Map());

        wishList.forEach((v, k) => {
            if(basket.get(k) !== v) {
                flag = false;
                return;
            } 
        });

        return flag;
    }

    for(let i = 0; i < discount.length; i++) {
        if(discount.length - i < 10) break;
        if(isSignup(i)) {
            day++;
        }
    }

    return day;
}
