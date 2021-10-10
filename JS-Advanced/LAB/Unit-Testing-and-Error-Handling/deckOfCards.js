function printDeck(deck) {
    let result = [];
    for (let card of deck) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            result.push(cards(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(' '));
    

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
    
        if (validFaces.includes(face) == false || Object.keys(suits).includes(suit) == false) {
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
}

printDeck(['AS', '10D', 'KH', '2C'])
printDeck(['5S', '3D', 'QD', '1C'])