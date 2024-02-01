function solution(s) {
    const toJadenCase = (word) => {
        if(word.length === 0) return '';
        if(!isNaN(word[0])) return word[0] + word.slice(1).toLowerCase();
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    };
    
    return s.split(' ').reduce((ans, word, i) => {
        return i > 0 ? ans + ' ' + toJadenCase(word) : ans + toJadenCase(word)
    }, '');
}
