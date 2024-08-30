// https://app.codesignal.com/interview-practice/question/xrFgR63cw7Nch4vXo/description

function solution(dishes: string[][]): string[][] {
    const map = new Map();
    const ingredients = [];
    
    dishes.forEach(dish => {
        for(let i = 1; i < dish.length; i++) {
            map.set(dish[i], (map.get(dish[i]) || []).concat(dish[0]));
        }
    });
    
    for(const [ingredient, dishes] of map) {
        if(dishes.length === 1) {
            map.delete(ingredient);
        } else {
            ingredients.push(ingredient);
        }
    }
    
    ingredients.sort();
    
    // const result = Array.from(map).sort().map(dish => [dish[0], ...dish[1]]);
    const result = ingredients.map(ingredient => {
        const dishes = map.get(ingredient).sort();
        return [ingredient].concat(dishes);
    });
    
    return result;
}
