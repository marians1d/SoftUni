function cards(face, suit) {
    const validFaces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (validFaces.includes(face) == false) {
        throw new Error('Wrong input');
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

let card = cards('3', 'C');
card.toString();
