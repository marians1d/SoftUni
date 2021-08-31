function oddOccurrences(string) {
    let words = {};
    let result = '';

    let strArray = string.split(' ');

    for (let word of strArray) {
        let wordLower = word.toLowerCase();

        if (!Object.keys(words).includes(wordLower)) {
            words[wordLower] = 0;
        }

        words[wordLower]++;
    }

    for (const key in words) {
        if (words[key] % 2 !== 0) {
            result += key + ' ';
        }
    }

    console.log(result);
}