function solution(genres, plays) {
    const playlist = new Map();
    const likes = new Map();
    
    for(let i = 0; i < plays.length; i++) {
        likes.set(genres[i], (likes.get(genres[i]) || 0) + plays[i]);
        playlist.set(genres[i], (playlist.get(genres[i]) || []).concat([[i, plays[i]]]));
    }
    
    const sortedLikes = Array.from(likes).sort((a, b) => b[1] - a[1]);
    const sortedList = [];
    for(let i = 0; i < sortedLikes.length; i++) {
        const list = playlist.get(sortedLikes[i][0]);
        list.sort((a, b) => {
            if(a[1] < b[1]) return 1;
            if(a[1] > b[1]) return -1;
            return a[0] - b[0];
        });
        // console.log(list)
        sortedList.push(...list.slice(0, 2).map(e => e[0]));
    }
    
    //console.log(playlist)
    //console.log(likes)
    //console.log(sortedLikes)
    return sortedList;
}
