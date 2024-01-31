function solution(s) {
    const words = s.split(' ');
    const passedWords = [];
    
    words.forEach(word => {
       if(word.length === 0) {
           passedWords.push('');
       } else {
           if(!isNaN(word[0])) {
               passedWords.push(word.toLowerCase());
            } else {
                   passedWords.push(word[0].toUpperCase() 
                                    + word.slice(1).toLowerCase());       
               }
       }
    });
    
    return passedWords.join(' ');
}
