function solution(chicken) {
    let totalService = 0;
    let coupon = chicken;
    
    while(coupon >= 10) {
        const newService = Math.floor(coupon / 10);
        totalService += newService;
        coupon = (coupon % 10) + newService;
    }
    
    return totalService;
}
