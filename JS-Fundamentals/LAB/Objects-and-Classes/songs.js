function songs(songInfo) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = songInfo.shift();
    let neededType = songInfo.pop();

    for (let i = 0; i < n; i++) {
        let [type, name, time] = songInfo[i].split('_');
        let song = new Song(type, name, time);

        songs.push(song);
    }

    if (neededType === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((x) => x.type === neededType);
        filtered.forEach((i) => console.log(i.name));
    }
}