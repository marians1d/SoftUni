function charactersInRange(startingChar, endingChar) {
    let min = startingChar.charCodeAt(0);
    let max = endingChar.charCodeAt(0);

    if (min > max) {
        let tempChar = min;
        min = max;
        max = tempChar;
    }

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let currentChar = String.fromCharCode(i);
        result += currentChar + ' ';
    }

    return result;
}