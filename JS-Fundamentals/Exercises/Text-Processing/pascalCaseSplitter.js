function pascalCaseSplitter(string) {
    let result = [];
    let currentWord = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
            result.push(currentWord);
            currentWord = string[i];
        } else {
            currentWord += string[i];
        }
    }

    result.push(currentWord);
    console.log(result.join(', '));
}

pascalCaseSplitter('SOS');