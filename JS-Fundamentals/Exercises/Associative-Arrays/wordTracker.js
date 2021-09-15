function tracker(input) {
    let words = input.shift().split(' ');
    let wordObj = {};

    for (const word of words) {
        wordObj[word] = 0;
    }

    for (const word of words) {
        for (const element of input) {
            if (word === element) {
                wordObj[word]++;
            }
        }
    }

    let keys = Object.keys(wordObj).sort((a, b) => wordObj[b] - wordObj[a]);
    for (let key of keys) {
        console.log(`${key} - ${wordObj[key]}`);
    }
}