function replaseChar(string) {
    let previusChar = string[0];
    let result = previusChar;
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== previusChar) {
            previusChar = string[i];
            result += string[i];
        }
    }

    console.log(result);
}

replaseChar('qqqwerqwecccwd');