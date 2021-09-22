function occurrences(words) {
    const wordsOcc = {};

    for (const word of words) {
        if (wordsOcc[word] == undefined) {
            wordsOcc[word] = 0;
        }

        wordsOcc[word]++;
    }

    const sortedWords = Object.entries(wordsOcc).sort((a, b) => b[1] - a[1]);

    for (const word of sortedWords) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

occurrences([
    'Here',
    'is',
    'the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'sentence',
    'And',
    'finally',
    'the',
    'third',
    'sentence'
]);
