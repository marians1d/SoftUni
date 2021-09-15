function hashTag(string) {
    let index = 0;
    while (string.indexOf('#', index) !== -1) {
        let currentPosition = string.indexOf('#', index);
        let result = '';
        while (
            (string[currentPosition + 1].charCodeAt() >= 65 &&
                string[currentPosition + 1].charCodeAt() <= 90) ||
            (string[currentPosition + 1].charCodeAt() >= 97 &&
                string[currentPosition + 1].charCodeAt() <= 122)
        ) {
            result += string[currentPosition + 1];
            currentPosition++;

            if (currentPosition + 1 === string.length) {
                break;
            }
        }

        if (result !== '') {
            console.log(result);
        }

        index = currentPosition + 1;
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');