function createPlaylist(genres, plays) {
    const playlist = new Map();
    for(let i = 0; i < plays.length; i++) {
        playlist.set(genres[i], (playlist.get(genres[i]) || []).concat([[i, plays[i]]]));
    }
    return playlist;
}

function createOrders(playlist) {
    const orders = [];
    for(const [genre, list] of playlist) {
        const cnt = list.reduce((a, b) => a + b[1], 0);
        orders.push([genre, cnt]);
    }
    return orders;
}

function sortOrders(orders) {
    return orders.sort((a, b) => b[1] - a[1]).map(order => order[0]);
}

function makeAlbum(orders, playlist) {
    const result = [];
    const sortPlaylist = list => list.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
    for(let i = 0; i < orders.length; i++) {
        result.push(...sortPlaylist(playlist.get(orders[i][0])).slice(0, 2).map(e => e[0]));
    }
    return result;
}

function solution(genres, plays) {
    const playlist = createPlaylist(genres, plays);
    const orders = createOrders(playlist);
    const sortedGenres = sortOrders(orders);
    return makeAlbum(orders, playlist);
}
