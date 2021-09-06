function solve(input) {
    let len = Number(input.shift());

    let pattern =
        /[^@\-:!>]*@([A-Za-z]+)[^@\-:!>]*:(\d+)[^@\-:!>]*!([AD])![^@\-:!>]*->(\d+)[^@\-:!>]*/;

    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < len; i++) {
        let encriptedMessage = input[i];

        let decriptedMessage = decript(encriptedMessage);

        let info = pattern.exec(decriptedMessage);

        if (info !== null) {
            if (info[3] === 'A') {
                attacked.push(info[1]);
            } else if (info[3] === 'D') {
                destroyed.push(info[1]);
            }
        }
    }

    attacked = attacked.sort((a, b) => a.localeCompare(b));
    destroyed = destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    for (let planet of attacked) {
        console.log('-> ' + planet);
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let planet of destroyed) {
        console.log('-> ' + planet);
    }

    function decript(message) {
        let count = 0;

        let result = '';

        for (let char of message) {
            let currentChar = char.toLowerCase();

            if (
                currentChar == 's' ||
                currentChar == 't' ||
                currentChar == 'a' ||
                currentChar == 'r'
            ) {
                count++;
            }
        }

        for (let i = 0; i < message.length; i++) {
            let decriptedChar = message[i].charCodeAt() - count;
            decriptedChar = String.fromCharCode(decriptedChar);

            result += decriptedChar;
        }

        return result;
    }
}

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);