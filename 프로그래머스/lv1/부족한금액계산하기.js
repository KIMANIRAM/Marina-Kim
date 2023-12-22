// 등차수열의 합 = (첫째 항 + 마지막 항) * 항의 개수 / 2 
function solution(price, money, count) {
    if(price === 1 && money === 1 && count === 1) return 0;

    return Math.max(0, (price + price * count) * count / 2 - money);
}
