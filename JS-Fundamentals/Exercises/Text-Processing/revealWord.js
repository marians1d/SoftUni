function revealWord(words, string) {
    words = words.split(', ');
    for (let word of words) {
        if (string.includes('*'.repeat(word.length))) {
            string = string.replace('*'.repeat(word.length), word);
        }
    }

    console.log(string);
}

revealWord(
    'great',
    'softuni is ***** place for learning new programming languages'
);