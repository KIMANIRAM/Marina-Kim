function solution(s) {
    const words = s.split(' ');
    const passedWords = [];
    
    words.forEach(word => {
      switch(true) {
        case word.length === 0:
          passedWords.push('');
          break;
        case isNaN(word[0]) === false:
          passedWords.push(word.toLowerCase());
          break;
        default:
          passedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      }
    });
    
    return passedWords.join(' ');
}
