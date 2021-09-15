function strSubstring(word, string) {
    let lowerString = string.toLowerCase().split(' ');

    if (lowerString.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

strSubstring('python', 'JavaScript is the best programming language');