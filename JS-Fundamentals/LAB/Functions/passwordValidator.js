function passwordValidator(password) {
    let isValidOne = true;
    let isValidTwo = true;
    let isValidThree = true;

    isValidOne = rightLength(password);
    isValidTwo = hasOnlyCharAndNums(password);
    isValidThree = atLeastTwoDigits(password);

    if (isValidOne && isValidTwo && isValidThree) {
        console.log('Password is valid');
    }

    function rightLength(password) {
        let isValid = true;
        if (password.length < 6 || password.length > 10) {
            console.log('Password must be between 6 and 10 characters');
            isValid = false;
        }
        return isValid;
    }

    function hasOnlyCharAndNums(password) {
        let exclusiveChar = [
            ' ',
            '!',
            '"',
            '#',
            '$',
            '%',
            '&',
            "'",
            '(',
            ')',
            '*',
            '+',
            ',',
            '-',
            '.',
            '/',
            ':',
            ';',
            '<',
            '=',
            '>',
            '?',
            '@',
            '[',
            '\\',
            ']',
            '^',
            '_',
            '`',
            '{',
            '|',
            '}',
            '~'
        ];
        let isValid = true;
        for (let i = 0; i < password.length; i++) {
            for (let j = 0; j < exclusiveChar.length; j++) {
                if (password[i] == exclusiveChar[j]) {
                    isValid = false;
                }
            }
        }

        if (!isValid) {
            console.log('Password must consist only of letters and digits');
        }
        return isValid;
    }

    function atLeastTwoDigits(password) {
        let neededDights = 0;
        let isValid = true;

        for (let i = 0; i < password.length; i++) {
            switch (password[i]) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    neededDights++;
                    break;
            }
        }
        if (neededDights < 2) {
            console.log('Password must have at least 2 digits');
            isValid = false;
        }

        return isValid;
    }
}